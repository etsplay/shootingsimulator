// Theme system: light | dark | auto
(function(){
  const root = document.documentElement;
  const rootEl = document.querySelector('.theme-root') || root;
  const select = document.getElementById('theme-select');
  const toggle = document.getElementById('theme-toggle');

  const storageKey = 'site-theme';

  function applyTheme(mode){
    // mode = 'light' | 'dark' | 'auto'
    rootEl.setAttribute('data-theme', mode);
    // also update class shortcuts (optional)
    rootEl.classList.remove('theme-light','theme-dark');
    if(mode === 'light') rootEl.classList.add('theme-light');
    if(mode === 'dark') rootEl.classList.add('theme-dark');
    // Save
    try{ localStorage.setItem(storageKey, mode); }catch(e){}
    if(select) select.value = mode;
  }

  function getStored(){
    try{ return localStorage.getItem(storageKey); }catch(e){return null}
  }

  // Initialize
  const stored = getStored();
  if(stored === 'light' || stored === 'dark' || stored === 'auto'){
    applyTheme(stored);
  } else {
    applyTheme('auto');
  }

  // Hook up controls (if present) — templates include them
  if(select){
    select.addEventListener('change', (e)=> applyTheme(e.target.value));
  }
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const current = rootEl.getAttribute('data-theme') || 'auto';
      const next = current === 'dark' ? 'light' : (current === 'light' ? 'auto' : 'dark');
      applyTheme(next);
    });
  }

  // React to system preference changes when in auto
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener && mq.addEventListener('change', ()=>{
    if((rootEl.getAttribute('data-theme')||'auto') === 'auto'){
      // re-apply to pick up new media query values (CSS handles the variables)
      rootEl.setAttribute('data-theme','auto');
    }
  });
})();