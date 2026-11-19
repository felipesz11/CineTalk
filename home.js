const filmes = [
  { titulo: "Spider-Man: Brand New Day", ano: 2026, diretor: "Destin Daniel Cretton", nota: 4.2, cor: "linear-gradient(160deg,#b3122b,#1a237e)",
    sinopse: "Fighting crime full-time as Spider-Man in a world that doesn't remember him, Peter Parker faces a shocking new threat to the city and those he loves." },
  { titulo: "Interestelar", ano: 2014, diretor: "Christopher Nolan", nota: 4.6, cor: "linear-gradient(160deg,#4b134f,#c94b4b)", id: "zSWdZVtXT7E",
    sinopse: "Exploradores viajam através de um buraco de minhoca em busca de um novo lar para a humanidade." },
  { titulo: "Inception", ano: 2010, diretor: "Christopher Nolan", nota: 4.5, cor: "linear-gradient(160deg,#0f2027,#2c5364)", id: "YoHD9XEInc0",
    sinopse: "Um ladrão que invade sonhos recebe a missão de plantar uma ideia na mente de um alvo." },
  { titulo: "O Cavaleiro das Trevas", ano: 2008, diretor: "Christopher Nolan", nota: 4.7, cor: "linear-gradient(160deg,#141e30,#243b55)", id: "EXeTwQWrcwY",
    sinopse: "Batman enfrenta o Coringa, um criminoso que mergulha Gotham no caos." },
  { titulo: "Duna", ano: 2021, diretor: "Denis Villeneuve", nota: 4.3, cor: "linear-gradient(160deg,#b79891,#6b4a3f)", id: "n9xhJrPXop4",
    sinopse: "Paul Atreides viaja ao planeta deserto Arrakis, o mais perigoso do universo." },
  { titulo: "Parasita", ano: 2019, diretor: "Bong Joon-ho", nota: 4.6, cor: "linear-gradient(160deg,#134e5e,#71b280)", id: "5xH0HfJHsaY",
    sinopse: "Uma família pobre se infiltra na vida de uma família rica com consequências inesperadas." }
];

const $ = id => document.getElementById(id);
let atual = 0;

const estrelas = n => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
const card = (f, i) => `<div class="card" onclick="abrirTrailer(${i})">
  <div class="poster" style="--cor:${f.cor}">${f.titulo}</div><small>${f.ano}</small></div>`;

function renderHero() {
  const f = filmes[atual];
  $("hero").style.setProperty("--bg", f.cor);
  $("poster").style.setProperty("--cor", f.cor);
  $("poster").textContent = f.titulo;
  $("titulo").textContent = f.titulo;
  $("diretor").textContent = `${f.ano} Directed by ${f.diretor}`;
  $("sinopse").textContent = f.sinopse;
  $("nota").innerHTML = `${estrelas(f.nota)}<span>${f.nota}</span>`;
}

function proximo() {
  atual = (atual + 1) % filmes.length;
  renderHero();
}

function abrirTrailer(i) {
  const f = filmes[i];
  $("home").hidden = true;
  $("trailers").hidden = false;
  $("video").parentElement.hidden = !f.id;
  $("video").src = f.id ? `https://www.youtube-nocookie.com/embed/${f.id}?autoplay=1` : "";
  $("t-titulo").textContent = `${f.titulo} (${f.ano})`;
  $("t-sinopse").textContent = f.sinopse;
  $("t-yt").href = f.id ? `https://www.youtube.com/watch?v=${f.id}`
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(f.titulo + " trailer")}`;
  $("outros").innerHTML = filmes.map((x, j) => j === i ? "" : card(x, j)).join("");
  scrollTo(0, 0);
}

function mostrarHome() {
  $("video").src = "";
  $("trailers").hidden = true;
  $("home").hidden = false;
}

$("lista").innerHTML = filmes.map(card).join("");
renderHero();
