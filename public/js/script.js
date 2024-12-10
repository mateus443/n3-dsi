// Função para alternar o tema
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';

  // Alterna entre os temas
  if (currentTheme === 'light') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');  // Salva a preferência no localStorage
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');  // Salva a preferência no localStorage
  }
}

// Verifica a preferência de tema salva no localStorage e aplica o tema
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.add('light-theme');
  }

  // Exibe a mensagem de boas-vindas
  const welcomeMessage = document.getElementById('welcome-message');
  if (welcomeMessage) {
    welcomeMessage.style.display = 'block';  // Exibe a mensagem
  }
};

// Adiciona um ouvinte de evento para o botão de alternância de tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
