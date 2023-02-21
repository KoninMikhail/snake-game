<!-- markdownlint-disable MD032 MD033-->
<!-- Write your README.md file. Build something amazing! This README.md template can guide you to build your project documentation, but feel free to modify it as you wish 🥰 -->

# **The Snake Game**

> Super arcade game club atmosphere. Game it! Start it! Use it! Fork it!.
<div align="center">
  <!-- Change your logo -->
  <a href="https://github.com/KoninMikhail/snake-game">
    <img width="100%" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/images/project_image.jpg" alt="@KoninMikhail/snake-game's logo">
  </a>

  <a href="#">
    <img src="https://img.shields.io/badge/build-alpha-blue?style=for-the-badge&color=critical" alt="KoninMikhail/snake-game">
     </a>
    <a href="https://github.com/KoninMikhail/snake-game/issues">
      <img src="https://img.shields.io/github/issues/KoninMikhail/snake-game?color=informational&style=for-the-badge&logo=github" alt="KoninMikhail/snake-game issues"/>
    </a>
    <a href="https://github.com/KoninMikhail/snake-game/pulls">
      <img src="https://img.shields.io/github/issues-pr/koninmikhail/social-analytics-dashboard-template?color=informational&style=for-the-badge&logo=github"  alt="KoninMikhail/ pull requests"/>
    </a>
    <a href="https://case.mikekonin.com/snake-game/">
         <img src="https://img.shields.io/badge/ -live demo-blue?style=for-the-badge&color=success" alt="KoninMikhail/snake-game link to live demo.">
    </a>
    <a href="https://github.com/KoninMikhail/snake-game/fork">
      <img src="https://img.shields.io/badge/fork%20this-game-blue?logo=github-sponsors&style=for-the-badge&color=ff69b4" alt="KoninMikhail/snake-game create fork">
    </a>
</div>
<br />
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
<br />

# **What is this game all about?**

* **React, Typescript, Redux Toolkit**
* **Clean Atomic Design Architecture**
* **Mobile First Optimization**
* **All remote assets delivery into app by Context**
* **Responsive media (personal media by device type)**
* **Multilingual with autodetect locale by user-agent**
* **High percentage of code coverage for tests**
* **Quick start** from prepared workspace: 🗲🗲
    * [vite](https://vitejs.dev/) - Next Generation Frontend Tooling
    * [eslint](https://eslint.org/) - ESLint is a tool for identifying and reporting on patterns found in
      ECMAScript/JavaScript code.
    * [prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
    * [Husky](https://github.com/typicode/husky) - Pre-commit tests
    * [Commitlint](https://commitlint.js.org/#/) - Conventional changelog commits linter
* **This repo can be used as prepared entrypoint for your own snake game :)**

<br />

## Request features ⚡

> Use [issue](https://github.com/KoninMikhail/snake-game/issues) and follow the rules :)

## Report bug 🤬

> The data from repository is provided an 'As is', without any guarantees. All the data provided is used at your own
> risk.
**If you want report a bug** - use [issue](https://github.com/KoninMikhail/snake-game/issues)

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/menu.png" width="50px" />

## TABLE OF CONTENTS

- [General](#the-snake-game)
    - [Request feature](#request-features-)
- [Quick start](#quick-start)
    - [Requirements](#requirements)
    - [Report a bug](#disclamer--%EF%B8%8F)
- [App](#app-documentation)
    - [configuration](#app-configuration)
    - [localization](#localization)
        - [How add my locale](#how-add-my-locale)
    - [routes](#routes)
- [Game](#game-documentation)
    - [Configuration](#game-configuration)
- [Environment](#environment)
    - [testing](#testing)
    - [deployment](#deployment)

- [Contributing](#contributors)
- [Buy Me A Coffee](#buy-me-a-coffee)
- [License and Changelog](#license-and-changelog)

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## App

### Configuration

> Lorem Ipsum is

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
<br />

## Routes

> By default, all routes are in the file `./src/app/routes/routes.tsx`

| Route    |     Type     |                                                                              Description                                                                               | Restrictions |
|----------|:------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-------------:|
| `/`      |    index     |                                                                    Used as the homepage of the app.                                                                    |           no |
| `/game`  |  game page   | Restricted route with game page. Access is only allowed after launching the application on the index route (the `store/game/gameLaunch` value is changed to `launch`). |          yes |
| `/*`     |  not found   |                                                         Redirects here if the user is looking for easter eggs.                                                         |          yes |
| `/error` | error in app |                                                   Redirects here only if there is a fatal error in the application.                                                    |          yes |

<br />

## Localization

> By default, all locales are in `./src/locale` and connect by index.ts

<a href="https://github.com/KoninMikhail/snake-game/fork">
  <img alt="KoninMikhail/snake-game Author brand logo without text" align="right" src="https://raw.githubusercontent.com/KoninMikhail/snake-game/main/.resources/images/logo.png" width="25%" />
</a>

### main

i18n-next is the primary tool for multilingual support.

### locales

By default, you will have one language pack installed, but you can add additional language packs if desired. If an error
occurs in the language pack, it will be taken from the default pack, so it is important to not delete it unless you
understand the potential consequences.

#### Auto-select locale

i18next-browser-languagedetector used to automatically select the language based on the user's browser language
settings.

### How add your locale

1) goto `./src/locale` and `Copy / Paste` a JSON with name `en-US.json.`
2) `Rename file` with your own language code
3) `Replace values` with your language
4) `import your localce` to `./src/locale/index.ts`.
5) `insert to export object`.

> Make sure that there are no Cyrillic characters in our language pack. (If they are, then you need to replace the main
> application font with one that supports them)

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

### Game

#### Configuration

> Lorem Ipsum is

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## Environment

### Testing

> Lorem Ipsum is

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

---

### Deployment

> Lorem Ipsum is

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## Contributors

I am <3 contributions big or small. If you help my project --> 🍰**link to your profile will be here**🍰.

<a href="https://github.com/KoninMikhail/snake-game/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=KoninMikhail/snake-game" />
</a>

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/coffee.png" width="50px" />

## Buy Me A Coffee

<a href="https://github.com/KoninMikhail/snake-game/fork">
  <img alt="KoninMikhail/snake-game Author brand logo without text" align="right" src="https://raw.githubusercontent.com/KoninMikhail/snake-game/main/.resources/images/logo.png" width="25%" />
</a>

Currently I'm seeking for new sponsors to help maintain this project! ❤️

With every donation you make - you're helping with development of this project. *You will be also featured in project's
README.md*, so everyone will see your contribution and visit your content⭐.

<a href="https://yoomoney.ru/to/410011749810070">
  <img src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/images/sponsor.svg">
</a>

#### OR CLICK BUTTON

[![GitHub followers](https://img.shields.io/github/followers/koninmikhail.svg?style=social)](https://github.com/koninmikhail)
[![GitHub stars](https://img.shields.io/github/stars/koninmikhail/social-analytics-dashboard-template.svg?style=social)](https://github.com/koninmikhail/social-analytics-dashboard-template/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/koninmikhail/social-analytics-dashboard-template.svg?style=social)](https://github.com/koninmikhail/social-analytics-dashboard-template/watchers)
[![GitHub forks](https://img.shields.io/github/forks/koninmikhail/social-analytics-dashboard-template.svg?style=social)](https://github.com/koninmikhail/social-analytics-dashboard-template/network/members)

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/law.png" width="50px" />

## **License and Changelog**

> Copyright (c) 2023, KoninMikhail.
> This project under **[MIT](LICENSE)** license. See the changes in the **[CHANGELOG.md](CHANGELOG.md)** file.
