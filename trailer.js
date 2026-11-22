document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    window.history.back();
  }
});

document.querySelector(".back-link")?.addEventListener("click", (event) => {
  if (window.history.length > 1) {
    event.preventDefault();
    window.history.back();
  }
});
