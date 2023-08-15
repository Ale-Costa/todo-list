# API de Gerenciamento de Tarefas

Esta é uma API REST simples para o gerenciamento de tarefas (todo tasks). Ela permite realizar operações CRUD (Create, Read, Update, Delete) em tarefas.

## Configuração

Antes de executar a aplicação, você precisará configurar as variáveis de ambiente. Renomeie o arquivo `env.example` para `.env` e preencha as seguintes variáveis:

```dotenv
PORT=3000
MYSQL_HOST=seu_host_mysql
MYSQL_USER=seu_usuario_mysql
MYSQL_PASSWORD=sua_senha_mysql
MYSQL_DB=seu_banco_de_dados
```

# Instalação

Siga os passos abaixo para instalar e executar a API:

1. Clone este repositório para o seu sistema local.
2. Execute o comando npm install para instalar as dependências.
3. Execute o comando npm run dev para iniciar o servidor em modo de desenvolvimento.

# Rotas

## Listar Tarefas

Endpoint: `GET /tasks`

Retorna a lista de todas as tarefas cadastradas.

## Criar Tarefa

Endpoint: `POST /tasks`

Cria uma nova tarefa. Certifique-se de enviar um corpo JSON contendo o título da tarefa.

## Atualizar Tarefa

Endpoint: `PUT /tasks/:id`

Atualiza os detalhes de uma tarefa existente. Certifique-se de enviar um corpo JSON contendo o título e o status da tarefa.

## Excluir Tarefa

Endpoint: `DELETE /tasks/:id`

Exclui uma tarefa com base no ID fornecido na URL.

# Estrutura do Projeto

`src/controllers` Contém os controladores das rotas.
`src/middlewares:` Contém os middlewares utilizados pelas rotas.
`src/models:` Contém a lógica de acesso aos dados (banco de dados neste caso).
`src/server.js:` Arquivo principal do servidor.

# Dependências Principais

`dotenv:` Para carregar variáveis de ambiente.
`express:` Framework web para Node.js.
`mysql2:` Pacote MySQL para Node.js.
`nodemon:` Utilitário para reiniciar automaticamente o servidor durante o desenvolvimento.
`eslint:` Ferramenta para identificar e corrigir problemas no código JavaScript.
