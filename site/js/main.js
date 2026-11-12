const albuns = document.querySelectorAll(".album");

const titulo = document.getElementById("titulo");

const anterior = document.getElementById("anterior");

const proximo = document.getElementById("proximo");

const saibaMais = document.getElementById("saibaMais");

const nomes = [
    "Cracker Island",
    "Gorrilaz",
    "Demon Days",
    "Humanz",
    "Plastic Beach",
    "Song Machine",
    "The Fall",
    "The Mountain",
    "The Now Now",
];

let atual = 0;

function atualizarCarrossel() {

    albuns.forEach((album, indice) => {

        album.className = "album";

        if (indice === atual) {
            album.classList.add("centro");
        }

        else if (indice === (atual - 1 + albuns.length) % albuns.length) {
            album.classList.add("esquerda");
        }

        else if (indice === (atual + 1) % albuns.length) {
            album.classList.add("direita");
        }

    });

    titulo.textContent = nomes[atual];

}

proximo.addEventListener("click", () => {

    atual = (atual + 1) % albuns.length;

    atualizarCarrossel();

});

anterior.addEventListener("click", () => {

    atual = (atual - 1 + albuns.length) % albuns.length;

    atualizarCarrossel();

});

atualizarCarrossel();