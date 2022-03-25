# North Dallas HS

North Dallas HS which incorporates elements of the hub utilising JSBridge3 and can be used and rebranded for pre-sales purposes.
All five HS i.e. - Main, Frontline, Lending, Sales and TWM uses the same repository

## Project Details :

**Pls add more description relating to the project here whether it is a homescreen or small projects or whatever**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Things you need to install before started :

- [Node](https://nodejs.org/en/download/)
- NPM or [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- **_(Optional)_** [Node Version Manager](https://github.com/nvm-sh/nvm)

### Installing

Install npm packages

```
yarn install
or
npm install
```

## Running Locally

### Main HS

```
yarn start:main
or
npm start:main
```

by default it will run on `http://0.0.0.0:8186 or localhost:8186`

### Frontline HS

```
yarn start:frontline
or
npm start:frontline
```

by default it will run on `http://0.0.0.0:8186 or localhost:8186`

### Lending HS

```
yarn start:lending
or
npm start:lending
```

by default it will run on `http://0.0.0.0:8186 or localhost:8186`

### Sales HS

```
yarn start:sales
or
npm start:sales
```

by default it will run on `http://0.0.0.0:8186 or localhost:8186`

### TWM HS

```
yarn start:twm
or
npm start:twm
```

by default it will run on `http://0.0.0.0:8186 or localhost:8186`

### Configuring Host and Port

Port and Host are configurable on `.env` files. [read more](https://www.npmjs.com/package/dotenv#usage)
_Note that :_ development is using `.env.development` and production build is using `.env.build`. `.env` files is there for a fallback

#### Example running port without configuring env file

Changing localhost port can be achieved by example below, which will run it on port 300

```
PORT=3009 yarn start
```

## Building BTCA File

Buiding BTCA File can be achieved by comment below

```
yarn build:main for main Page
yarn build:frontline for frontline Page
yarn build:lending for lending Page
yarn build:sales for sales Page
yarn build:twm for twm Page

```

The build package will be on `/build` and deploy / upload it to the Hub

## Versioning

We use **Git** for versioning. please follow **Git Feature Branch Workflow Branching Strategy** that is specify on our confluence [page](https://bigtincan.atlassian.net/wiki/spaces/GS/pages/745832520/Branching+Strategy)

### Commit

We try to follow [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) convention, with commitlint to lint check the commit message

## Main Techonology Stacks

- React
- TypeScript
- Mobx

## Internal Module Dependency :

- [btca-client](https://www.npmjs.com/package/btca-client)

## Maintainers

- BigTinCan
  - Collaborators:
    - **Amit Bhandari** (amit.bhandari@bigtincan.com)
