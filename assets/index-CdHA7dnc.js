(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const l=document.getElementById("daily-btn"),d=document.getElementById("weekly-btn"),u=document.getElementById("monthly-btn"),m=document.getElementById("dashboard"),g=["hsl(15, 100%, 70%)","hsl(195, 74%, 62%)","hsl(348, 100%, 68%)","hsl(145, 58%, 55%)","hsl(264, 64%, 52%)","hsl(43, 84%, 65%)"],f={Work:"src/images/icon-work.svg",Play:"src/images/icon-play.svg",Study:"src/images/icon-study.svg",Exercise:"src/images/icon-exercise.svg",Social:"src/images/icon-social.svg","Self Care":"src/images/icon-self-care.svg"};function n(t,s="daily"){document.querySelectorAll(".card").forEach(c=>c.remove()),t.forEach((c,o)=>{const e=document.createElement("section");e.classList.add("card"),e.setAttribute("id","card"),e.style.background=g[o],e.innerHTML=`
    <div class="card__image"></div>
    <article>
    <div class="card__header">
      <h3>${c.title}</h3>
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" />
      </svg>
    </div>
    <div class="card__body">
      <p>${c.timeframes[s].current}hrs</p>
      <p>Last week: ${c.timeframes[s].previous}hrs</p>
    </div>
    </article>  `;const r=f[c.title];e.querySelector(".card__image").style.backgroundImage=`url('${r}')`,m.append(e)})}function h(){fetch("/data.json").then(t=>{if(!t.ok)throw new Error("HTTP error:"+t.status);return t.json()}).then(t=>{n(t),l.addEventListener("click",()=>{a(l),n(t,"daily")}),d.addEventListener("click",()=>{a(d),n(t,"weekly")}),u.addEventListener("click",()=>{a(u),n(t,"monthly")})}).catch(t=>console.log(t))}function a(t){[l,d,u].forEach(s=>s.classList.remove("active")),t.classList.add("active")}h();
