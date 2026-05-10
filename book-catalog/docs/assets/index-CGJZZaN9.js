(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function e(e){try{let t=await fetch(`https://openlibrary.org/search.json?q=${e}`);if(!t.ok)throw Error(`Server error`);return(await t.json()).docs}catch(e){return console.error(`Request error: `,e.message),alert(`Please, Check the internet connection!`),[]}}var t=`my_fav_books`,n=()=>JSON.parse(localStorage.getItem(t)||`[]`),r=e=>n().some(t=>t.key===e),i=e=>{let r=n(),i=r.findIndex(t=>t.key===e.key);return i===-1?r.push(e):r.splice(i,1),localStorage.setItem(t,JSON.stringify(r)),window.dispatchEvent(new CustomEvent(`favsUpdated`,{detail:r})),r},a=document.querySelector(`#book-results`);function o(e){if(a.innerHTML=``,!e?.length){a.innerHTML=`<p class="error"> No books found. Please try a different search.</p>`;return}a.innerHTML=e.map(e=>{let t=e.cover_i?`https://covers.openlibrary.org/b/id/${e.cover_i}-M.jpg`:`https://placeholder.com`,n=e.author_name?e.author_name.join(`, `):`Unknown author`,i=r(e.key);return`
            <div class="book-card">
                <div class="book-card_img">
                    <img src="${t}" alt="${e.title}" loading="lazy">
                </div>
                <div class="book-card_info">
                    <h3 class="book-card_title">${e.title}</h3>
                    <p class="book-card_author">${n}</p>
                    <p class="book-card_year">${e.first_publish_year||`-`}</p>
                    <button class="btn-add ${i?`active`:``} "data-id="${e.key}">${i?`In favorites`:`To favorites`}</button>
                </div>
            </div>
        `}).join(``)}function s(e){let t=document.querySelector(`#favorites-list`),n=document.querySelector(`#fav-count`);if(n&&(n.textContent=e.length),e.length===0){t.innerHTML=`<p>No favorites yet</p>`;return}t.innerHTML=e.map(e=>{let t=e.cover_i?`https://covers.openlibrary.org/b/id/${e.cover_i}-S.jpg`:`https://placeholder.com`,n=e.author_name?e.author_name.join(`, `):`Unknown author`,r=e.first_publish_year||`-`;return`
            <div class="fav-item">
                <img class="fav-img" src="${t}" alt="${e.title}" loading="lazy">
                <div class="fav-info">
                    <div class="fav-item_title">${e.title}</div>
                    <div class="fav-item_author">${n}</div>
                    <div class="fav-item_year">${r}</div>
                </div>    
                <button class="btn-remove" data-id="${e.key}">Remove</button>
            </div>
        `}).join(``)}var c=[];async function l(t){if(!t.trim())return;let r=document.querySelector(`#book-results`);r.innerHTML=`<p class="loader">Searching...</p>`,c=await e(t),o(c),s(n(),c)}document.addEventListener(`click`,e=>{let t=e.target.closest(`.btn-add, .btn-remove`);if(!t)return;let r=t.dataset.id,a=c.find(e=>e.key===r)||n().find(e=>e.key===r);a&&i(a)}),window.addEventListener(`favsUpdated`,e=>{c&&c.length>0&&o(c),s(e.detail,c)});function u(){let e=document.querySelector(`#theme-toggle`);if(!e)return;let t=localStorage.getItem(`theme`)||`light`;document.documentElement.setAttribute(`data-theme`,t),d(e,t),e.addEventListener(`click`,()=>{let t=(document.documentElement.getAttribute(`data-theme`)||`light`)===`light`?`dark`:`light`;document.documentElement.setAttribute(`data-theme`,t),localStorage.setItem(`theme`,t),d(e,t)})}function d(e,t){e.textContent=t===`light`?`dark`:`light`}document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`#search-form`),t=document.querySelector(`#search-input`);u(),s(n(),[]),e.addEventListener(`submit`,e=>{e.preventDefault(),l(t.value)})});