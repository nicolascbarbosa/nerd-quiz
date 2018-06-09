# nerd-quiz

### A game for all nerds testing their knowledge of the three most famous character universes (StarWars, Marvel Comics and DC Comics)

Tecnologias usadas:

* React c/ Redux
* SASS com CSS Modules
* ES2015++ para JS
  * Webpack c/ babel para empacotar/transpilar os módulos.
  * NPM como task runner.
* Jest c/ Enzyme para testes.

# Ambiente

### Dev

A app precisa de [Node.js](https://nodejs.org/) v8+ para rodar.

Instale as dependencias e as devDepencias e inicie o server

```sh
$ git clone https://github.com/nicolascbarbosa/nerd-quiz.git
$ cd nerd-quiz
$ npm install
$ npm start - para ficar levantar um servidor na porta "8001" e observar mudanças
$ npm test - executar testes
$ npm run test:watch - executar e observar os testes
$ npm run test:coverage - executar teste e obter o coverage
$ npm run lint - executar eslint sobre o diretório ./src
$ npm run lint:fix - executar e corrigir erros sobre o diretório ./src
$ npm run css-lint - executar o lint sobre o arquivos de estilo.
```

### Prod

```sh
$ npm run build:prod = gerar um bundler no dir "dist" para produção
$ npm run gh-pages = publicar o build gerados no github pages
```

**PRONTO**
