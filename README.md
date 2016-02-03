# Developers Brasil

[![Build Status](https://travis-ci.org/developer-news-brazil/www.svg?branch=master)](https://travis-ci.org/developer-news-brazil/www) [![Coverage Status](https://coveralls.io/repos/github/developer-news-brazil/www/badge.svg?branch=master)](https://coveralls.io/github/developer-news-brazil/www?branch=master)

## Setup

### Node

You must have [NodeJS](http://nodejs.org/) and [npm](http://npmjs.com/) installed.

After that, enter in the project folder and run:

```sh
  npm install
```

### Database setup

You must have [PostgreSQL](http://www.postgresql.org/) installed.

Then duplicate the `config/database.js.example` file to one named `config/database.js` and setup your authentication info. Be aware that the file you've created is ignored by Git.

After that, create the development and test databases with the names described on `config/database.js`.

And then run:

```sh
  ./node_modules/.bin/sequelize db:migrate
```

### Database seed

If you want to seed the database, run the following command after setting up the database:

```sh
  ./node_modules/.bin/sequelize db:seed:all
```

## Development

To run the app in development mode, use:

```sh
  npm run dev
```

## Tests

To run the tests, first setup the test database described on `config/database.js`.

After that, you must run:

```
  npm test
```
