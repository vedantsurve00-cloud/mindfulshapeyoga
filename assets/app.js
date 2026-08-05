(function(){
  const root=document.documentElement;
  let theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  root.setAttribute('data-theme',theme);
  const toggle=document.querySelector('[data-theme-toggle]');
  const icons={
    dark:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>',
    light:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"></path></svg>'
  };
  const updateTheme=()=>{if(toggle){toggle.innerHTML=theme==='dark'?icons.dark:icons.light;toggle.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode')}};
  updateTheme();
  toggle?.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';root.setAttribute('data-theme',theme);updateTheme()});

  const menuBtn=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('[data-nav]');
  menuBtn?.addEventListener('click',()=>nav?.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  const socialStack=document.createElement('div');
  socialStack.style.cssText='position:fixed;right:1.25rem;bottom:1.25rem;display:flex;flex-direction:column;gap:.85rem;z-index:999;';

  const waBtn=document.createElement('a');
  waBtn.href='https://wa.me/919004913827?text=Hi%20Amogh%20Sir%2C%20I%20have%20a%20question%20about%20the%20yoga%20programs%20at%20Mindful%20Shapes%20Yoga.';
  waBtn.target='_blank';
  waBtn.rel='noopener noreferrer';
  waBtn.setAttribute('aria-label','Chat on WhatsApp');
  waBtn.innerHTML='<svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
  waBtn.style.cssText='width:58px;height:58px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(37,211,102,.45);transition:transform .2s,box-shadow .2s;cursor:pointer;';
  waBtn.addEventListener('mouseenter',function(){this.style.transform='scale(1.08)';this.style.boxShadow='0 6px 24px rgba(37,211,102,.6)'});
  waBtn.addEventListener('mouseleave',function(){this.style.transform='';this.style.boxShadow='0 4px 18px rgba(37,211,102,.45)'});

  const instaBtn=document.createElement('a');
  instaBtn.href='https://www.instagram.com/mindfulshapesyoga?igsh=MTRxdHVsOWpreHpnNg==';
  instaBtn.target='_blank';
  instaBtn.rel='noopener noreferrer';
  instaBtn.setAttribute('aria-label','Visit Instagram');
  instaBtn.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.6" cy="6.4" r="1.2" fill="#fff" stroke="none"></circle></svg>';
  instaBtn.style.cssText='width:58px;height:58px;background:linear-gradient(135deg,#feda75 0%,#fa7e1e 18%,#d62976 46%,#962fbf 68%,#4f5bd5 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(214,41,118,.4);transition:transform .2s,box-shadow .2s;cursor:pointer;';
  instaBtn.addEventListener('mouseenter',function(){this.style.transform='scale(1.08)';this.style.boxShadow='0 6px 24px rgba(214,41,118,.55)'});
  instaBtn.addEventListener('mouseleave',function(){this.style.transform='';this.style.boxShadow='0 4px 18px rgba(214,41,118,.4)'});

  socialStack.appendChild(waBtn);
  socialStack.appendChild(instaBtn);
  document.body.appendChild(socialStack);

  const mediaQuery=window.matchMedia('(max-width: 480px)');
  const setFloatingSize=()=>{
    const scale=mediaQuery.matches?0.86:1;
    const size=Math.round(58*scale);
    [waBtn, instaBtn].forEach(button=>{
      button.style.width=size+'px';
      button.style.height=size+'px';
    });
    socialStack.style.right=mediaQuery.matches?'0.85rem':'1.25rem';
    socialStack.style.bottom=mediaQuery.matches?'0.9rem':'1.25rem';
  };
  setFloatingSize();
  mediaQuery.addEventListener?.('change',setFloatingSize);
})();
