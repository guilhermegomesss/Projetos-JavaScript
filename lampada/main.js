const ligar = document.querySelector(".ligar");
const desligar = document.querySelector(".desligar");
const imagem = document.querySelector(".imagem");

let estadoLampada = "desligada";

imagem.addEventListener("mouseover", () => {
    if(estadoLampada !== "quebrada"){
        imagem.src = "./img/ligada.jpg";
    }
   
});

imagem.addEventListener("mouseout", () => {
    if(estadoLampada !== "quebrada") {
      imagem.src = "./img/desligada.jpg";

    }
   
});

imagem.addEventListener("dblclick", () => {
    imagem.src = "./img/quebrada.jpg";
    estadoLampada = "quebrada";

});

ligar.addEventListener("click", ()  => {
    if(estadoLampada !== "quebrada"){
        imagem.src = "./img/ligada.jpg";
        estadoLampada = "ligada";
    }
    
});


desligar.addEventListener("click", () => {
    if(estadoLampada !== "quebrada"){
        imagem.src = "./img/desligada.jpg";
        estadoLampada = "desligada";
    }

});


