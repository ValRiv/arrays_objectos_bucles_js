"use strict";

const data = [
    {
        id: 1,
        name: "Bulbasaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png",
    },
    {
        id: 2,
        name: "Ivysaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png",
    },
    {
        id: 3,
        name: "Venusaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/003.png",
    }
]

/* Enunciado
1) Utilice el array data para completar la página de pokemones,
como ejemplo se puede guiar por el siguiente "article", deberá
utilizar un bucle para recorrer data y armar el HTML que introducirá
en "section".*/
/*<article>
        <img
          src="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
          class="icon-type"
          alt="icon type"
        />
        <p>
          Pokemon algo1
        </p>
      </article>*/
// Template para que utilice:
let accumulator = ""
for(const post of data){

accumulator += 
`<article >
<img
  src=${post.thumbnail}
  class="icon-type"
  alt="icon type"
/>
<p>
${post.name}
</p>

</article>

`
};
// Comienza a escribir su código aquí */

const section = document.querySelector("section");
// innerHTML reemplaza todo el contenido HTML de ese elemento,
// todos los hijos, por lo que si habia código HTML se perderá
// y reemplazará por el nuevo.
// Es recomendable no invocar innerHTML muchas veces ya que
// no es muy performante
section.innerHTML = accumulator;
     
/*2) Luego de que haya podido generar el contenido dinamicamente, agregar
    a todas las tarjetas de pokemons la propiedades "planta"
    al pasar el mouse por encima (mouseover).*/
const posts = document.querySelectorAll("article");

for (const article  of posts) {
 
  article.addEventListener("mouseover", function () {
    //post.classList.add(" ");
    article.classList.add("planta");   

  });

  article.addEventListener("mouseout", function () {
    // Quitamos la clase de abierto
    article.classList.remove("planta");
});

}
