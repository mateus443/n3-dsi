const express = require('express');
const path = require('path');
const cors = require('cors'); // Para habilitar CORS se precisar de APIs externas

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS, caso necessário (para chamadas de APIs externas)
app.use(cors());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Exemplo de uma rota adicional para a página 'sobre'
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'sobre.html')); // Supondo que você crie essa página
});

// Middleware para capturar erros 404 (página não encontrada)
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
