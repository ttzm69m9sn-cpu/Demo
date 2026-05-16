import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Ambient WebGL hero background: a slowly-drifting field of amber particles
 * with an electric-current grid mesh underneath. Subtle, premium, on-brand
 * for an industrial-electric company (current flowing through a substrate).
 */
export default function HeroBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ---------- PARTICLE FIELD ----------
    const particleCount = 380;
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      speeds[i] = 0.002 + Math.random() * 0.004;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Build a circular glow sprite via canvas
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(251, 191, 36, 1)');
    grad.addColorStop(0.3, 'rgba(245, 158, 11, 0.5)');
    grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const particleTex = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---------- WIRE GRID ----------
    const gridSize = 30;
    const gridDiv = 22;
    const grid = new THREE.GridHelper(gridSize, gridDiv, 0x3a2a08, 0x261a05);
    grid.rotation.x = Math.PI / 2.4;
    grid.position.z = -4;
    grid.position.y = -2;
    grid.material.transparent = true;
    grid.material.opacity = 0.35;
    scene.add(grid);

    // ---------- CENTER GLOW SPHERE ----------
    const glowGeo = new THREE.SphereGeometry(1.6, 32, 32);
    const glowMat = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform float time;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.5);
          vec3 color = mix(vec3(0.96, 0.62, 0.04), vec3(0.98, 0.75, 0.14), 0.5 + 0.5 * sin(time * 0.6));
          gl_FragColor = vec4(color, intensity * 0.55);
        }
      `,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.set(0, -0.4, -1);
    scene.add(glow);

    // ---------- MOUSE PARALLAX ----------
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ---------- ANIMATION LOOP ----------
    let frame;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      glowMat.uniforms.time.value = elapsed;

      // drift particles upward + reset
      const pos = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += speeds[i];
        if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5;
      }
      particleGeo.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsed * 0.04;

      grid.rotation.z = elapsed * 0.02;

      // ease camera with mouse
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    // ---------- RESIZE ----------
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      particleGeo.dispose();
      particleMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      particleTex.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
