[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)

<p align="center"><img src="https://raw.githubusercontent.com/sirixdb/sirix/master/logo.png"/></p>

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=SirixDB+-+a+storage+system%2C+which+creates+%28very+small-sized%29+snapshots+of+your+data+on+every+transaction-commit+through+the+implementation+of+a+novel+sliding+snapshot+algorithm.&url=http://sirix.io&via=sirix&hashtags=versioning,diffing,xml,kotlin,coroutines,vertx)

[![Follow](https://img.shields.io/twitter/follow/sirixdb.svg?style=social)](https://twitter.com/sirixdb)

[Join us on Slack](https://join.slack.com/t/sirixdb/shared_invite/enQtNjI1Mzg4NTY4ODUzLTE3NmRhMWRiNWEzMjQ0NjAxNTZlODBhMTQzMWM2Nzc5MThkMjlmMzI0ODRlNGE0ZDgxNDcyODhlZDRhYjM2N2U) | [Community Forum](https://sirix.discourse.group/)

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github) and another tutorial: [How YOU can contribute to OSS, a beginners guide](https://dev.to/itnext/how-you-can-contribute-to-oss-36id)

<h1 align="center">SirixDB Web frontend - An Evolutionary, Versioned, Temporal NoSQL Document Store</h1>
<h2 align="center">Store and query revisions of your data efficiently</h2>

>"Remember that you're lucky, even if you don't think you are, because there's always something that you can be thankful for." - Esther Grace Earl (http://tswgo.org)

## Introduction

**Discuss it in the [Community Forum](https://sirix.discourse.group)**

This is the repository for a web frontend based on [Vue.js](https://vuejs.org), [D3.js](https://d3js.org) and [TypeScript](https://www.typescriptlang.org).

It'll provide several interaction possibilities to store, update and query databases in SirixDB. Furthermore the front-end will provide interactive visualizations for exploring and comparing revisions of resources stored in SirixDB based on different views.

**Some ideas for comparing revisions of the XML or JSON resources, which need to be ported from a Java GUI/Processing can be found in my [Master's Theses](
https://github.com/JohannesLichtenberger/master-thesis/blob/master/Master/Thesis/thesis.pdf) and in a [Screencast](http://www.youtube.com/watch?v=l9CXXBkl5vI).**

## Test and edit in Gitpod
[![Edit and test in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/sirixdb/sirix-web-frontend)

Test and edit this project in a web based VS code environment.
## Project setup
**We currently face the following [issue](https://github.com/sirixdb/sirix-web-frontend/issues/18), whereas this [workaround](https://github.com/nuxt/typescript/issues/49#issuecomment-531086770) works until Nuxt.js or Element-UI fix the issue**

We've created a `Dockerfile` and a `docker-compose.yml` file to simplify the setup process. However you still have to setup Keycloak as desribed in the documentation for the REST-API (especially assigning the roles to an admin-user):

In order to use `docker-compose`:

1. `git clone https://github.com/sirixdb/sirix-web-frontend.git`
2. Start Keyclock with the command `sudo docker-compose up waitforkeycloak` from your sirixdb directory with the copied `docker-compose.yml` file.
3. In your browser navigate to http://127.0.0.1:8080 and click on the link "Administration Console" (if using Docker Toolbox, see below).
4. Use username "admin", password "admin" to log in.
5. Navigate to `Clients` => `sirix`.
6. Set `Standard Flow Enabled`.
7. Set redirect URL to `http://localhost:3005/callback`.
8. Navigate to the `Credentials` tab and generate a new secret.
9. Put this secret in `sirix/bundles/sirix-rest-api/src/main/resources/sirix-conf.json` as the value for `client.secret`. Make sure that the `oAuthFlowType` is set to `AUTH_CODE`
10. Create a user: `Users` => `Add User` => Username admin. Under `Credentials` => New password => admin / admin. Set Temporary to off. Under `Role Mappings` add the 4 roles: `create`, `delete`, `modify`, `view`.
11. Start the SirixDB HTTP-Server with the command `sudo docker-compose up -d server`.
12. Start the Node.js Server without Docker: `npm run dev`.
13. In your browser call http://localhost:3005 and the frontend should appear.

> NOTE:
> For those using Docker Toolbox instead of Docker to run Keycloak and Sirix, you will need to do the following:
> 1. Find your Docker IP (you should see it when starting Docker Quickstart Terminal).
> 2. Go to the nuxt.config.js file, and change 
```
proxy: {
    '/sirix': {
      target: 'https://localhost:9443',
      pathRewrite: {'^/sirix': ''},
      agent: new Agent({ rejectUnauthorized: false })
    }
  }
```
> to
```
  proxy: {
    '/sirix': {
      target: 'https://<your docker host>:9443',
      pathRewrite: {'^/sirix': ''},
      agent: new Agent({ rejectUnauthorized: false })
    }
  }
```
> 3. The URL for Keycloak in step 3 above is `http://<your docker host>:8080`.
> 4. You may also need to use a browser extension like switcheroo to redirect `localhost:8080/` to `<your docker host>:8080/`.

Setting up the Nuxt.js application:

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3005
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Customize configuration
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/simhol"><img src="https://avatars3.githubusercontent.com/u/4987937?v=4" width="100px;" alt="Simon Holdorf"/><br /><sub><b>Simon Holdorf</b></sub></a><br /><a href="https://github.com/sirixdb/sirix-web-frontend/commits?author=simhol" title="Code">💻</a></td>
    <td align="center"><a href="http://www.codingyang.com"><img src="https://avatars3.githubusercontent.com/u/18388400?v=4" width="100px;" alt="yang"/><br /><sub><b>yang</b></sub></a><br /><a href="https://github.com/sirixdb/sirix-web-frontend/commits?author=Rackar" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pareshjoshi"><img src="https://avatars1.githubusercontent.com/u/6260967?v=4" width="100px;" alt="Atman"/><br /><sub><b>Atman</b></sub></a><br /><a href="https://github.com/sirixdb/sirix-web-frontend/commits?author=pareshjoshi" title="Code">💻</a></td>
    <td align="center"><a href="https://www.jawahar.tech/"><img src="https://avatars0.githubusercontent.com/u/14835387?v=4" width="100px;" alt="Jawahar"/><br /><sub><b>Jawahar</b></sub></a><br /><a href="https://github.com/sirixdb/sirix-web-frontend/commits?author=jawahars16" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mosheduminer"><img src="https://avatars1.githubusercontent.com/u/47164590?v=4" width="100px;" alt="Moshe Uminer"/><br /><sub><b>Moshe Uminer</b></sub></a><br /><a href="https://github.com/sirixdb/sirix-web-frontend/commits?author=mosheduminer" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
