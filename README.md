# Projeto Web - Aula 3

## Descrição do Projeto

Este projeto consiste em um servidor web simples criado com Node.js e Express. O objetivo do projeto é desenvolver uma aplicação web básica, utilizando interatividade e novas funcionalidades através de JavaScript e IA, ampliando o projeto com novas interações e funcionalidades.

### Novas Funcionalidades Adicionadas

1. **Servidor Web com Express**: Implementação de um servidor web utilizando Express.js, que serve arquivos estáticos da pasta `public` e responde a requisições para a página principal com o arquivo `index.html`.
2. **Interatividade Básica**: A aplicação web agora permite interação básica com o usuário, gerenciando requisições HTTP e exibindo respostas dinâmicas no navegador.
3. **Inclusão de IA no Projeto**: A IA foi utilizada para gerar códigos, otimizar interações e aplicar funcionalidades que melhoraram a experiência do usuário e a usabilidade do sistema.

## Prompts Usados e Explicações

Durante o desenvolvimento do projeto, utilizamos a IA para gerar as configurações e códigos de diferentes partes do sistema. Abaixo estão os prompts utilizados e uma breve explicação de cada um:

1. **Prompt para ajustar o `server.js`**:  
   *Objetivo*: Gerar um código de servidor Express que serve arquivos estáticos e responde com `index.html`.
   *Explicação*: Esse prompt foi usado para criar a base do servidor web, utilizando as boas práticas de organização de código no Express.
   
   **Código gerado**:

   ```javascript
   const express = require('express');
   const path = require('path');

   const app = express();
   const PORT = process.env.PORT || 3000;

   app.use(express.static(path.join(__dirname, 'public')));

   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'index.html'));
   });

   app.listen(PORT, () => {
       console.log(`Servidor rodando em http://localhost:${PORT}`);
   });
Prompt para gerar o package.json:
Objetivo: Criar um arquivo package.json básico com a dependência do Express. Explicação: Esse prompt foi utilizado para criar a estrutura inicial do package.json com a dependência do Express.

Código gerado:

json
Copiar código
{
  "dependencies": {
    "express": "^4.21.0"
  }
}
Capturas de Tela
Aqui estão algumas capturas de tela do site com as novas funcionalidades implementadas:

Figura 1: Página inicial do projeto.

Figura 2: Servidor em execução no terminal.

Como Rodar o Projeto
Clone o repositório:

bash
Copiar código
git clone <URL_DO_REPOSITÓRIO>
Navegue até a pasta do projeto:

bash
Copiar código
cd projetoWeb
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor:

bash
Copiar código
npm start
Acesse a aplicação no navegador em http://localhost:3000.

Licença
Este projeto está licenciado sob a MIT License.

markdown
Copiar código

### Explicações:

- **Novas Funcionalidades Adicionadas**: Aqui, você descreve as funcionalidades implementadas no seu projeto (como o servidor Express, interatividade e uso de IA).
- **Lista de Prompts Usados e Explicações**: Fornece uma lista detalhada dos prompts utilizados para gerar o código, explicando o propósito e o código gerado.
- **Capturas de Tela**: Você deve substituir `./screenshots/homepage.png` e `./screenshots/server.png` pelos caminhos reais das imagens. Para adicionar imagens ao seu repositório, você pode criar uma pasta chamada `screenshots` e adicionar as imagens lá.

### Como adicionar capturas de tela:

1. Crie uma pasta chamada `screenshots` no seu projeto.
2. Coloque as imagens lá.
3. Use a sintaxe `![Descrição da Imagem](caminho/para/imagem)` no Markdown para exibi-las.

   Documentação dos Prompts: Anotar os Prompts Usados e Explicar como a IA Contribuiu para as Funcionalidades Implementadas
Durante o desenvolvimento do projeto, utilizei a IA para gerar diversos trechos de código, ajustar configurações e otimizar o funcionamento da aplicação. Abaixo estão os prompts utilizados, explicando como a IA contribuiu para cada funcionalidade.

1. Prompt para Ajustar o Arquivo server.js
Objetivo: Criar a estrutura do servidor Express que serve arquivos estáticos e responde com a página principal (index.html).

Como a IA contribuiu: A IA gerou o código necessário para configurar o servidor Express, definir a porta do servidor e servir arquivos estáticos. Também gerou a estrutura para responder com o arquivo index.html na rota principal (/).
Prompt utilizado:

"Crie um servidor Express que sirva arquivos estáticos da pasta 'public' e tenha uma rota principal que responda com o arquivo index.html."

Código gerado:

javascript
Copiar código
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
2. Prompt para Criar o Arquivo package.json
Objetivo: Configurar o arquivo package.json com a dependência do Express.

Como a IA contribuiu: A IA gerou a estrutura do arquivo package.json, incluindo a dependência necessária para o projeto (express), com a versão mais recente disponível.
Prompt utilizado:

"Crie um arquivo package.json com a dependência do Express na versão mais recente."

Código gerado:

json
Copiar código
{
  "dependencies": {
    "express": "^4.21.0"
  }
}
3. Prompt para Gerar o README.md
Objetivo: Criar uma documentação do projeto, incluindo descrição do projeto, funcionalidades e instruções de uso.

Como a IA contribuiu: A IA gerou a estrutura inicial do README.md, com a descrição do projeto, instruções de como rodar o servidor e exemplos de como as funcionalidades foram implementadas.
Prompt utilizado:

"Crie um README.md explicando as funcionalidades do projeto web, com instruções para rodar o servidor e exemplos de como a IA foi utilizada para otimizar o código."

4. Prompt para Configurar o node_modules/accepts/index.js
Objetivo: Ajustar o código para garantir que o módulo accepts funcione corretamente para aceitar diferentes tipos de requisições HTTP.

Como a IA contribuiu: A IA forneceu o código original do módulo accepts, que gerencia a negociação de tipos de mídia, codificações e idiomas, garantindo que o servidor pudesse responder adequadamente a diferentes tipos de solicitação de clientes.
Prompt utilizado:

"Ajuste o código do módulo accepts para garantir que ele funcione corretamente com Express, negociando tipos de mídia, codificações e idiomas."

Contribuições da IA para o Projeto
A IA desempenhou um papel crucial na geração de partes do código e na automatização de tarefas repetitivas, permitindo que eu me concentrasse nas funcionalidades e melhorias do projeto. Ela ajudou principalmente nos seguintes aspectos:

Geração de Código Básico: A IA foi usada para criar e estruturar arquivos essenciais como server.js, package.json e README.md, economizando tempo e garantindo que o código estivesse organizado e funcional.
Otimização do Fluxo de Desenvolvimento: Ao fornecer exemplos de código bem estruturados, a IA permitiu que o projeto fosse desenvolvido de maneira mais eficiente e sem erros básicos de configuração.
Ajustes e Melhorias Contínuas: Sempre que era necessário ajustar ou otimizar algum trecho de código, a IA foi capaz de fornecer soluções rápidas e eficazes.
Essa abordagem permitiu um desenvolvimento mais ágil e uma melhor qualidade no código final, além de garantir que as funcionalidades fossem implementadas corretamente e de forma otimizada.
