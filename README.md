# React cards gallery

## Apllication scripts

### Work in local, using webpack-dev-server:

```
npm start
```

### Build using dev environment:

- Without using MiniCssExtractPlugin
- Using inline-source-map

```
npm run dev
```

### Build using prod environment:

- Using MiniCssExtractPlugin

```
npm run prod
```

- Using MiniCssExtractPlugin
- Using CompressionWebpackPlugin

```
npm run prod:analyze
```

- Using MiniCssExtractPlugin
- Using WebpackBundleAnalyzer

```
npm run prod:compress
```

### Code validation scripts

- Lint

```
npm run lint
```

- Prettier

```
npm run prettier
```

### Check code quality

- Launch test single time

```
npm t
```

```
npm run test:watch
```

- Launch test single time with coverage

```
npm run test:coverage
```

- Launch e2e tool (launch previously local server in 8080 port)

```
npm run cy:open
```

- Run e2e in the console (launch previously local server in 8080 port)

```
npm run cy:run
```

- Execute start and when the server is up, launch automatically the 2e2 tool:

```
npm run test:e2e:dev
```

- Execute start and when the server is up, launch automatically the 2e2 in the console:

```
npm run test:e2e:run
```

## GitHub hooks with Husky

When you throw a commit or a push to GitHub, Husky launch its hooks:

- pre-commit
- pre-push

Each hooks check: - Linter - Prettier - Test - Test coverage - E2E test

## Used technologies

- ReactJS
- ES6
- Webpack
- Babel
- Styled component
- CSS
- Jest
- Cypress
- EsLint
- Prettier
- CSS
