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

# **What is this game all about?**

* **React, Typescript, Redux Toolkit**
* **Clean Atomic Design Architecture**
* **Mobile First Optimization**
* **All remote assets deliveries into app by Context**
* **Responsive media (personal media by device type)**
* **Multilingual with autodetect locale by user-agent**
* **High percentage test coverage (>95%)**
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

<br />

<a href="https://github.com/KoninMikhail/snake-game">
<img width="100%" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/images/project_tablet_image.png" alt="@KoninMikhail/snake-game's logo">
</a>

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/menu.png" width="50px" />

## TABLE OF CONTENTS

- [General](#the-snake-game)
    - [Request feature](#request-features-)
- [Quick start](#quick-start)
    - [Requirements](#requirements)
    - [Report a bug](#report-bug-)
- [Configuration](#configuration)
- [Asset control & injection](#assets-control--injection)
- [Routes](#routes)
- [localization](#localization)
    - [How add your own locale](#how-add-your-locale)
- [Services](#services)
- [Additional Information](#additional-information)
- [Contributing](#contributors)
- [Buy Me A Coffee](#buy-me-a-coffee)
- [License and Changelog](#license-and-changelog)

<br /><br />

<img align="left" src="https://raw.githubusercontent.com/KoninMikhail/social-analytics-dashboard-template/master/.repo/iconpack/qs.png" width="50px" />

## Quick start

> If you need full workspace:

1. Clone this repository
2. Check system requirements.
3. Console or bash command for install package.json<br>
   `` cd html-social-analytics-dashboard-template``<br>
   `` yarn install``
4. Enjoy this!

---------
if you do not have installed Yarn package manager:
``npm install -g yarn``, and repeat guide;

## Requirements:

> - **NodeJS:** 17.3 (My version at building time)
>- **Yarn:** 1.22


<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## Configuration

### App

> All constants placed in `./src/constants/APP.ts`

| Constant                   | Default value | Effect                                                                                                                                                                                                                       |
|----------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SOUND_ENABLED`            | true          | The initial audio volume is set from this constant value, unless it is changed in the browser. If the user alters the volume, their new setting is stored in the local storage of their browser and will be used from there. |
| `PAGE_TRANSITION_DURATION` | 1400          | This constant is the base value for the duration of all transitions and animations in the application. When the route is changed, re-rendering will occur halfway through this duration.                                     |

##### Paths

if you are use `./public/` folder as host for application assets - is folder names in paths for use in app context

| Constant     | Default value |
|--------------|---------------|
| `ASSETS_DIR` | 'assets'      |
| `IMAGES_DIR` | 'images'      |
| `SOUNDS_DIR` | 'sounds'      |

### Game

> All constants placed in `./src/constants/Game.ts`

| Constant                             | Default value | Effect                                                                                            |
|--------------------------------------|---------------|---------------------------------------------------------------------------------------------------|
| `BASE_SCORE_STEP`                    | 10            | Step for increase game score.                                                                     |
| `DEFAULT_NEXT_LEVEL_COUNTDOWN_VALUE` | 80            | The number of game glasses in which the first raising of the game level will occur.               |
| `NEXT_LEVEL_COUNTDOWN_MULTIPLIER`    | 1.2           | If the level 2 or higher, then this multiplier will be used to increase points to the next level. |
| `LEVEL_UP_SPEED_AMPLIFIER`           | 0.7           | Levelup game speed amplifier. Less number, faster acceleration.                                   |                                                                            

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## Assets control & injection

> All assets data placed in `./src/data`;

---

**All pictures and sounds used in the application are delivered within the application itself, using the element ID
found
in the context.**

---

**For example:**

```
// get image source
const imageContext = useImagesContext();
const image = getImageSourceById(imageContext, sourceID, deviceScreenType);
 
// get sound source
const soundContext = useSoundsContext();
const sound = getSoundSourceById(soundContext, sourceID);
```

> It is recommended to use pre-made components from @ui/atoms/images when working with images; all you need to do is
> pass the image's ID in the component's properties.

<br />

### Image Sources & Assets injection

* `imageID` - The basic element of the image context structure.
  Her name is key of imagesData if you are using
  default context.

* `screenType` - Device screen type.
  it is determined automatically when the application is initialized.
  May be set to: Default, mobile, tablet, desktop.
* `imageSourceItem` - Provide an object containing image source links for the current screen type.
  Note: placeholder value - is an optional image for time when load original image.

> ⚠️`default` screen type in every item - required. More details below ⚠️

At the start of the application, it will identify the type of screen being used and provide the resources that are best
suited for it. If there are no specific resources available for the screen type, it will return the default resources.


---

**Images Data structure:** `imageID` - `screenType` - `imageSourceItem`

---

<img width="100%" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/images/project_image_data_scheme.jpg" alt="@KoninMikhail/snake-game's logo">

### Sound Sources

* `soundID` - The basic element of the sound context structure.
  Her name is key of soundsData if you are using
  default context.

* `soundSourceItem` - Provide an object containing sound source links and pass options.

---

**Sounds Data structure:** `soundID` - `soundSourceItem`

---

<img width="100%" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/images/project_sounds_data_scheme.jpg" alt="@KoninMikhail/snake-game's logo">


<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## Routes

> All routes are in the file `./src/app/routes/routes.tsx`

| Route    |     Type     |                                                                              Description                                                                               | Restrictions |
|----------|:------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-------------:|
| `/`      |    index     |                                                                    Used as the homepage of the app.                                                                    |           no |
| `/game`  |  game page   | Restricted route with game page. Access is only allowed after launching the application on the index route (the `store/game/gameLaunch` value is changed to `launch`). |          yes |
| `/*`     |  not found   |                                                         Redirects here if the user is looking for easter eggs.                                                         |          yes |
| `/error` | error in app |                                                   Redirects here only if there is a fatal error in the application.                                                    |          yes |

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## Localization

> All locales are in `./src/locale` and connect by index.ts

<a href="https://github.com/KoninMikhail/snake-game/fork">
  <img alt="KoninMikhail/snake-game Author brand logo without text" align="right" src="https://raw.githubusercontent.com/KoninMikhail/snake-game/main/.resources/images/logo.png" width="25%" />
</a>

### tool

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
4) `import` into `./src/locale/index.ts`.
5) `insert to export object`.

> Ensure that our language pack does not contain any Cyrillic characters. If present, replace the main application font
> with one that supports them.

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## Services

### Game Engine Service

> located in `./src/app/services/engine/useGameEngine.ts`

re like Aldus PageMaker including versions of Lorem Ipsum

### Sounds Services

> located in `./src/app/components/sounds`

A set of microservices that are implemented as a separate layer in Atomic Design.
Each microservice is responsible for monitoring the overall state of the application and triggering an audio response if
the conditions it has been assigned are met.

<br /><br />

<img align="left" src="https://github.com/KoninMikhail/snake-game/blob/main/.resources/icons/contributors.png" width="50px" />

## Additional Information

> information that can help you learn the architecture of the project faster

#### how does the pipeline initialize and load the application?

```
* initialize react
* Implementing a middleware that monitors and records the device's data (including type and screen size) for set app
  params.
* Once data about the device has been obtained, the resources needed for its selection and implementation are chosen and
  put into action.
* After loading image placeholders, loader be hidden
  ```

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
