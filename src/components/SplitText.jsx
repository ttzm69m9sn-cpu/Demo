import { useEffect, useRef } from 'react';

/**
 * Splits text into per-character spans for staggered reveal animation.
 * Triggered by IntersectionObserver, matches the .reveal pattern.
 */
export default function SplitText({ children, as = 'span', className = '', baseDelay = 0, charDelay = 22 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll('.split-char');
    if (!('IntersectionObserver' in window)) {
      chars.forEach((c) => c.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            chars.forEach((c, i) => {
              setTimeout(() => c.classList.add('is-visible'), baseDelay + i * charDelay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [baseDelay, charDelay]);

  const text = typeof children === 'string' ? children : '';
  const Tag = as;
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} className="split-char" aria-hidden="true">
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </Tag>
  );
}
