document.addEventListener("DOMContentLoaded", function () {
    console.log("Projeto Web - Grupo X está rodando");

    // Validação de Formulário
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('formMessage');

        if (!name || !email) {
            message.textContent = 'Por favor, preencha todos os campos.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Formulário enviado com sucesso!';
            message.style.color = 'green';
        }
    });

    // Interatividade na Página Inicial
    document.getElementById('welcomeButton').addEventListener('click', function() {
        const message = document.getElementById('welcomeMessage');
        message.textContent = 'Bem-vindo ao nosso site!';
    });

    // Alteração de Tema
    document.getElementById('themeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelectorAll('section').forEach(section => section.classList.toggle('dark-mode'));
        document.querySelector('footer').classList.toggle('dark-mode');
    });

    // Alunos: Adicione interações com o DOM, eventos e lógica do projeto aqui

    // Esse arquivo será trabalhado nas próximas aulas. 
});
