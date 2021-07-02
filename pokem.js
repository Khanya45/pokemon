let base_url = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let pokemon = data.results;
      let container = document.querySelector(".pokemon");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<button class="btn" onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      container.innerHTML += `<br><br><button class="btn next" onclick="getPokemonList('${data.next}')">Next</button>`;
    });
}

getPokemonList(base_url);
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.sprites.back_default);
      let card = document.querySelector(".card");
      card.innerHTML = ` <img src="${data.sprites.front_default}">
          <h1>${data.name}</h1>
          <button onclick="Description()" class="btnInfo">DESCRIPTION</button>
          <div class="poke_info">
            <div class="info one">
              <h3>${data.types[0].type.name}</h3>
              <h5>Type</h5>
            </div>
            <div class="info two">
              <h3>${data.weight}kg</h3>
              <h5>Weight</h5>
            </div>
            <div class="info three">
              <h3>${data.height}m</h3>
              <h5>Height</h5>
            </div>
          </div>  
          
            
          </div>`;
      let card_info = document.querySelector(".card_info");
      card_info.style.visibility = "hidden";
      fetch(data.species.url)
        .then((res) => res.json())
        .then((newdata) => {
          document.querySelector(
            ".btnInfo"
          ).style.background = `linear-gradient(120deg,${newdata.color.name},rgba(0, 0, 0, 0.666))`;
          document.querySelector(
            ".btnInfo"
          ).style.color = `linear-gradient(120deg,${newdata.color.name},rgba(0, 0, 0, 0.666))`;
          let card_info = document.querySelector(".card_info");
          let content = document.querySelector(".content");
          content.style.visibility = "hidden";
          card_info.style.width = "0";
          card_info.style.visibility = "hidden";
          card_info.style.margintop = "-40px";
          let p = document.querySelector("p");
          let heading = document.querySelector(".card_info h1");
          let moves = document.querySelector("li");
          moves.textContent = `Moves: ${data.id}`;
          moves.style.listStyleType = "none";
          moves.style.textAlign = "left";
          moves.style.margintop = "20px";
          heading.textContent = `Description`;
          p.textContent = `${newdata.flavor_text_entries[0].flavor_text} ${newdata.flavor_text_entries[2].flavor_text} ${newdata.flavor_text_entries[3].flavor_text} ${newdata.flavor_text_entries[4].flavor_text}`;
        });
    });
}

function Description() {
  // console.log("asdf");
  // let card = document.querySelector(".card");
  let card_info = document.querySelector(".card_info");
  let content = document.querySelector(".content");
  // content.classList.toggle("toggleContent");
  // card_info.classList.toggle("toggleDesc");
  content.style.visibility = "visible";
  card_info.style.opacity = 1;
  card_info.style.visibility = "visible";
  card_info.style.width = "700px";
  card_info.style.zindex = "100";
  card_info.style.transition = "0.3s ease-in-out";
  card_info.style.transitiondelay = "0.7s";
}

function toggleDesc() {
  let card_info = document.querySelector(".card_info");
  let content = document.querySelector(".content");
  content.style.visibility = "hidden";
  card_info.style.width = "0";
  card_info.style.visibility = "hidden";
}

let btn = document.querySelector(".btn");
main.style.background = "#6b705c";
main.style.height = "100vh";

// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       card.removeChild("img");
//       card.innerHTML = `<img src="${data.sprites.back_default}">`;
//     });
