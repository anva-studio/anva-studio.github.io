(() => {
try { const source=document.querySelector('script[src$="js/site.js"]');if(source)sessionStorage.setItem('anva-base',new URL('../',source.src).href); } catch {}
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#primary-nav'),mobile=matchMedia('(max-width: 700px)');
if(!toggle||!nav)return;
document.documentElement.classList.add('nav-ready');toggle.hidden=!mobile.matches;
const close=(focus=false)=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.innerHTML='Menu <span aria-hidden="true">+</span>';if(focus)toggle.focus();};
toggle.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.innerHTML=open?'Close <span aria-hidden="true">−</span>':'Menu <span aria-hidden="true">+</span>';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open'))close(true);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))close();});
document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!e.target.closest('.site-header'))close();});
document.querySelector('.site-header').addEventListener('focusout',e=>{if(e.relatedTarget&&!e.currentTarget.contains(e.relatedTarget))close();});
mobile.addEventListener('change',()=>{if(!mobile.matches&&document.activeElement===toggle)nav.querySelector('a').focus();close();toggle.hidden=!mobile.matches;});
})();

// The synchronous head initializer selects the palette before CSS is applied.
(() => {
  const control = document.querySelector('.theme-toggle');
  const system = matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try { preference = localStorage.getItem('anva-theme'); } catch {}
  if (!['light', 'dark'].includes(preference)) preference = null;
  const apply = theme => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (control) {
      const next = theme === 'dark' ? 'Cream Studio (light theme)' : 'Midnight Studio (dark theme)';
      control.setAttribute('aria-label', `Switch to ${next}`);
      control.title = `Switch to ${next}`;
    }
  };
  apply(preference || (system.matches ? 'dark' : 'light'));
  if (control) {
    control.hidden = false;
    control.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('anva-theme', preference); } catch {}
      apply(preference);
    });
  }
  system.addEventListener('change', () => {
    if (!preference) apply(system.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'anva-theme') return;
    preference = ['light', 'dark'].includes(event.newValue) ? event.newValue : null;
    apply(preference || (system.matches ? 'dark' : 'light'));
  });
})();

(() => {
  const dialog = document.querySelector('.screenshot-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('.dialog-caption');
  let trigger;
  document.querySelectorAll('[data-enlarge]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      image.src = link.querySelector('img').currentSrc || link.href;
      dialog.querySelector('.dialog-fullsize').href = image.src;
      image.alt = link.querySelector('img').alt;
      caption.textContent = image.alt;
      dialog.showModal();
      dialog.querySelector('.dialog-close').focus();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => trigger?.focus());
})();
