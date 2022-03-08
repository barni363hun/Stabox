<div align="center">
  
# Stabox

<a href="https://www.stabox.hu"><img src="https://drive.google.com/uc?export=view&id=1wnxXt-08N5PoJNZN2JBUZTo6ij7rneQ1" width="450"/></a>

<a href="https://code.visualstudio.com/">![Visual Studio Code](https://img.shields.io/static/v1?style=for-the-badge&message=Visual+Studio+Code&color=007ACC&logo=Visual+Studio+Code&logoColor=FFFFFF&label=)</a>
<a href="https://github.com/">![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)</a>
<a href="https://nx.dev/">![Nx](https://img.shields.io/static/v1?style=for-the-badge&message=Nx&color=143055&logo=Nx&logoColor=FFFFFF&label=)</a>
<a href="https://www.mysql.com/">![MySQL](https://img.shields.io/static/v1?style=for-the-badge&message=MySQL&color=4479A1&logo=MySQL&logoColor=FFFFFF&label=)</a>
<a href="https://nestjs.com/">![NestJS](https://img.shields.io/static/v1?style=for-the-badge&message=NestJS&color=E0234E&logo=NestJS&logoColor=FFFFFF&label=)</a>
<a href="https://angular.io/">![Angular](https://img.shields.io/static/v1?style=for-the-badge&message=Angular&color=DD0031&logo=Angular&logoColor=FFFFFF&label=)</a>

**Smart, Fast and New way of package transportation**

</div>

## For guests

:memo:
_[Development documentation](https://drive.google.com/drive/folders/1aS6iPvhOs3syn9xBn8x2ZOD_y9JpdqX3?usp=sharing)_

:art:
_[Design preview](https://www.figma.com/community/file/1049586110990675041/Stabox-Design)_

## For developers

:bar*chart:
*[Entity relationship diagram](https://drive.google.com/file/d/16Sp48zplwlCXzkh4lGCJgLFKxFITv4Oc/view?usp=sharing)\_

Naming conventions follow the angular syntax both on backend and frontend.

### Required to start

For both:

- `npm i`

For backend:

- MySql database named "stabox" (`mysql -e "CREATE DATABASE stabox"`)

### Execution

Frontend _(you can reach it on http://localhost:4200/)_:

- `npx nx serve stabox-frontend`

Backend _(you can reach it on http://localhost:7000/)_:

- `npx nx serve api`

Test:

- `npx nx e2e stabox-frontend-e2e --watch` _(not works on gitpod)_
  <sub><sup>If cypress not works on local scroll down </sup></sub>

### Build

- `npx nx run api:build`
- `npx nx run api:build --prod` (creates package.json too)
- `npx nx run-many --target=build --projects=stabox-frontend,api`

#### Production:

- `npm run build:all`
- `cd dist/apps/api`
- `npm i`
- `node main.js`

### Other useful commands

- Run `npx nx affected:apps` to get all apps which you have changed.
- Run `npx nx affected:libs` to get all libraries which you have changed.
- Run `npx nx affected:test` to test all apps which you have changed.
- Run `npx nx affected:test -- --only-failed` to test all apps which failed last time.
- Run `npx nx test stabox-frontend` to test the 'stabox-frontend' app.
- Run `npx ng g @nrwl/angular:lib new-lib` to generate the 'new-lib' library.
- Run `npx ng g component components/my-component --project=stabox-frontend` to add 'my-component' component to the 'stabox-frontend' project
- Run `npx nx dep-graph --watch` to open the dependency graph in browser
- Run `npx nx dep-graph --file=graph.json` or idk
- Run `npx nx test stabox frontend`

If you have issues with cypress try running:

- `npm cache clear -f`
- `npm i cypress -D`
- `node_modules/.bin/cypress install`

## Here you can run the app online:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/barni363hun/Stabox)

## Made by:

<a href="https://github.com/barni363hun/Stabox/graphs/contributors">![GitHub Contributors Image](https://contrib.rocks/image?repo=barni363hun/stabox)</a>
