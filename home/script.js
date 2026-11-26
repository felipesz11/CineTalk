const filmes = [
    {
        titulo: "The Dark Knight", ano: 2008, diretor: "Christopher Nolan", nota: 4.7, img: "../img/poster-3.jpeg",
        sinopse: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        titulo: "The Shawshank Redemption", ano: 1994, diretor: "Frank Darabont", nota: 4.8, img: "../img/poster-1.webp",
        sinopse: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion."
    },
    {
        titulo: "The Godfather", ano: 1972, diretor: "Francis Ford Coppola", nota: 4.8, img: "../img/poster-2.jpeg",
        sinopse: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son."
    },
    {
        titulo: "The Godfather Part II", ano: 1974, diretor: "Francis Ford Coppola", nota: 4.7, img: "../img/poster-4.jpeg",
        sinopse: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate."
    },
    {
        titulo: "12 Angry Men", ano: 1957, diretor: "Sidney Lumet", nota: 4.6, img: "../img/poster-5.jpeg",
        sinopse: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict."
    }
];

const $ = id => document.getElementById(id);
let atual = 0;

const estrelas = n => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
const card = (f, i) => `<div class="card" onclick="mostrarHome(${i})">
  <div class="poster" style="--cor:url('${f.img}')"></div><small>${f.titulo} • ${f.ano}</small></div>`;

function renderHero() {
    const f = filmes[atual];
    $("hero").style.setProperty("--bg", `url('${f.img}')`);
    $("poster").style.setProperty("--cor", `url('${f.img}')`);
    $("titulo").textContent = f.titulo;
    $("diretor").textContent = `${f.ano} Directed by ${f.diretor}`;
    $("sinopse").textContent = f.sinopse;
    $("nota").innerHTML = `${estrelas(f.nota)}<span>${f.nota}</span>`;
}

function proximo() {
    atual = (atual + 1) % filmes.length;
    renderHero();
}

function mostrarHome(i = atual) {
    atual = i;
    renderHero();
    scrollTo(0, 0);
}

$("lista").innerHTML = filmes.map(card).join("");
renderHero();