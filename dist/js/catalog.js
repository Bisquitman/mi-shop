(()=>{"use strict";const t="http://localhost:3001",e=e=>fetch(t+e).then((t=>{if(!t.ok)throw new Error;return t.json()})),n=(e,n)=>fetch(t+e,{method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((t=>{if(!t.ok)throw new Error;return t.json()})),o=t=>{const e=document.createElement("div");e.classList.add("modal-backdrop","fade"),document.body.append(e),t.classList.add("d-block"),setTimeout((()=>{e.classList.add("show"),t.classList.add("show")}),100)},c=t=>{const e=document.querySelector(".modal-backdrop");t.classList.remove("show"),e&&e.classList.remove("show"),setTimeout((()=>{t.classList.remove("d-block"),e&&e.remove()}),500)},s=t=>new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",maximumFractionDigits:0}).format(t);(()=>{const t=document.getElementById("open-auth-btn"),n=document.getElementById("open-cart-btn"),s=document.getElementById("logout-btn"),a=document.getElementById("auth-modal"),r=(document.getElementById("cart-modal"),a.querySelectorAll(".close-btn"),a.querySelector(".login-btn")),d=a.querySelector("#login-control"),l=a.querySelector("#password-control"),i=()=>{t.classList.add("d-none"),n.classList.remove("d-none"),s.classList.remove("d-none"),c(a)};t.addEventListener("click",(()=>{o(a),l.type="password"})),r.addEventListener("click",(t=>{const n=d.value,o=l.value;e("/profile").then((t=>{t.login&&t.login===n&&t.password&&t.password===o&&(localStorage.setItem("auth",JSON.stringify(t)),i())}))})),s.addEventListener("click",(e=>{localStorage.removeItem("auth"),t.classList.remove("d-none"),n.classList.add("d-none"),s.classList.add("d-none")})),(()=>{const t=JSON.parse(localStorage.getItem("auth"));t&&e("/profile").then((e=>{e.login&&e.login===t.login&&e.password&&e.password===t.password&&i()}))})()})(),(()=>{const n=document.getElementById("products-container");n.addEventListener("click",(({target:n})=>{if(n.closest("button")){const o=n.closest("button").dataset.product;e(`/products/${o}`).then((e=>{var n;("/cart",n={name:e.name,price:e.price,count:1},fetch(t+"/cart",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((t=>{if(!t.ok)throw new Error;return t.json()}))).then((()=>{console.log("Added")}))})).catch((t=>{console.error("Произошла непредвиденная ошибка!")}))}})),(()=>{const t=window.location.search,o=new URLSearchParams(t).get("id");e(o?`/products?category=${o}`:"/products").then((t=>{(t=>{t.forEach((t=>{n.insertAdjacentHTML("beforeend",`\n        <div class="col col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">\n          <a href="#" class="card-link">\n            <div class="card">\n              <img src="${t.preview}" class="card-img-top" alt="phone-1">\n              <div class="card-body">\n                <span class="mb-2 d-block text-secondary">${t.title}</span>\n                <h6 class="card-title mb-3">${t.name}</h6>\n\n                <div class="row">\n                  <div class="col d-flex align-itemns-center justify-content-between">\n                    <h4>${t.price} ₽</h4>\n                    <button type="button" class="btn btn-outline-dark" data-product="${t.id}">\n                      <img src="/images/icon/shopping-cart-big.svg" alt="login">\n                    </button>\n                </div>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n      `)}))})(t)})).catch((t=>{console.error("Произошла непредвиденная ошибка!")}))})()})(),(()=>{const a=document.getElementById("cart-modal"),r=document.getElementById("open-cart-btn"),d=a.querySelectorAll(".close-btn"),l=document.getElementById("cart-container"),i=document.getElementById("cart-totlal-price"),m=()=>{e("/cart").then((t=>{u(t),(t=>{l.textContent="",t.forEach((t=>{l.insertAdjacentHTML("beforeend",`\n        <div class="row border-bottom pb-3 pt-3">\n          <div class="col col-12 col-md-6 mb-3 mb-md-0 fs-4">\n            ${t.name}\n          </div>\n          <div\n            class="col col-12 col-md-6 fs-4 d-flex align-items-center justify-content-end flex-wrap">\n            <h4 class="me-3 d-flex align-itemns-center">${s(t.price)}</h4>\n            <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"\n              id="control-dec" data-id="${t.id}" data-count="${t.count}">\n              -\n            </button>\n            <h6 class="cart-item-count me-3 ms-3">${t.count}</h6>\n            <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"\n              id="control-inc" data-id="${t.id}" data-count="${t.count}">\n              +\n            </button>\n          </div>\n        </div>\n      `)}))})(t)})).catch((t=>{console.error("Произошла непредвиденная ошибка!")}))},u=t=>{let e=0;t.forEach((t=>{e+=+t.price*+t.count})),i.innerHTML=s(e)};r.addEventListener("click",(()=>{m(),o(a)})),d.forEach((t=>{t.addEventListener("click",(()=>{c(a)}))})),l.addEventListener("click",(({target:e})=>{if(e.closest("button"))if(e.id&&"control-inc"===e.id){const t=e.dataset.id,o=+e.dataset.count;n(`/cart/${t}`,{count:o+1}).then((()=>{m()}))}else if(e.id&&"control-dec"===e.id){const c=e.dataset.id,s=+e.dataset.count;s>1?n(`/cart/${c}`,{count:s-1}).then((()=>{m()})):(o=`/cart/${c}`,fetch(t+o,{method:"DELETE"}).then((t=>{if(!t.ok)throw new Error;return t.json()}))).then((()=>{m()}))}var o}))})()})();