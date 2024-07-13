// Variáveis: Uma forma de identificar quem é quem.
// Dá um nome para o pedacinho de código
// É como se criasse uma pasta para guardar o que quiser.


// Funções: É um trecho de código que só executa quando é chamado.
// Document = ir até ao HTML
// querySelector = busca oque eu quiser que ele busque

let formulario = document.querySelector(".formulario")

function aparecerFormulario() {
    formulario.style.left = "35%"
}

function desaparecerFormulario() {
    formulario.style.left = "-35%"
}

let form = document.querySelector(".form")

function abrirForm() {
    form.style.left = "35%"
}

function fecharForm() {
    form.style.left = "-35%"
}