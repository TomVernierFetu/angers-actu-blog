// 1. On sélectionne le bouton via son identifiant HTML
    const btnTop = document.getElementById("btnTop");

    // 2. On écoute le défilement de la fenêtre
    window.addEventListener("scroll", () => {
        // window.scrollY donne la distance défilée en pixels depuis le haut
        if (window.scrollY > 300) {
            btnTop.classList.add("visible");    // On ajoute la classe CSS
        } else {
            btnTop.classList.remove("visible"); // On la retire
        }
    });