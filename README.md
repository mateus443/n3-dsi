# Projeto Web Responsivo com Bootstrap

Este projeto web é parte de uma atividade acadêmica em que cada grupo de alunos deve desenvolver um tema específico utilizando HTML, CSS e JavaScript. O projeto inclui a integração com Bootstrap para criar uma interface responsiva, com navegação dinâmica e janelas modais. O servidor é gerido pelo Node.js e Express.js.

### Estrutura do Projeto

 - HTML: Estrutura semântica e conteúdo das páginas.
 - CSS: Estilização avançada utilizando Flexbox e Grid, além da integração com o Bootstrap para componentes de UI.
 - JavaScript: Lógica de interatividade, manipulação do DOM e integração com o Bootstrap para funcionalidades dinâmicas.

### Padrões de Arquitetura

O projeto segue uma arquitetura organizada em:

 - HTML para a estruturação do conteúdo.
 - CSS para estilização e responsividade.
 - JavaScript para lógica e interatividade.
 - Node.js com Express.js para rodar um servidor local.

### Ferramentas e Tecnologias Utilizadas

 - Bootstrap para componentes de UI responsivos.
 - Flexbox e Grid para layout flexível e responsivo.
 - Node.js com Express.js para gerenciamento do servidor.
 - GitHub Pages para deploy contínuo (se necessário).

### Estrutura de Pastas

```bash
/projetoWeb
│
├── /public      # Pasta para arquivos estáticos
│   ├── /css     # Estilos CSS
│   │   └── style.css
│   ├── /js      # Arquivos JavaScript
│   │   └── script.js
│   └── /img     # Imagens do projeto
│       └── (colocar imagens do projeto aqui)
├── index.html   # Arquivo HTML principal
├── server.js    # Servidor Node.js
├── package.json # Dependências do projeto
└── README.md    # Instruções do projeto
```

### Instalação e Execução do Projeto

Siga os passos abaixo para instalar e rodar o projeto *localmente*.

#### Passo 1: Clonar o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

#### Passo 2: Instalar Dependências

Entre no diretório do projeto e instale as dependências do Node.js:

```bash
cd projetoWeb
npm install express
```

#### Passo 3: Executar o Servidor

Após a instalação das dependências, inicie o servidor local:

```bash
node server.js
```

O servidor rodará na porta 3000. Abra o navegador e acesse: http://localhost:3000

Abaixo, segue o modelo da tela inicial que deve aparecer ao acessar o navegador.

![Tela Inicial Projeto Web](https://github.com/brunamichellyos/DSI/blob/main/Aula3/projetoWeb/TelaInicialProjetoWeb.png)

#### Passo 4: Personalização do Projeto

Alunos podem adicionar o conteúdo nas seções e personalizar o código conforme o tema específico de cada grupo. Utilize o *style.css* para adicionar estilos personalizados e *script.js* para lógica interativa.
