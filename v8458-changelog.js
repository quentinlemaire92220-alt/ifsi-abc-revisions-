(()=>{'use strict';
function patch(){
 const box=document.getElementById('v742Changelog');if(!box)return false;
 const badge=box.querySelector('.badge');if(badge)badge.textContent='V8.30.158';
 if(document.getElementById('v8458Change'))return true;
 const host=box.querySelector('details .small');if(!host)return false;
 const span=document.createElement('span');span.id='v8458Change';span.dataset.date='2026-11-01';
 const b=document.createElement('b');b.textContent='V8.30.158 — Santé mondiale · UE C1.1';span.appendChild(b);
 span.appendChild(document.createTextNode(' · Fiche hybride V7.3 (21 pages) avec sommaire, infographies originales et QCM V4 (56 questions). Support officiel disponible ; transcription orale et classements de cinq cancers encore à confirmer. Archives préservées.'));
 host.prepend(span);return true;
}
window.IFSI_V8458_CHANGELOG={patch};if(!patch()){let tries=0;const t=setInterval(()=>{if(patch()||++tries>100)clearInterval(t)},100)}setTimeout(patch,100);setTimeout(patch,500);
})();
