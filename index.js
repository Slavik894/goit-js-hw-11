import{a,i as d}from"./assets/vendor-DSJL_ovD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="50385354-3e4bea1f358fcf603a5420cc4",c="https://pixabay.com/api/";a.defaults.baseURL=c;function y(s){return a.get(`${c}`,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery");function g(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<li class="gallery-element">
    <img class="gallery-element-img" src=${o} alt=${e}>
    <div class="element-description">
    <ul class="description-list">
        <li>
        <p>Likes</p>${t}
        </li>
        <li>
        <p>Views</p>${n}
        </li>
        <li>
        <p>Comments</p>${f}
        </li>
        <li>
        <p>Downloads</p>${m}
        </li>
    </ul>
    
    </div>
    
    </li>`);u.insertAdjacentHTML("beforeend",r.join(""))}function h(){u.innerHTML=""}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const r=l.elements["search-text"].value.trim();r&&(h(),y(r).then(o=>{const i=o.data.hits;i.length>0?g(i):d.show({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(console.error()),l.elements["search-text"].value="")});
//# sourceMappingURL=index.js.map
