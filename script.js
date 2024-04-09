const button = document.getElementById("btn-index")

button.addEventListener("click", function() {
  button.innerHTML = "Clicou"
  setTimeout(function() {
    button.innerHTML = "Enviar"
  }, 2000)
});



document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão de enviar
    const enviarButton = document.querySelector('button')

    // Adiciona um ouvinte de evento de clique ao botão de enviar
    enviarButton.addEventListener('click', function(event) {
        // Seleciona os campos de nome e e-mail
        const nomeInput = document.querySelector('input[type="text"]')
        const emailInput = document.querySelector('input[type="email"]')

        // Verifica se os campos de nome e e-mail estão vazios
        if (nomeInput.value === '' || emailInput.value === '') {
            // Mostra um alerta se algum dos campos estiver vazio
            alert('Por favor, preencha todos os campos (Nome e E-mail).')
            // Impede o envio do formulário
            event.preventDefault()
        }
    })
})

