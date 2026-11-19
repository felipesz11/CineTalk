const busca = document.getElementById("busca");

busca.addEventListener("input", function() {
    let texto = busca.value.toLowerCase();

    let filmes = document.querySelectorAll(".cartao-filme");

    filmes.forEach(function(filme) {
        let nome = filme.querySelector("h3").textContent.toLowerCase();

        filme.style.display = nome.includes(texto) ? "block" : "none";
    });
});