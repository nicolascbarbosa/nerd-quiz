# nerd-quiz

### A game for all nerds testing their knowledge of the three most famous character universes (StarWars, Marvel Comics and DC Comics)

Tecnologias usadas:

* React c/ Redux
* SASS com CSS Modules
* ES2015++ para JS
  * Webpack c/ babel para empacotar/transpilar os módulos.
  * NPM como task runner.
* Jest c/ Enzyme para testes.

Ps1: Para lidar com o gerenciamento de estado da app, se usa `Redux` mas nem pra tudo, assim como sugere a documentação: ***Using local component state is fine.*** 
#### https://redux.js.org/faq/organizing-state;

Ps2: Por estar usando React 16.3+ o projeto já respeita as novas recomendações de componente `life cycle` como `ComponentWillMount()`, `ComponentWillUpdate()` e `ComponentWillRecivieProps()` depreciados.

**REQUEST`s**
> 1. O usuário ao entrar na tela de jogo a ``request`` para recuperar a primeira página de personagens é feita. 
> 2. Enquanto isso as demais `request's` são disparadas em background, a fim de melhorar a experiência do usuário quando necessitar exibir detalhes do personagem.
> 3. Quando o usuário avança para proxima página, a página atual é armazenada em um objeto na `Store` a fim de evitar uma nova `request` caso o usuário decida voltar as páginas anteriores.

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

# Backlog

* Na tela inicial implementar uma `selectbox` que permita o usuário escolher com qual universo ele vai jogar (adicionar Marvel Comics e Dc Comics)

* Implementar a listagem de cards de acordo com o universo selecionado. API: http://superheroapi.com/index.html
