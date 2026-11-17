/* LOCALIZANDO OS ELEMENTOS DO HTML */

const abrir = document.getElementById("abrirHistoria");
const fechar = document.getElementById("fecharHistoria");
const modal = document.getElementById("modalHistoria");


/* ABRIR A HISTÓRIA COMPLETA */

abrir.addEventListener("click", () => {

    // Adiciona a classe que mostra a janela.
    modal.classList.add("ativo");

    // Impede a rolagem da página de fundo.
    document.body.style.overflow = "hidden";

});


/* FECHAR A HISTÓRIA */

function fecharHistoria() {

    // Esconde a janela ampliada.
    modal.classList.remove("ativo");

    // Libera novamente a rolagem da página.
    document.body.style.overflow = "auto";

}


/* BOTÃO DE FECHAR */

fechar.addEventListener("click", fecharHistoria);


/* FECHAR AO CLICAR FORA DA JANELA */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        fecharHistoria();
    }

});


/* FECHAR UTILIZANDO A TECLA ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        fecharHistoria();
    }

});


/* BOTÃO "LER MAIS" DA SEÇÃO DE NEUROCIÊNCIA */

const btnLerMais = document.getElementById("btnLerMais");
const cienciaExtra = document.getElementById("cienciaExtra");

if (btnLerMais && cienciaExtra) {

    btnLerMais.addEventListener("click", () => {

        const estavaAberto = !cienciaExtra.hidden;

        // Mostra ou esconde os parágrafos extras.
        cienciaExtra.hidden = estavaAberto;

        // Troca o texto do botão.
        btnLerMais.textContent = estavaAberto ? "Ler mais ↓" : "Ler menos ↑";

        // Mantém o botão acessível para leitores de tela.
        btnLerMais.setAttribute("aria-expanded", String(!estavaAberto));

    });

}
