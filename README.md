<h1 align="center">💻 LAMA - Labenu Musical Awards💻</h1>

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

## Endpoints

### Usuário
#### Signup de usuário
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
            
#### Login de usuário
* Método: POST
    * Path: `/user/login`
    * Entradas:
        * Body 
            * email (obrigatório)
            * password (obrigatório)
    * Saídas:
        * Body
            * access token
            
### Banda            
#### Registrar banda
* Método: POST
    * Path: `/band/register`
    * Entradas:
       * Headers 
            * Authorization
        * Body 
            * name (obrigatório)
            * musicGenre (obrigatório)
            * responsible (obrigatório)

#### Visualizar detalhes da banda
* Método: GET
    * Path: `/band`
    * Entradas:
        * Query 
            * name OU id
    * Saídas:
        * Body
            * id
            * name
            * music_genre
            * responsible

### Show            
#### Adicionar um show a um dia
* Método: POST
    * Path: `/show/add`
    * Entradas:
       * Headers 
            * Authorization
        * Body 
            * band_id (obrigatório)
            * start_time (obrigatório, number)
            * end_time (obrigatório, number)
            * week_day (obrigatório, "Friday", "Saturday" ou "Sunday")

#### Pegar todos os shows de uma data
* Método: GET
    * Path: `/show/:week_day`
    * Entradas:
        * Params 
            * week_day (obrigatório)
    * Saídas:
        * Body
             * Shows (start_time, end_time, name e music_genre)

         

