import{a,i as d}from"./assets/vendor-DSJL_ovD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="50385354-3e4bea1f358fcf603a5420cc4",c="https://pixabay.com/api/";a.defaults.baseURL=c;function y(i){return a.get(`${c}`,{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery");function g(i){const r=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<li class="gallery-element">
    <img class="gallery-element-img" src=${s} alt=${e}>
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
    
    </li>`);u.insertAdjacentHTML("beforeend",r.join(""))}function h(){u.innerHTML=""}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=l.elements["search-text"].value.trim();r&&(h(),y(r).then(s=>{const o=s.data.hits;o.length>0&&g(o),d.show({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(console.error()))});
//# sourceMappingURL=index.js.map
