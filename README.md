# Teste do json server

## Comandos

### Para criar registros fakes dentro da chave api do db.json
    npm run generate-data

### Para rodar o serviço utilizando o server.js
    npm run start 

### Para rodar o serviço utilizando o comando json-server, faz a mesma coisa do start porém utilizando o server.js
    npm run json-server 

## Rotas
### Método GET


### /api
    - Retorna todos os objetos dentro da chave api


#### /api/:key
    - Retorna o objeto com uma chave específica


#### /teste/rota
    - Uma rota teste, que retorna um nome e uma senha

#### /teste/rota/:key
    - Retorna um objeto único com a chave especificada


### Método POST/PUT
#### /api 
```json
    - Cria um novo objeto na api
    - É necessário colocar o header Authorization, com o valor 'pix'
    - Corpo esperado: 
   {
        "Account": {
            "AccountNumber": "number",
            "AccountType": "string",
            "Branch": "number",
            "OpeningDate": "string",
            "Participant": "number"
        },
        "KeyType": "string",
        "Key": "number",
        "Owner": {
            "Name": "string",
            "TaxIdNumber": "number",
            "Type": "string",
            "tradeName": "string"
        }
    }
````
#### /api/:Key 
```json
    - Edita um objeto existente na api
    - É necessário colocar o header Authorization, com o valor 'pix'
    - Corpo esperado: 
   {
        "Account": {
            "AccountNumber": "number",
            "AccountType": "string",
            "Branch": "number",
            "OpeningDate": "string",
            "Participant": "number"
        },
        "KeyType": "string",
        "Key": "number",
        "Owner": {
            "Name": "string",
            "TaxIdNumber": "number",
            "Type": "string",
            "tradeName": "string"
        }
    }
````



## Middlewares

### tokenRequest
    
    Solicita o envio do Header de Authorization com o valor de 'pix', para os métodos POST, PUT e DELETE 


## Observação
No json-server é necessário o envio de uma chave única, por padrão o valor dela é id, porém foi alterado na linha 9 do arquivo 'server.js'. O problema é que isso altera para todos os objetos do db.json, tentei utilizar um json para colocar mais ids mas não deu certo. Esse tópico já foi discutido aqui: https://github.com/typicode/json-server/issues/279

O routes.json serve para customizar as rotas, foi feito isso com as rotas de teste.