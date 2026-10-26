(() => {
  'use strict';
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const system = matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try { const stored = localStorage.getItem('anva-shelf-theme'); if (['light', 'dark'].includes(stored)) preference = stored; } catch {}
  const apply = theme => {
    root.dataset.theme = theme;
    const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    button.setAttribute('aria-label', label);
    button.title = label;
  };
  apply(preference || (system.matches ? 'dark' : 'light'));
  button.hidden = false;
  button.addEventListener('click', () => {
    preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('anva-shelf-theme', preference); } catch {}
    apply(preference);
  });
  system.addEventListener('change', () => { if (!preference) apply(system.matches ? 'dark' : 'light'); });
  addEventListener('storage', event => {
    if (event.key !== 'anva-shelf-theme') return;
    preference = ['light', 'dark'].includes(event.newValue) ? event.newValue : null;
    apply(preference || (system.matches ? 'dark' : 'light'));
  });
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
})();
