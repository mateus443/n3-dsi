document.addEventListener("DOMContentLoaded", function () {
    console.log("Projeto Web - Grupo X está rodando");

    // Galeria de Imagens
    const thumbnails = document.querySelectorAll('.thumbnail');
    const featured = document.getElementById('featured');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            featured.src = this.src;
        });
    });

    // Alunos: Adicione interações com o DOM, eventos e lógica do projeto aqui

    // Esse arquivo será trabalhado nas próximas aulas. 
});
