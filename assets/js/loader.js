const audio = document.getElementById("bgMusic");

function iniciarAudio() {
    audio.play().catch(err => console.log(err));

    document.removeEventListener("click", iniciarAudio);
    document.removeEventListener("keydown", iniciarAudio);
    document.removeEventListener("touchstart", iniciarAudio);
}


window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const loaderimg = document.getElementById("loader-img");
    const conteudo = document.getElementById("conteudo");
    let timeout;

    // Inicia o fade do conteúdo imediatamente
    // conteudo.classList.add("mostrar");
    // loaderimg.classList.add("ativo");

    // Aguarda um pouco antes de esconder o loader

    

    function iniciarTimeout() {
        timeout = setTimeout(() => {
            loader.classList.add("ocultar");
            conteudo.classList.add("mostrar");
            loaderimg.classList.add("ativo");
        }, 10000);
    }

    iniciarTimeout();

    loader.addEventListener("click", () => {
        clearTimeout(timeout);

        loader.classList.add("ocultar");
        conteudo.classList.add("mostrar");
        loaderimg.classList.add("ativo");

        document.addEventListener("click", iniciarAudio);
        document.addEventListener("keydown", iniciarAudio);
        document.addEventListener("touchstart", iniciarAudio);
    });

    // Remove o loader somente após a animação terminar
    loader.addEventListener("transitionend", () => {
        loader.remove();
    }, { once: true });
});


