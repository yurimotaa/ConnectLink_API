# ConnectLink_API

Aplicação que consiste na criação de clientes e de contatos que esses clientes possuem. 
Possivel, então, visualizar os contatos que cada cliente cadastrado possue.

## Pré-requisitos

- Node.js 
- Express

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
2. Instale as dependências: `npm install`

## Configuração
1. Configure o banco de dados postgres com as seguintes informações:
   
DATABASE_URL="postgres://USUARIO:SENHA@localhost:NUMERO_DA_PORTA/NOME_DO_BANCO"

SECRET_KEY=CHAVE_SECRETA

## Uso

1. Inicie a aplicação: `npm start`
2. Acesse a aplicação em: `http://localhost:3000` ou direto do deploy "https://connect-link-api.onrender.com"

## Exemplos

**CLIENTES**
1. Criação de cliente:

Request:

   {
    	"name": "Pedro",
    	"email": "pedro@mail.com",
    	"phone": "63999999999"
}
   
Response:
     
     {
    	"id": 2,
    	"name": "Pedro",
    	"email": "pedro@mail.com",
    	"phone": "63999999999",
    	"createdAt": "2023-07-26T16:03:23.507Z"
    }

3. Listagem de clientes
   Não há envio de corpo no request
   
   Devolve a lista com todos os clientes cadastrados

   Pode recuperar os dados de um cliente especifico passando seu id pela url
   
   Devolve os dados do cliente e caso ja tenha contatos cadastrados, devolve a lista desses contatos e suas informações:

   {
    	"id": 2,
    	"name": "Pedro",
    	"email": "pedro@mail.com",
    	"phone": "63999999999",
    	"createdAt": "2023-07-25T22:49:29.599Z",
    	"contacts": []
    }

5. Atualizar cliente
   Envio de um corpo com os dados a atualizar e o id do cliente pela URL
   
   Devolve os dados do cliente já atualizado

7. Deletar cliente
   Não há envio de corpo, mas apenas o ID pela URL
   
   Devolve o apenas o status adequado

**Contatos**
  1. Criação de contato
     Espera o envio dos dados do contato junto do ID do cliente relacionado:
     
       {
      	"name": "paulin",
      	"email": "paulin@mail.com",
      	"phone": "123456",
      	"clientId": 2
      }
     
     Devolve os dados do contato cadastrado e seu cliente relacionado:
     
       {
        	"id": 9,
        	"name": "paulin",
        	"email": "paulin@mail.com",
        	"phone": "123456",
        	"createdAt": "2023-07-26T15:46:35.549Z",
        	"client": {
        		"id": 2,
        		"name": "Pedro",
        		"email": "pedro@mail.com",
        		"phone": "63999999999",
        		"createdAt": "2023-07-25T22:49:29.599Z"
        	}
      }

3. Listagem de contatos
   Não há envio de corpo no request
   
   Devolve a lista com todos os contatos cadastrados

   Pode recuperar os dados de um contato especifico passando seu ID pela URL
   
   Devolve os dados do contato e e do cliente a ele relacionado:
   
     {
  		"id": 5,
  		"name": "robson",
  		"email": "robson@mail.com",
  		"phone": "123456",
  		"createdAt": "2023-07-26T14:22:15.875Z",
  		"client": {
  			"id": 2,
  			"name": "Pedro",
  			"email": "pedro@mail.com",
  			"phone": "63999999999",
  			"createdAt": "2023-07-25T22:49:29.599Z"
  		}
	  },

3. Atualizar contato
   Envio de um corpo com os dados a atualizar e o id do contato pela URL
   Devolve os dados do contato já atualizado

4. Deletar cliente
   Não há envio de corpo, mas apenas o ID pela URL
   Devolve o apenas o status adequado

  
