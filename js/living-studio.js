/* Native scrolling; updates only while scrolling, and only for visible scenes. */
(() => {
  const chapters = [...document.querySelectorAll('.journey-chapter')];
  const rooms = [...document.querySelectorAll('.room-stage')];
  const compass = document.querySelector('.chapter-compass');
  const footer = document.querySelector('footer');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 701px)');
  if (!chapters.length || !('IntersectionObserver' in window)) return;
  const visible = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
    schedule();
  }, { rootMargin: '80px' });
  rooms.forEach(room => observer.observe(room));
  let pending = false;
  function update() {
    pending = false;
    const height = innerHeight;
    const positions = [...visible].map(room => [room, room.getBoundingClientRect()]);
    let current = chapters[0];
    const chapterPositions = chapters.map(chapter => [chapter, chapter.getBoundingClientRect()]);
    const footerTop = footer.getBoundingClientRect().top;
    chapterPositions.forEach(([chapter, rect]) => { if (rect.top <= height * .48) current = chapter; });
    positions.forEach(([room, rect]) => {
      const drift = desktop.matches && !motion.matches ? Math.max(-22, Math.min(22, (height / 2 - rect.top - rect.height / 2) * .045)) : 0;
      room.style.setProperty('--room-drift', `${drift.toFixed(2)}px`);
    });
    const showCompass = desktop.matches && scrollY > height * .6 && footerTop > height * .9;
    // Keep a focused chapter link available until focus leaves the compass.
    const keepFocus = compass.contains(document.activeElement);
    compass.hidden = !showCompass && !keepFocus;
    compass.classList.toggle('is-visible', showCompass || keepFocus);
    compass.querySelectorAll('a').forEach(link => {
      if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(update); } }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  compass.addEventListener('focusout', schedule);
  motion.addEventListener('change', () => { rooms.forEach(room => room.style.removeProperty('--room-drift')); schedule(); });
  desktop.addEventListener('change', () => { rooms.forEach(room => room.style.removeProperty('--room-drift')); schedule(); });
  schedule();
})();
