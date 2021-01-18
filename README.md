# E-Commerce project (Frontend technical exercise)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project setup

### Requirements

To run the app you must have `nodejs` (https://nodejs.org/en/download/) installed on your computer. `npm` or `yarn` is also mandatory.

### Install

- Clone the project : `git clone https://gitlab.matters.tech/entretiens/cats-adoption.git`
- Install dependencies : `cd cats-adoption` and `yarn install` (or `npm install`)

## Installation

    $ git clone https://github.com/benjbelh/Test-Frontend-Maiia.git
    $ cd Test-Frontend-Maiia
    $ yarn install

## Start

    $ yarn start

Runs the frontend app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

## Test App

### Unit tests

    $ yarn test

Launches the test runner to execute all test suites.  
Create React App uses [Jest](https://jestjs.io/) as its test runner.
Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser.
This lets us enable fast iteration speed and prevent flakiness.
Jest is intended to be used for unit tests of your logic and your components.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

    $ yarn test:dev

Launches the test runner in the interactive watch mode. Watch files for changes and rerun all tests when something changes.
This is useful when you develop in TDD mode.

### Integration & End-to-End tests

Cypress is our test runner for integration/user flow and e2e test suites.
To learn how to use it, check out the [Cypress documentation](https://docs.cypress.io/).

    $ yarn cypress:open

Opens the Cypress Test Runner with UI.
By default, Cypress will automatically find and allow you to use the browsers installed on your system.

    $ yarn cypress:run

Runs Cypress tests to completion.
This will run all tests headlessly in the Chrome browser.

### Run unit tests

- `yarn test` (or `npm test`)

Launches the test runner in the interactive watch mode.

## Git hooks

Husky is our git hooks tool in order to improve our commits and push.
You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push.
Husky supports [all Git hooks](https://git-scm.com/docs/githooks).
In that sense, we have defined two preventive hooks:

### `pre-commit` (≃ `yarn precommit` ≃ `yarn lint-staged`)

This hook will just ensure you will commit something in agreement with lint policies defined in `lint-staged.config.js` file.

### `pre-push` (≃ `yarn test`)

This hook will `yarn test` each time you attempt to `git push` something on your branch.
It will ensure you will push code without breaking test suites.

---

## Languages & tools

### Learn more - React & Create React App

To learn React, check out the [React documentation](https://reactjs.org/).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### CSS

This project uses [CSS Modules](https://github.com/css-modules/css-modules) with `[ComponentName].module.css` file naming convention.
CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format `[filename]\_[classname]\_\_[hash]`.

### Micro-generator framework

You might use [Plop tool](https://plopjs.com/documentation/), that makes it easy for an entire team to create files with a level or uniformity.
Plop is a little tool that saves you time and helps your team build new files with consistency.
Plop generates code when you want, how you want, and can be changed whenever you want.
The actual generator configuration is described inside [plopfile.js](./plopfile.js)

    $ yarn generate

Runs plop tool to generate React component, based on our naming convention.
The component must be named with PascalCase convention.
