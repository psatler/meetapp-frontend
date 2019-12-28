<p align="center">
  <img alt="Repository Last Commit Date" src="https://img.shields.io/github/last-commit/psatler/meetapp-frontend?color=blue">

  <a href="https://www.linkedin.com/in/pablosatler/">
    <img alt="Made by Pablo Satler" src="https://img.shields.io/badge/made%20by-Pablo%20Satler-blue">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/psatler/meetapp-frontend?color=blue">

</p>

# Meetapp Frontend

> Frontend of the [meetapp backend app](https://github.com/psatler/meetapp-backend)

The frontend web is dedicated for meetup organizers and does not have subscription feature.
So, the organizers can create the meetup and set up its pieces of information, like where it is taking place, banner photo, etc.

This project has ESLint and Prettier configured as its linter and formatting tools respectively along with tools like Redux and Redux Saga, and Reactotron.

---

### Table of Contents

<!-- - [How to Run](#how-to-run) -->
<!-- - [Features](#features) -->

- [Screens of the app](#screens-of-the-app)
- [Some dependecies used](#some-dependecies-used)
- [Acknowledgements](#acknowledgements)
- [License](#license)

### Screens of the app

#### Authentication

The user will be able to authenticate themselves by email and password.

#### Registration

The user will be able to register themselves in the application using name, e-mail and password.

#### Dashboard

The user can list all the meetup they organize and click on them to see more details about it.

In this screen, the user can navigate to page to create new meetups.

#### Details

The user can visualize more details of a given meetup previously registered.

In this screen, they can edit the pieces of information about a meetup or even cancel it.

#### New / Edit

The user can register or edit pieces of information about the meetups they organize.

They can preview the banner image of the meetup when they select an image.

All the form fields must be validated.

#### Profile

The user can edit its pieces of information registered on the application.

All the form fields must be validated.

---

### Some dependecies used

- [ESLint](https://github.com/eslint/eslint): A fully pluggable tool for identifying and reporting on patterns in JavaScript
- [Prettier](https://github.com/prettier/prettier): An opinionated code formatter
- [EditorConfig](https://github.com/editorconfig/editorconfig): It helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- [Styled Components](https://github.com/styled-components/styled-components): The best bits of ES6 and CSS to style your apps without stress
- [Unform](https://github.com/Rocketseat/unform): Create ReactJS uncontrolled form structures with nested fields, validations and much more!
- [Yup](https://github.com/jquense/yup): Dead simple Object schema validation
- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
- [Typesafe actions](https://github.com/piotrwitek/typesafe-actions): Typesafe utilities designed to reduce types verbosity and complexity in Redux Architecture.

---

### Acknowledgements

- A good reference to set up ESLint along with Typescript and Prettier can be found at [https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

- CSS speech bubbles made easy at [https://leaverou.github.io/bubbly/](https://leaverou.github.io/bubbly/)

- Adding Redux DevTools to work with Typescript: [https://www.mydatahack.com/getting-redux-devtools-to-work-with-typescript/](https://www.mydatahack.com/getting-redux-devtools-to-work-with-typescript/)

- Fixing some typescript typing errors regarding [JSX element type 'Component' does not have any construct or call signatures. [2604]](https://stackoverflow.com/questions/53452966/typescript-3-jsx-element-type-component-does-not-have-any-construct-or-call-s?rq=1) when creating private routes

---

### License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT) © Pablo Satler 2019

---

&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;
&nbsp;

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
