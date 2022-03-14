<div align="center">
  
# Stabox

<a href="https://www.stabox.hu"><img src="https://drive.google.com/uc?export=view&id=1wnxXt-08N5PoJNZN2JBUZTo6ij7rneQ1" width="450"/></a>

<a href="https://github.com/">![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)</a>
<a href="https://nx.dev/">![Nx](https://img.shields.io/static/v1?style=for-the-badge&message=Nx&color=143055&logo=Nx&logoColor=FFFFFF&label=)</a>
<a href="https://www.mysql.com/">![MySQL](https://img.shields.io/static/v1?style=for-the-badge&message=MySQL&color=4479A1&logo=MySQL&logoColor=FFFFFF&label=)</a>
<a href="https://nestjs.com/">![NestJS](https://img.shields.io/static/v1?style=for-the-badge&message=NestJS&color=E0234E&logo=NestJS&logoColor=FFFFFF&label=)</a>
<a href="https://angular.io/">![Angular](https://img.shields.io/static/v1?style=for-the-badge&message=Angular&color=DD0031&logo=Angular&logoColor=FFFFFF&label=)</a>

**Smart, Fast and New way of package transportation**

</div>

## For guests

:memo:
_[Thesis](https://docs.google.com/document/d/1Pp8n5Sw-7NIVysHJ7Yph26iYUK7apgenNy8Dafrkh1g/edit?usp=sharing)_

:notebook_with_decorative_cover:
_[Development documentation files](https://drive.google.com/drive/folders/1aS6iPvhOs3syn9xBn8x2ZOD_y9JpdqX3?usp=sharing)_

:art:
_[Design preview](https://www.figma.com/community/file/1049586110990675041/Stabox-Design)_

## For developers

:bar_chart:
_[Entity relationship diagram](https://drive.google.com/file/d/16Sp48zplwlCXzkh4lGCJgLFKxFITv4Oc/view?usp=sharing)_

### Required to start development

- Clone this repo and install the dependencies with `npm i`.
- MySql database named "stabox" (`mysql -e "CREATE DATABASE stabox"`)

### Execution in development mode

Frontend _(you can reach it on http://localhost:4200/)_

- `npx nx serve stabox-frontend`

Backend _(you can reach it on http://localhost:7000/api)_

There are also thunder collections for the endponts at this directory.

- `npx nx serve api`

Test using Cypress:

- `npx nx e2e stabox-frontend-e2e --watch` _(not works on gitpod)_
  <sub><sup>If cypress' is not working on local machine scroll down </sup></sub>

### Build

- `npx nx run api:build`
- `npx nx run api:build --prod` (creates package.json too)
- `npx nx run-many --target=build --projects=stabox-frontend,api` (builds multiple applications, it does not makes production builds)

#### To execute in production mode:
The application requires a local MySQL database called `stabox`. You can change the MySQL connection settings before running the “npm run build: all” command by changing the apps/api/src/app/ormconfig.ts file.

If a new version of the program is released and a change is made to a file ending in .entity.ts, backing up the MySQL database is highly recommended, as these changes have a direct effect on the design of the database. If the relationship between entities changes in a similar way, the affected data tables must be deleted before running the program, so in this case it is necessary to make a backup of the database!

- `npm run build:all` (Makes the production build instide the dist directory)
- `cd dist/stabox`
- `npm i`
- `node main.js`

The application will start on the port specified in .env.
You can change this port value before running the “npm run build:all” command by changing apps/api/production/.env and configuring auth0 appropriately.

### Useful links to learn more about this app:

- [Nx Quickstart](https://youtu.be/VUyBY72mwrQ)
- [NestJS](https://youtu.be/2n3xS89TJMI) and [Much](https://youtu.be/sNosL578ECo) [More](https://youtu.be/rKgZLVgdvAY)
- [Angular](https://youtu.be/G0bBLvWXBvc)
- [Cypress](https://youtu.be/7N63cMKosIE)

### Other useful commands

- Run `npx nx affected:apps` to get all apps which you have changed.
- Run `npx nx affected:libs` to get all libraries which you have changed.
- Run `npx ng g @nrwl/angular:lib new-lib` to generate the 'new-lib' library.
- Run `npx ng g component components/my-component --project=stabox-frontend` to add 'my-component' component to the 'stabox-frontend' project
- Run `npx nx dep-graph --watch` to open the dependency graph in browser
- Run `npx nx dep-graph --file=graph.json` to create a json graph of your project
- Run `npm run test` to start the back end and the testing environment simultaneously

If you have issues with cypress try running:

- `npm cache clear -f`
- `npm i cypress -D`
- `node_modules/.bin/cypress install`

## Here you can run the app online:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/barni363hun/Stabox)

## Made by:

<a href="https://github.com/barni363hun/Stabox/graphs/contributors">![GitHub Contributors Image](https://contrib.rocks/image?repo=barni363hun/stabox)</a>
