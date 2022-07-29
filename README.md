# Bookkeeper

Bookkeeping app for determining monthly cost between multiple parties.

- [What's inside?](#info)
- [Setup](#setup)
- [Testing](#testing)
- [Commit Convention Rules](#commit)
- [Useful Links](#links)

<h2 id="info">What's inside?</h2> 

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `bookkeeper-api`: an [Adonis](https://adonisjs.com/) app
- `bookkeeper-ui`: an [Nuxt.js](https://nuxtjs.org) app

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

<h2 id="setup">Setup</h2>

### Pre-requistes
Install nodejs, [make](https://formulae.brew.sh/formula/make#default) and [docker desktop](https://www.docker.com/products/docker-desktop).

Optional instructions to install make 3.82
  1. Install through [brew](https://brew.sh/)
  1. Install make, `brew install make`

Make sure to use the correct node and npm versions as specified in the top-level package.json. You can also use `nvm use` if using NVM for node management.

Install dependencies and setup docker postgres container:
```
make setup
```

### Commands

Run `make start` to start the docker containers for postgres and adminer.

Run `make stop` to stop the docker containers.

Run `make help` for all available command options.

To develop all apps and packages, run the following command:
```
npm run dev
```

To develop specific apps, run the following command:
```
npm run -w bookkeeper-ui dev
```

To build all apps and packages, run the following command:

```
npm run build
```

<h2 id="testing">Testing</h2>

How to test the different apps and what types of tests are used.

### Frontend

We use [storybook](https://storybook.js.org/docs/vue/get-started/introduction) for component driven development.
use the following command to run storybook and view your componenent stories.
```
npm run -w bookkeeper-ui storybook 
```

Visual tests capture a screenshot of every story then compares it against baselines to detect appearance and integration issues.

Snapshot tests detect changes in the rendered markup to surface rendering errors or warnings.

To run both snapshot and visual tests use the following command while running storybook in a separate terminal:
```
npm run -w bookkeeper-ui storybook:test 
```

### Backend
TODO

<h2 id="commit">Commit Convention Rules</h2>

Structure of commit messages
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Example commit message:
```
git commit -m "feat(component): add ix-btn component"
git commit -m "fix(util): fix xhr logic issue with network.save"
git commit -m "style: add commit convention type/scope rules"
```

Example breaking change commit message:
```
git commit -m "feat(component): change api for ix-btn component

BREAKING CHANGE: `extends` key in config file is now used for extending other config files"
```

### Major, Minor, Patch

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
1. feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
1. BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning).

### Types

Commit messages must be one of the following:

    build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
    chore: miscellaneous(setting up eslint, stylelint, etc)
    ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
    docs: Documentation only changes
    feat: A new feature
    fix: A bug fix
    perf: A code change that improves performance
    refactor: A code change that neither fixes a bug nor adds a feature
    style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    test: Adding missing tests or correcting existing tests


<h2 id="links">Useful Links</h2>

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
- [Storybook Testing](https://storybook.js.org/docs/vue/writing-tests/test-runner)
