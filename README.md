# ExemploNode

## Exemplo de aplicação web usando NodeJS e biblioteca express


Instalação:

	Node 
		curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
		sudo apt-get install -y nodejs

	NPM
		sudo apt-get install npm

	Ir até o diretório raiz e executar

	npm install

	e depois iniciar o servidor

	npm start

Importante:

	Criar o database e executar o arquivo comandos_banco.sql
	Mudar as configurações do arquivo control/database.js com as suas configurações
	
Estrutura

	NodeExemplo
		+
		app.js -> Arquivo principal que carrega as bibliotecas e seta as rotas
		package.json  -> Arquivo de configuração e de dependências
		comandos_banco.sql -> SQL de criação das tabelas
		+
		+--bin (Folder)
			+
			+-- www -> Arquivo que inicia as configurações e o servidor 
		+--control (Folder)
			+
			+-- database.js -> Módulo que faz conexão com o banco usando a biblioteca pg
			+-- controladorBanco.js -> Controlador que faz as querys e rendeniza na tela
		+--public (Folder)
			+
			+ css (Folder)
				+
				+-- style.css -> Arquivo de stilo
			+ javascript (Folder)
				+-- scriptPostGet.js -> Javascript que faz a requisição ao servidor
		+--routes (Folder)
			+
			+ exemploBanco.js -> Rota de exemploBanco
			+ exemploRest -> Rota da api Rest
			+ index.js -> Rota da index
		+--views (Folder)
			+
			+ banco.ejs -> Página ejs do banco
			+ error.ejs -> Página ejs de erro
			+ index.ejs -> Página ejs de index