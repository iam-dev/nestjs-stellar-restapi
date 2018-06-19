<h1 align="center">
  <center>
    <strong>Proof of Concept Stellar RESTful Web API using Nestjs Framework</strong>
  </center>
</h1>

<p align="center">
	<a href="#resources">Resources</a>
  &nbsp;&nbsp;&nbsp;
	<a href="../NESTJS.md">Information Nestjs</a>
  &nbsp;&nbsp;&nbsp;
	<a href="https://nestjs.com">Official documentation</a>
</p>

<br>


## Installation

```bash
$ npm install
```

## Change config file
config.ts example:
```
export const config = {
  masterAccount: {
    publicKey: '',
    secretKey: ''
  },
  stellarServer: 'https://horizon-testnet.stellar.org',
  mongoDb: {
    host: '@ds1234.mlab.com:41530',
    database: 'nestjs-stellar-restapi',
    username: 'example_username',
    password: 'password1234'
  }
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# API
## stellar
/api/v1/stellar (POST) - to generate a new keypair
api/v1/stellar/{publicKey} (POST) - to create a new Stellar Blockchain account

## Testing


Send POST request to http://localhost:3000/api/v1/stellar/