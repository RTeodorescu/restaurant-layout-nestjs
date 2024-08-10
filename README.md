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

npm install joi

I used restman chrome extension

Used postgresql@15 on localhost

Connect as postgres user to create a new database called restaurant_layout_db
Create a new user called 'appuser' with the encrypted password 'apppass'
Grant all on restaurant_layout_db public schema to appuser

TypeORM is going to create the table automatically when you use the app

Copy of sequence of commands to set up db
CATALINs-MacBook-Pro:~ teos$ psql postgres
psql (15.7 (Homebrew))
Type "help" for help.

postgres=# create database restaurant_layout_db;
CREATE DATABASE
postgres=# create user appuser with encrypted password 'apppass';
CREATE ROLE
postgres=# grant all privileges on database restaurant_layout_db to appuser;
GRANT
postgres=# \c restaurant_layout_db;
You are now connected to database "restaurant_layout_db" as user "teos".
restaurant_layout_db=# grant all on schema public to appuser;
GRANT

Code is updated with the latest shapes as in the word doc; There is a Shape for input and a different ShapeEntity for the database; Added validation done with Joi

Example of what the validation will allow for an Ellipse:
{
    "uuid": "90cd8c36-c958-4ed5-b2e4-1d62438e3821",
    "layoutName": "default",
    "label": "Table",
    "section": "S",
    "customType": "Ellipse",
    "shape": {
        "top": 11,
        "left": 11,
        "rx": 11,
        "ry": 11
    }
}

Example of what the validation will allow for a Rect:
{
    "uuid": "90cd8c36-c958-4ed5-b2e4-1d62438e3822",
    "layoutName": "default",
    "label": "Table",
    "section": "S",
    "customType": "Rect",
    "shape": {
        "top": 11,
        "left": 11,
        "height": 11,
        "width": 11
    }
}
In order to create you must POST to this url: http://localhost:3000/shapes (Dont forget Content-Type:application/json)
For update use a PUT http://localhost:3000/shapes/:layoutName/:uuid (The examples show layoutName = default)
To delete use DELETE on http://localhost:3000/shapes/:layoutName/:uuid
To get an individual shape use GET http://localhost:3000/shapes/:layoutName/:uuid
To list all shapes use GET http://localhost:3000/shapes