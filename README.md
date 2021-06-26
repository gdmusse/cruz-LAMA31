### <p align="center">💻 LAMA - Labenu Musical Awards💻</p>

## Sobre
Projeto de backend que utilizando Typescript e algumas dependências como Knex e Express. Sistema que permite o gerenciamento de usuários, bandas e shows.

## Instruções para rodar
Por ser um projeto em Typescript, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o terminal e navegar até o repositório clonado e rodar:

1. `npm install` para instalar todas as dependências;
2. Criar um arquivo .env na raiz do projeto e preencher as chaves com os valores apropriados:
```
DB_HOST =
DB_USER = 
DB_PASSWORD = 
DB_DATABASE_NAME = 

ACCESS_TOKEN_EXPIRES_IN = 
BCRYPT_COST = 

JWT_KEY = 
```

3. `npm run dev` para rodar o server com auto-update.

### Endpoints

### Signup de usuário
* Método: POST
    * Path: `/user/signup`
    * Entradas:
        * Body 
            * name (obrigatório)
            * email (obrigatório)
            * password (obrigatório)
            * role ("NORMAL" ou "ADMIN", obrigatório)
    * Saídas:
        * Body
            * access token
            
### Login de usuário
* Método: POST
    * Path: `/user/login`
    * Entradas:
        * Body 
            * email (obrigatório)
            * password (obrigatório)
    * Saídas:
        * Body
            * access token
            
### Registrar banda
* Método: POST
    * Path: `/band/register`
    * Entradas:
       * Headers 
            * Authorization
        * Body 
            * name (obrigatório)
            * musicGenre (obrigatório)
            * responsible (obrigatório)

