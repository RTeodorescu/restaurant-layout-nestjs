<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


https://dev.to/francescoxx/typescript-crud-rest-api-using-nestjs-typeorm-postgres-docker-and-docker-compose-33al

npm install -g @nestjs/cli
nest new restaurant-layout-nestjs
cd restaurant-layout-nestjs
npm i pg typeorm @nestjs/typeorm @nestjs/config
npm start

npm install @types/uuid

Example json:
// 11 at the end of the uuid
{
  "layoutName":"firstLayout",
  "uuid":"90cd8c36-c958-4ed5-b2e4-1d62438e3811"
  "options":{
    "fill":"white",
    "label":"Table",
    "section":"S",
    "occupied":true,
    "top":10,
    "left":10,
  }
}

// 12 at the end of the uuid
{
  "layoutName":"firstLayout",
  "uuid":"90cd8c36-c958-4ed5-b2e4-1d62438e3812"
  "options":{
    "fill":"white",
    "label":"Table",
    "section":"S",
    "occupied":true,
    "top":10,
    "left":10,
  }
}

// 21 at the end of the uuid
{
  "layoutName":"secondLayout",
  "uuid":"90cd8c36-c958-4ed5-b2e4-1d62438e3821"
  "options":{
    "fill":"white",
    "label":"Table",
    "section":"S",
    "occupied":true,
    "top":10,
    "left":10,
  }
}

// 22 at the end of the uuid
{
  "layoutName":"secondLayout",
  "uuid":"90cd8c36-c958-4ed5-b2e4-1d62438e3822"
  "options":{
    "fill":"white",
    "label":"Table",
    "section":"S",
    "occupied":true,
    "top":10,
    "left":10,
  }
}


To create
POST localhost:3000/shapes
Headers: Application-Type: application/json
Body: json above

To get all shapes associated to a layout
GET localhost:3000/shapeslayout/:layouName
Example: localhost:3000/shapeslayout/firstLayout

To get a shape associated to a layout
GET localhost:3000/shapeslayout/:layouName/:uuid
Example: localhost:3000/shapeslayout/firstLayout/90cd8c36-c958-4ed5-b2e4-1d62438e3811

I used restman chrome extension

there are twp different controllers
Shapes->/shapes this one works with id (primary keys) - also does create
ShapesLayout->/shapeslayout this one works with layuoutNames and uuid