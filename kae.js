(() => {
  'use strict';
  if (document.getElementById('kae-companion-v3')) return;
  const root = document.createElement('aside');
  root.id = 'kae-companion-v3';
  root.setAttribute('aria-label', 'Kae, mascota interactiva de KAEN GAMES');
  root.innerHTML = `
<style>
#kae-companion-v3{--kae-rose:#fa7787;--kae-width:195px;position:fixed;bottom:10px;left:calc(100vw - 240px);z-index:99990;width:220px;font:500 14px/1.45 system-ui,-apple-system,Segoe UI,sans-serif;transition:left 3.2s linear;color:#421c2b;pointer-events:none;-webkit-tap-highlight-color:transparent}
#kae-companion-v3 *{box-sizing:border-box}
#kae-companion-v3 .kae-bubble{position:relative;max-width:230px;margin:0 auto 4px;padding:12px 14px;color:#53202e;background:#fff7f7;border:2px solid #f8a5b2;border-radius:16px 16px 4px 16px;box-shadow:0 6px 26px #05020580;pointer-events:auto;text-wrap:pretty;opacity:1;transform:translateY(0);transition:opacity .25s,transform .25s}
#kae-companion-v3 .kae-bubble::after{content:'';position:absolute;right:29px;bottom:-9px;width:13px;height:13px;background:#fff7f7;border-right:2px solid #f8a5b2;border-bottom:2px solid #f8a5b2;transform:rotate(45deg)}
#kae-companion-v3 .kae-bubble[hidden]{display:none}
#kae-companion-v3 .kae-figure{display:block;position:relative;margin-left:auto;margin-right:auto;width:var(--kae-width);height:auto;aspect-ratio:1;border:0;background:none;cursor:pointer;pointer-events:auto;padding:0;filter:drop-shadow(0 12px 11px #05030a90);outline-offset:5px;animation:kae-idle 3.2s ease-in-out infinite}
#kae-companion-v3 .kae-figure img{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none;transform-origin:50% 80%;transition:filter .25s}
#kae-companion-v3 .kae-figure:focus-visible,#kae-companion-v3 .kae-hide:focus-visible,#kae-companion-v3 .kae-return:focus-visible{outline:3px solid #ff889e}
#kae-companion-v3 .kae-figure:hover{filter:drop-shadow(0 10px 11px #05030b90) brightness(1.07)}
#kae-companion-v3.kae-walking .kae-figure{animation:kae-walk .34s ease-in-out infinite}
#kae-companion-v3.kae-sleeping .kae-figure{animation:kae-sleep 3.4s ease-in-out infinite;filter:drop-shadow(0 8px 7px #02010b80) brightness(.88)}
#kae-companion-v3.kae-excited .kae-figure{animation:kae-bounce .34s ease-in-out 3}
#kae-companion-v3.kae-face-right .kae-figure img{transform:scaleX(-1)}
#kae-companion-v3 .kae-hide{position:absolute;right:8px;top:0;pointer-events:auto;border:1px solid #f5a0b1;background:#fff8f8;color:#9b233b;border-radius:50%;width:28px;height:28px;font-size:20px;cursor:pointer;box-shadow:0 3px 9px #0005}
#kae-companion-v3 .kae-return{display:none;pointer-events:auto;position:absolute;right:4px;bottom:6px;background:#32121c;border:1px solid #ef758d;border-radius:50px;color:#fff;padding:10px 16px;font-weight:750;white-space:nowrap;cursor:pointer;box-shadow:0 5px 18px #0008}
#kae-companion-v3.kae-hidden .kae-bubble,#kae-companion-v3.kae-hidden .kae-figure,#kae-companion-v3.kae-hidden .kae-hide{display:none!important}
#kae-companion-v3.kae-hidden .kae-return{display:block}
#kae-companion-v3 .kae-zz{display:none;position:absolute;right:16px;top:28px;color:#ffa2bb;font-size:22px;font-weight:850;transform:rotate(-16deg);text-shadow:0 2px 8px #000;animation:kae-zz 2s ease-in-out infinite;pointer-events:none}
#kae-companion-v3.kae-sleeping .kae-zz{display:block}
#kae-companion-v3 .kae-heart{position:absolute;font-size:24px;right:50px;bottom:125px;pointer-events:none;animation:kae-heart-fly 1.35s ease-out forwards}
@keyframes kae-idle{0%,100%{transform:translateY(0) rotate(-1.3deg)}50%{transform:translateY(-7px) rotate(1.3deg)}}
@keyframes kae-walk{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-11px) rotate(3deg)}}
@keyframes kae-sleep{0%,100%{transform:translateY(5px) rotate(-10deg) scale(.95)}50%{transform:translateY(8px) rotate(-8deg) scale(.96)}}
@keyframes kae-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-23px)}}
@keyframes kae-zz{0%,100%{transform:translateY(0);opacity:.65}50%{transform:translateY(-10px);opacity:1}}
@keyframes kae-heart-fly{0%{opacity:1;transform:translateY(0) scale(.6) rotate(-15deg)}100%{opacity:0;transform:translateY(-95px) scale(1.6) rotate(20deg)}}
@media(max-width:600px){#kae-companion-v3{--kae-width:138px;width:170px;font-size:12px}#kae-companion-v3 .kae-bubble{padding:9px 11px;max-width:168px}#kae-companion-v3 .kae-hide{right:4px;width:25px;height:25px}}
@media(prefers-reduced-motion:reduce){#kae-companion-v3,#kae-companion-v3 .kae-figure,#kae-companion-v3 .kae-zz,#kae-companion-v3 .kae-heart{animation:none!important;transition:none!important}}
</style>
<div class="kae-bubble" id="kae-speech-v3" role="status" aria-live="polite"></div>
<button class="kae-hide" type="button" title="Ocultar a Kae" aria-label="Ocultar a Kae">×</button>
<button class="kae-figure" type="button" title="¡Habla con Kae!" aria-label="Hablar con Kae"><img src="kae/kae.png" alt="Kae, la kitsune chibi negra y roja de KAEN GAMES" draggable="false"></button>
<span class="kae-zz" aria-hidden="true">Z z z</span>
<button class="kae-return" type="button" aria-label="Mostrar a Kae">🦊 ¡Kae!</button>`;
  document.body.appendChild(root);
  const figure = root.querySelector('.kae-figure');
  const speech = root.querySelector('.kae-bubble');
  const hideButton = root.querySelector('.kae-hide');
  const showButton = root.querySelector('.kae-return');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const thatDay = location.pathname.toLowerCase().includes('that-day');
  const phrases = [
    '¡Konkon! ¡Al fin me haces caso! 🦊',
    '¡¿A que soy monísima?! ... ¡No hace falta que respondas! ❤️',
    '¡Oye! ¡No me hagas cosquillas en las orejitas! 🌸',
    '¡Bienvenido a KAEN GAMES! ¡Te estábamos esperando!',
    '¡Soy Kae, la jefa de las travesuras! Jejeje~',
    '¿Un videojuego nuevo? ¡Yo quiero verlo primero! 🎮',
    '¡Gracias por pasarte! ¡Esto acaba de comenzar! ❤️'
  ];
  let clickCount=0, lastAction=Date.now(), lastPosition=0, speechTimeout=null, walkTimeout=null;
  let walking=false, sleeping=false, hidden=false, step=0;
  const position = () => Math.max(8,innerWidth-root.getBoundingClientRect().width-12);
  function moveTo(pixels, fast=false){
    const max=position();
    const target=Math.max(8,Math.min(max,Math.round(pixels)));
    root.style.transitionDuration=fast?'0s':'3.2s';
    root.style.left=target+'px';
    if(lastPosition!==0)root.classList.toggle('kae-face-right',target>lastPosition);
    lastPosition=target;
  }
  function talk(text, duration=7200){
    speech.textContent=text;
    speech.hidden=false;
    clearTimeout(speechTimeout);
    speechTimeout=setTimeout(()=>speech.hidden=true,duration);
  }
  function confetti(){
    if(reducedMotion.matches)return;
    const heart=document.createElement('span');heart.className='kae-heart';heart.textContent=['❤️','🌸','✨'][clickCount%3];root.appendChild(heart);
    setTimeout(()=>heart.remove(),1400);
  }
  function stopWalk(){walking=false;root.classList.remove('kae-walking');clearTimeout(walkTimeout)}
  function wake(){sleeping=false;root.classList.remove('kae-sleeping')}
  function onClick(){
    lastAction=Date.now();
    stopWalk();
    if(sleeping){wake();talk('¡¡KYAAA!! ¿Eh? ¡N-no estaba durmiendo! ¡Vigilaba! 🦊💤');}
    else{
      const message=thatDay&&clickCount%4===3 ? '¡Qué bonitas las flores de That Day! Me pregunto qué historia nos espera... 🌸':phrases[clickCount%phrases.length];
      talk(message);
    }
    clickCount++;
    root.classList.add('kae-excited');setTimeout(()=>root.classList.remove('kae-excited'),1050);
    confetti();
  }
  figure.addEventListener('click',onClick);
  function minimize(){
    hidden=true;stopWalk();wake();speech.hidden=true;
    root.classList.add('kae-hidden');moveTo(position(),true);
    try{localStorage.setItem('kaen-kae-hidden','true')}catch(_){}
  }
  function restore(){
    hidden=false;root.classList.remove('kae-hidden');
    moveTo(position(),true);lastAction=Date.now();
    try{localStorage.removeItem('kaen-kae-hidden')}catch(_){}
    talk('¡Konkon! ¡Has vuelto! ¿Me echabas de menos? ❤️');
  }
  hideButton.addEventListener('click',minimize);
  showButton.addEventListener('click',restore);
  try{hidden=localStorage.getItem('kaen-kae-hidden')==='true'}catch(_){}
  if(hidden)root.classList.add('kae-hidden');
  moveTo(position(),true);
  if(!hidden)talk(thatDay?'¡Shhh! Estamos en That Day... ¡Qué bonitas las flores! 🌸':'¡Konkon! Soy Kae, ¡bienvenido a KAEN GAMES! ¡Haz clic en mí! ❤️',10000);
  function routine(){
    if(hidden||reducedMotion.matches||walking)return;
    const idle=Date.now()-lastAction;
    if(!sleeping && idle>23000){
      sleeping=true;root.classList.add('kae-sleeping');talk('Zzz... ¡Cinco minutitos más...! 💤',3800);return;
    }
    if(sleeping||idle<5500)return;
    const width=position()-8;
    const spots=[.64,.28,.86,.12,.51,.75,.37];
    const dest=8+width*spots[step++%spots.length];
    root.classList.add('kae-walking');walking=true;
    moveTo(dest);
    walkTimeout=setTimeout(()=>{stopWalk()},3300);
  }
  setInterval(routine,6000);
  window.addEventListener('resize',()=>moveTo(Math.min(lastPosition,position()),true));
})();
