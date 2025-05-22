import{a as c,S as y,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="50385354-3e4bea1f358fcf603a5420cc4",u="https://pixabay.com/api/";c.defaults.baseURL=u;function h(o){return c.get(`${u}`,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const f=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:m,downloads:p})=>`<li class="gallery-element">
    <a href="${i}">
    <img class="gallery-element-img" src=${s} alt=${e}>
    </a>
    <div class="element-description">
    <ul class="description-list">
        <li>
        <p>Likes</p>${t}
        </li>
        <li>
        <p>Views</p>${a}
        </li>
        <li>
        <p>Comments</p>${m}
        </li>
        <li>
        <p>Downloads</p>${p}
        </li>
    </ul>
    
    </div>
    
    </li>`);f.insertAdjacentHTML("beforeend",r.join("")),L.refresh()}function v(){f.innerHTML=""}function $(){d.classList.add("is-active")}function q(){d.classList.remove("is-active")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=l.elements["search-text"].value.trim();r&&(v(),$(),h(r).then(s=>{const i=s.data.hits;i.length>0?b(i):n.show({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(s=>n.show({message:s})).finally(()=>{q()}),l.elements["search-text"].value="")});
//# sourceMappingURL=index.js.map
