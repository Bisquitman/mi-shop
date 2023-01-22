(()=>{"use strict";const t="http://localhost:3001",e=e=>fetch(t+e).then((t=>{if(!t.ok)throw new Error;return t.json()})),n=(e,n)=>fetch(t+e,{method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((t=>{if(!t.ok)throw new Error;return t.json()})),o=t=>{const e=document.createElement("div");e.classList.add("modal-backdrop","fade"),document.body.append(e),t.classList.add("d-block"),setTimeout((()=>{e.classList.add("show"),t.classList.add("show")}),100)},c=t=>{const e=document.querySelector(".modal-backdrop");t.classList.remove("show"),e&&e.classList.remove("show"),setTimeout((()=>{t.classList.remove("d-block"),e&&e.remove()}),500)},a=t=>new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",maximumFractionDigits:0}).format(t);(()=>{const t=document.getElementById("open-auth-btn"),n=document.getElementById("open-cart-btn"),a=document.getElementById("logout-btn"),s=document.getElementById("auth-modal"),r=(document.getElementById("cart-modal"),s.querySelectorAll(".close-btn"),s.querySelector(".login-btn")),d=s.querySelector("#login-control"),l=s.querySelector("#password-control"),i=()=>{t.classList.add("d-none"),n.classList.remove("d-none"),a.classList.remove("d-none"),c(s)};t.addEventListener("click",(()=>{o(s),l.type="password"})),r.addEventListener("click",(t=>{const n=d.value,o=l.value;e("/profile").then((t=>{t.login&&t.login===n&&t.password&&t.password===o&&(localStorage.setItem("auth",JSON.stringify(t)),i())}))})),a.addEventListener("click",(e=>{localStorage.removeItem("auth"),t.classList.remove("d-none"),n.classList.add("d-none"),a.classList.add("d-none")})),(()=>{const t=JSON.parse(localStorage.getItem("auth"));t&&e("/profile").then((e=>{e.login&&e.login===t.login&&e.password&&e.password===t.password&&i()}))})()})(),(()=>{const t=document.getElementById("categories-container"),n=document.querySelector(".catalog-search"),o=e=>{t.textContent="",e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n        <div class="col col-12 col-md-6 col-lg-4 mb-3">\n          <a href="./catalog.html?id=${e.id}" class="card-link">\n            <div class="card">\n              <img src="${e.preview}" class="card-img-top" alt="phones">\n              <div class="card-body">\n                <h5 class="card-title">${e.name}</h5>\n              </div>\n            </div>\n          </a>\n        </div>\n      `)}))};n.addEventListener("input",(({target:t})=>{e(`/categories?q=${t.value}`).then((t=>{o(t)})).catch((t=>{console.error("Произошла непредвиденная ошибка!")}))})),e("/categories").then((t=>{o(t)})).catch((t=>{console.error("Произошла непредвиденная ошибка!")}))})(),(()=>{const s=document.getElementById("cart-modal"),r=document.getElementById("open-cart-btn"),d=s.querySelectorAll(".close-btn"),l=document.getElementById("cart-container"),i=document.getElementById("cart-totlal-price"),m=()=>{e("/cart").then((t=>{u(t),(t=>{l.textContent="",t.forEach((t=>{l.insertAdjacentHTML("beforeend",`\n        <div class="row border-bottom pb-3 pt-3">\n          <div class="col col-12 col-md-6 mb-3 mb-md-0 fs-4">\n            ${t.name}\n          </div>\n          <div\n            class="col col-12 col-md-6 fs-4 d-flex align-items-center justify-content-end flex-wrap">\n            <h4 class="me-3 d-flex align-itemns-center">${a(t.price)}</h4>\n            <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"\n              id="control-dec" data-id="${t.id}" data-count="${t.count}">\n              -\n            </button>\n            <h6 class="cart-item-count me-3 ms-3">${t.count}</h6>\n            <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"\n              id="control-inc" data-id="${t.id}" data-count="${t.count}">\n              +\n            </button>\n          </div>\n        </div>\n      `)}))})(t)})).catch((t=>{console.error("Произошла непредвиденная ошибка!")}))},u=t=>{let e=0;t.forEach((t=>{e+=+t.price*+t.count})),i.innerHTML=a(e)};r.addEventListener("click",(()=>{m(),o(s)})),d.forEach((t=>{t.addEventListener("click",(()=>{c(s)}))})),l.addEventListener("click",(({target:e})=>{if(e.closest("button"))if(e.id&&"control-inc"===e.id){const t=e.dataset.id,o=+e.dataset.count;n(`/cart/${t}`,{count:o+1}).then((()=>{m()}))}else if(e.id&&"control-dec"===e.id){const c=e.dataset.id,a=+e.dataset.count;a>1?n(`/cart/${c}`,{count:a-1}).then((()=>{m()})):(o=`/cart/${c}`,fetch(t+o,{method:"DELETE"}).then((t=>{if(!t.ok)throw new Error;return t.json()}))).then((()=>{m()}))}var o}))})()})();