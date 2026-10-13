(()=>{
if(document.getElementById('kae-companion'))return;
const root=document.createElement('div');root.id='kae-companion';
root.innerHTML=`<style>
#kae-companion{position:fixed;bottom:12px;right:16px;z-index:99999;font-family:system-ui,-apple-system,sans-serif;color:#401b25;pointer-events:none}
#kae-companion *{box-sizing:border-box}#kae-speech{pointer-events:auto;max-width:245px;margin:0 0 5px auto;padding:13px 16px;background:#fff6f6;border:2px solid #f2a4ad;border-radius:20px 20px 5px 20px;box-shadow:0 8px 30px #0008;font-size:14px;line-height:1.4;opacity:1;transition:opacity .3s;position:relative}
#kae-speech[hidden]{display:none}#kae-character{display:block;pointer-events:auto;margin-left:auto;width:138px;height:155px;cursor:pointer;border:0;background:transparent;padding:0;filter:drop-shadow(0 6px 9px #000a);animation:kae-float 3.5s ease-in-out infinite}#kae-character img{height:100%;width:100%;object-fit:contain;display:block}#kae-character:hover{transform:scale(1.05)}#kae-character:focus-visible,#kae-hide:focus-visible,#kae-show:focus-visible{outline:3px solid #ffb4c2;outline-offset:2px}
#kae-hide{pointer-events:auto;position:absolute;right:3px;top:-8px;border:1px solid #f3b6c3;background:#fff;color:#8d2337;border-radius:50%;width:25px;height:25px;cursor:pointer}#kae-show{display:none;pointer-events:auto;background:#2c111a;border:1px solid #ff8b9b;border-radius:999px;color:#fff;padding:9px 13px;cursor:pointer;margin-left:auto}#kae-companion.kae-minimized #kae-speech,#kae-companion.kae-minimized #kae-character,#kae-companion.kae-minimized #kae-hide{display:none!important}#kae-companion.kae-minimized #kae-show{display:block}
@keyframes kae-float{0%,100%{translate:0 0}50%{translate:0 -7px}}@media(prefers-reduced-motion:reduce){#kae-character{animation:none}}@media(max-width:600px){#kae-character{width:105px;height:116px}#kae-speech{max-width:210px;font-size:12px}#kae-companion{right:8px;bottom:7px}}
</style><div id="kae-speech" role="status" aria-live="polite">¡Konkon! 🦊 ¡Bienvenido a KAEN GAMES! ¡Haz clic en mí!</div><button id="kae-hide" aria-label="Ocultar a Kae" title="Ocultar a Kae">×</button><button id="kae-character" aria-label="Hablar con Kae" title="¡Habla con Kae!"><img src="kae/kae.png" alt="Kae, la kitsune de KAEN GAMES"></button><button id="kae-show" aria-label="Mostrar a Kae">🦊 ¡Kae!</button>`;
document.body.appendChild(root);
const speech=root.querySelector('#kae-speech');let count=0;let idleTimer;
const lines=['¡Konkon! ¿Has venido a verme? ¡Jejeje! 🦊','¡Oye, oye! ¡Soy la mascota oficial! ¡Mucho gusto! ❤️','¡Te apuesto una galleta a que encuentras un juego que te guste! 🍪','¡No tires de mis orejitas! ... Bueno, solo un poquito. 🌸','¡Cuando KAEN GAMES sea famoso, yo seguiré siendo la jefa! 😎','¡Psst! ¡Los videojuegos esconden secretos! ¿Lo sabías? ✨','¿Otra vez por aquí? ¡Qué alegría verte! 🦊'];
const thatDay=location.pathname.toLowerCase().includes('that-day');
function say(s){speech.hidden=false;speech.textContent=s;clearTimeout(idleTimer);idleTimer=setTimeout(()=>{speech.hidden=true},8500)}
root.querySelector('#kae-character').addEventListener('click',()=>{count++;say(thatDay&&count%3===0?'¡That Day parece una historia preciosa! ... ¿Verdad? 🌸':lines[(count-1)%lines.length])});
root.querySelector('#kae-hide').addEventListener('click',()=>{root.classList.add('kae-minimized');try{localStorage.setItem('kae-hidden','1')}catch(e){}});
root.querySelector('#kae-show').addEventListener('click',()=>{root.classList.remove('kae-minimized');try{localStorage.removeItem('kae-hidden')}catch(e){}say('¡He vuelto! ¿Me echabas de menos? 🦊❤️')});
try{if(localStorage.getItem('kae-hidden')==='1')root.classList.add('kae-minimized')}catch(e){}
if(!root.classList.contains('kae-minimized')){say(thatDay?'¡Shhh! Estamos en That Day. ¡Qué bonitas las flores! 🌸':'¡Konkon! 🦊 ¡Bienvenido a KAEN GAMES! ¡Haz clic en mí!')}
})();