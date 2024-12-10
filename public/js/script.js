document.addEventListener("DOMContentLoaded", function () {
    console.log("Projeto Web - Grupo X está rodando");

    // Relógio em Tempo Real
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock(); // Chamada inicial para exibir o relógio imediatamente

    // Contador de Cliques
    let clickCount = 0;
    document.getElementById('clickButton').addEventListener('click', function() {
        clickCount++;
        document.getElementById('clickCount').textContent = clickCount;
    });
});
