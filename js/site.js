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
