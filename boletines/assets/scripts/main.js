let cerrar = document.querySelectorAll(".closed");

//La funcion preventDefault hace que el evento clicl en el link, no se realice.
cerrar.forEach(function(cerradito){

  cerradito.addEventListener('click',function(ev){

    ev.preventDefault();

    let contenedor = document.querySelector(".content");

    contenedor.classList.remove("fadeInDownBig");
    contenedor.classList.remove("animated")

    contenedor.classList.add("fadeOutUp");
    contenedor.classList.add("animated")

    setTimeout(function(){
      location.href = "../index.html";
    },600)

  })
})

/*la funcion classList.remove y classList.add agregan o eliminan clases.

let ico = document.querySelectorAll("i");

ico.forEach(function(icono){
 icono.classList.remove("fa-heart-o");
 icono.classList.add("fa-heart");
})*/
