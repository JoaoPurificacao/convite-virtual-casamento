window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const loaderimg = document.getElementById("loader-img");
    const conteudo = document.getElementById("conteudo");

    // Inicia o fade do conteúdo imediatamente
    conteudo.classList.add("mostrar");
    loaderimg.classList.add("ativo");

    // Aguarda um pouco antes de esconder o loader
    setTimeout(() => {
        loader.classList.add("ocultar");
    }, 1000);

    // Remove o loader somente após a animação terminar
    loader.addEventListener("transitionend", () => {
        loader.remove();
    }, { once: true });
});