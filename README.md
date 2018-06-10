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

PS: Por estar usando React 16.3+ o projeto já respeita as novas recomendações de componente `life cycle` como `ComponentWillMount()`, `ComponentWillUpdate()` e `ComponentWillRecivieProps()` depreciados.

### Prod

```sh
$ npm run build:prod = gerar um bundler no dir "dist" para produção
$ npm run gh-pages = publicar o build gerados no github pages
```

**REQUEST`s**
> 1. O usuário ao entrar na tela de jogo a ``request`` para recuperar a primeira página de personagens é feita. 
> 2. Enquanto isso as demais `request's` são disparadas em background, a fim de melhorar a experiência do usuário quando necessitar exibir detalhes do personagem.
> 3. Quando o usuário avança para proxima página, a página atual é armazenada em um objeto na `Store` a fim de evitar uma nova `request` caso o usuário decida voltar as páginas anteriores.