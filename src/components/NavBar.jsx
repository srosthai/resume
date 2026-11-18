import { useEffect, useState } from 'react';
import GooeyNav from './reactbits/GooeyNav';

const items = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export default function NavBar() {
  const [theme, setTheme] = useState('light');
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const next = sections.indexOf(visible.target);
        if (next >= 0) setActive(next);
      },
      { rootMargin: '-38% 0px -52% 0px', threshold: [0, 0.1, 0.35, 0.7, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <GooeyNav
      items={items}
      activeIndex={active}
      onChange={(index) => setActive(index)}
      theme={theme}
      color={theme === 'dark' ? '#f5f5f5' : '#0a0a0a'}
      activeTextColor={theme === 'dark' ? '#0a0a0a' : '#ffffff'}
      size="sm"
      frame
      animationTime={550}
      particleCount={12}
      timeVariance={220}
      spread={44}
      gooeyness={0.5}
      wobble={0.42}
      hoverEffect
      className="header-gooey"
      ariaLabel="Sections"
    />
  );
}
