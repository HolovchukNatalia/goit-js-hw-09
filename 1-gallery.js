import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as p}from"./assets/vendor-CgTBfC_f.js";const i=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],e=document.querySelector(".home-page");e.style.display="block";e.style.width="50px";e.style.margin="30px 0 15px 30px";e.style.padding="10px 20px";e.style.fontSize="16px";e.style.color="#fff";e.style.backgroundColor="#007BFF";e.style.border="none";e.style.borderRadius="5px";e.style.cursor="pointer";e.addEventListener("mouseover",()=>{e.style.backgroundColor="#0056b3"});e.addEventListener("mouseout",()=>{e.style.backgroundColor="#007BFF"});const t=document.querySelector(".gallery");t.style.display="flex";t.style.maxWidth="1178px";t.style.flexWrap="wrap";t.style.margin="0 auto";t.style.padding="0";t.style.gap="24px";t.style.justifyContent="center";function s(o){return`
  <li class="gallery-item">
  <a class="gallery-link" href="${o.original}">
    <img
      class="gallery-image"
      src="${o.preview}"
      data-source="${o.original}"
      alt="${o.description}"
    />
  </a>
</li>
  `}function n(o){return o.map(s).join("")}t.innerHTML=n(i);const l=document.querySelectorAll(".gallery-item");l.forEach(o=>{o.style.listStyle="none",o.style.width="360px";const a=o.querySelector(".gallery-image");a.style.display="block",a.style.width="100%",a.style.height="200px",a.style.boxShadow="4px 4px 10px rgba(0, 0, 0, 0.2)",a.style.transition="transform 0.3s ease, box-shadow 0.3s ease",o.addEventListener("mouseover",()=>{o.style.transform="scale(1.05)",o.style.boxShadow="6px 6px 15px rgba(0, 0, 0, 0.3)"}),o.addEventListener("mouseout",()=>{o.style.transform="scale(1)",o.style.boxShadow="4px 4px 10px rgba(0, 0, 0, 0.2)"})});const r=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8,showCounter:!1});r.on("shown.simplelightbox",function(){document.querySelector(".sl-wrapper").style.background="#2E2F42"});
//# sourceMappingURL=1-gallery.js.map
