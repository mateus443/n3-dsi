document.addEventListener("DOMContentLoaded", function () {
    console.log("Projeto Web - Grupo X está rodando");

    // Alternância de tema (modo claro/escuro)
    const toggleThemeButton = document.getElementById("toggle-theme");
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelector("header").classList.toggle("dark-mode");
        document.querySelector("footer").classList.toggle("dark-mode");
        document.querySelectorAll("section").forEach(section => section.classList.toggle("dark-mode"));
        document.querySelectorAll("form").forEach(form => form.classList.toggle("dark-mode"));
    });

    // Validação de formulário de contato
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert("Por favor, preencha todos os campos do formulário.");
            event.preventDefault(); // Impede o envio do formulário
        } else if (!validateEmail(emailInput.value)) {
            alert("Por favor, insira um e-mail válido.");
            event.preventDefault(); // Impede o envio do formulário
        }
    });

    // Função de validação de e-mail
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Exibição de mensagem de boas-vindas
    const welcomeButton = document.getElementById("welcome-button");
    welcomeButton.addEventListener("click", function () {
        alert("Bem-vindo ao nosso site! Estamos felizes em tê-lo aqui.");
    });
});
