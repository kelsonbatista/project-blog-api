# About the project / *Sobre o projeto*

This is a backend project about an API RESTful using MSC architecture (model-service-controller) with SEQUELIZE. The API is a content management (blog) with login system which it is possible to create, view, delete and update information related to posts and users, using a MySQL database for data managing.

*Esse é um projeto backend sobre uma API RESTful utilizando a arquitetura MSC (model-service-controller) com SEQUELIZE. A API é um sistema de gerenciamento de conteúdo (blog) e login em que é possível criar, visualizar, deletar e atualizar informações relacionadas à postagens e usuários, utilizando o banco MySQL para a gestão de dados.*

---
# Skills / *Habilidades*

 - API development. *Desenvolvimento de API*
 - MSC architecture (model-service-controller). *Arquitetura MSC (model-service-controller)*
 - Sequelize. *Sequelize*
 - MySQL database with relationships. *Banco de dados MySQL com relacionamentos*
 - Operations in the database though API. *Operações em banco de dados através da API*
 - Validation with JOI. *Validação com JOI*
 - Token generation with JWT. *Geração de Token com JWT.*
 - Docker. *Docker*
 - Better commits using commitLint, husky and commitizen. *Melhores commits utilizando commitLint, husky e commitizen*

---
# Endpoints / *Endpoints*

 - Login                  http://localhost:3000/login
 - Users (list all)       http://localhost:3000/user
 - Users (list by id)     http://localhost:3000/user/:id
 - Users (create)         http://localhost:3000/user
 - Users (update)         http://localhost:3000/user/:id
 - Users (delete)         http://localhost:3000/user/:id
 - Users (delete account) http://localhost:3000/user/me
 - Categories (list)      http://localhost:3000/categories
 - Categories (create)    http://localhost:3000/categories
 - Post (search)          http://localhost:3000/post/search
 - Post (list)            http://localhost:3000/post
 - Post (list by id)      http://localhost:3000/post/:id
 - Post (create)          http://localhost:3000/post
 - Post (update)          http://localhost:3000/post/:id
 - Post (delete)          http://localhost:3000/post/:id

---
# Deployment / *Implantação*

 - docker-compose up -d --build   Start docker with Node and MySQL. *Inicia o docker com Node e MySQL*
 - docker exec -it blogs_api bash Enter in docker command line. *Entra na linha de comando do docker*
 - npm install                    Install all packages . *Instala todos os pacotes*
 - npm run prestart               Create DB and tables. *Cria o BD e as tabelas*
 - npm run seed                   Insert sample data in DB. *Insere dados de exemplo no BD*
 - npm run debug                  Start server with nodemon. *Inicia o servidor com nodemon*
