<div align="center">
  <img src="static/logo.png" alt="Logo">
</div>

<div align="center">
  <h3>Find the best spots to spend your crypto</h3>
</div>

## Status

⚠️ WIP ⚠️

## Stack

- **PostgreSQL**: Database
- **GraphQL**: API with Hasura and Apollo
- **Typescript**: Type-safe JavaScript
- **Next.js**: SSR React framework

## Setup

First you need to clone the repository

```bash
git clone git@github.com:pradel/blockspot.git
```

You will need to set some secrets for the services we use (google maps, recaptcha, mapbox).

```bash
cp .env.example .env.dev
```

Then edit the file to setup the secrets.

We use docker compose to setup the dev environment.
To start the services run

```bash
docker-compose up
```

When the services are running you need to apply the migrations (database, hasura)

```bash
yarn dev:migrate
```

If you want to seed the database with some data run

```bash
yarn dev:seed
```

Then just go to http://localhost:3000 to see the app.

## License

MIT © [Léo Pradel](https://www.leopradel.com/)
