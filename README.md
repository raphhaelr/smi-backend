## O projeto

Backend da aplicação para gerenciar produtos e demandas, onde cada demanda possuí suas características como produtos, quantidade a ser produzida de cada produto. Os usuários podem realizar as operaçoes CRUD para produtos e demandas.

### :zap: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en)
- [Fastify](https://fastify.dev/)
- [Mongoose](https://mongoosejs.com/)
- [Docker](https://docs.docker.com/)
- [Swagger](https://swagger.io/)
{...}


## :zap: Executando o Projeto
#### Clonando o projeto
```sh
$ git clone https://github.com/raphhaelr/smi-backend.git
$ cd smi-backend
$ npm install
```

#### Configurando o banco de dados (MongoDB)
```sh
$ docker compose up -d
```

#### Configurando o Backend
```sh
$ Criar um arquivo .env 
$ Definir as variáveis NODE_ENV e MONGO_URI como no exemplo .env.example 
```

#### Iniciando o Backend
```sh
$ npm run dev
```

#### Documentação Swagger
```sh
$ Acessar /documentation na URL da API
$ ex: http://localhost:3333/documentation
```