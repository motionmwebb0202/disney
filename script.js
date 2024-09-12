const disney = document.querySelector(".disney-content");
const hero = document.querySelector(".hero");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const url = "https://api.disneyapi.dev/character/";
let page = 1;

fetch(url)
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    
    data.data.map((disnep) => {
      disney.innerHTML += `
    <div class="disney">
    <img
      src="${disnep.imageUrl}"
      alt=""
    />
    <h1>${disnep.name}</h1>
    <p>${disnep.films}</p>
    <span>${disnep.enemies}</span>
  </div>
      `;
    });
  });

next.addEventListener("click", () => {
  page++;
  window.scrollTo(0, 0);
  fetch(url+`?page=${page}`)
    .then((data) => data.json())
    .then((data) => {
      disney.innerHTML = "";

      data.data.map((disnep) => {
        disney.innerHTML += `
        <div class="disney">
        <img
          src="${disnep.imageUrl}"
          alt=""
        />
        <h1>${disnep.name}</h1>
        <p>${disnep.films}</p>
        <span>${disnep.enemies}</span>
      </div>
        `;
      });
    });
});

prev.addEventListener("click", () => {
  page--;
  window.scrollTo(0, 0);
  fetch(url + `?page=${page}`)
    .then((data) => data.json())
    .then((data) => {
      disney.innerHTML = "";

      data.data.map((disnep) => {
        disney.innerHTML += `
        <div class="disney">
        <img
          src="${disnep.imageUrl}"
          alt=""
        />
        <h1>${disnep.name}</h1>
        <p>${disnep.films}</p>
        <span>${disnep.enemies}</span>
      </div>
        `;
      });
    });
});

hero.addEventListener("keyup", (e) => {
  const value = e.target.value;
  console.log(value);
  fetch(`https://api.disneyapi.dev/character?name=${value}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      disney.innerHTML = "";
      data.data.map((disnep) => {
        disney.innerHTML += `
    <div class="disney">
    <img
      src="${disnep.imageUrl}"
      alt=""
    />
    <h1>${disnep.name}</h1>
    <p>${disnep.films}</p>
    <span>${disnep.enemies}</span>
  </div>
      `;
      });
    });
});
