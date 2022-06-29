# Bookkeeper

Bookkeeping app for determining monthly cost between multiple parties.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `bookkeeper-api`: an [Adonis](https://adonisjs.com/) app
- `bookkeeper-ui`: an [Nuxt.js](https://nuxtjs.org) app

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Setup

Install dependencies:
```
npm i
```

Make sure to use the correct node and npm versions as specified in the top-level package.json. You can also use `nvm use` if using NVM for node management.

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

To develop specific apps, run the following command:

```
npm run -w bookkeeper-ui dev
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
