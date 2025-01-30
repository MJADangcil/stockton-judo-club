# Stockton Judo Club

`stockton-judo-club` is the public repository for the [Stockton Judo Club](https://stocktonjudoclub.com). The project was bootstrapped with [Create React App](https://create-react-app.dev/), and hosted with [Firebase](https://firebase.google.com/). Domain is purchased and hosted through [Google Domains](https://domains.google/).

## Table of Contents

- [Stockton Judo Club](#stockton-judo-club)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Project Instructions](#project-instructions)
    - [Node.JS and NPM](#nodejs-and-npm)
    - [Firebase](#firebase)

## Project Structure

The application is built off of single-page application architecture. The project's entry point is [`App.js`](/src/App.js) which is also the [`HomePage.js`](/src/pages/HomePage/HomePage.js). So we have the following project structure:

- [`App.js`](/src/App.js) or [`HomePage.js`](/src/pages/HomePage/HomePage.js)
  - [`AboutPage.js`](/src/pages/AboutPage/AboutPage.js)
  - [`Membership.js`](/src/pages/Membership/Membership.js)
  - [`Instructors.js`](/src/pages/Instructors/Instructors.js)
  - [`ScheduleAndContactInfo.js`](/src/pages/ScheduleAndContactInfo/ScheduleAndContactInfo.js)
  - [`UsefulLinks.js`](/src/pages/UsefulLinks/UsefulLinks.js)

For the front-end components, I use [Material UI](https://mui.com/material-ui/).

---

## Project Instructions

### [Node.JS and NPM](https://create-react-app.dev/docs/available-scripts)

You will need to have `node` and `npm` installed on your machine, so follow [these steps](https://nodejs.org/en/download) for your development environment.

NOTE: Make sure that your `$PATH` variable is set correctly so your terminal can recognize the `node` and `npm` commands.

Assuming Node.js is installed and configured correctly, follow the steps below:

1. With `npm` installed, navigate to the parent/open a terminal in the parent directory and run the `npm install` command to install the packages.
2. Once the packages are installed, use `npm start` to run the app in the development mode and open a browser window to http://localhost:3000.
3. For production, simply commit the code changes to the **GitHub repo** and run the `npm run build` to build a React production-ready build.

### [Firebase](https://create-react-app.dev/docs/deployment#firebase)

You will need to have `firebase` CLI installed on your machine, so follow [these steps](https://firebase.google.com/docs/cli#install-cli-windows) for your development environment.

Assuming Firebase has been initialized already, follow the steps below:

1. Login into your Firebase account: `firebase login`.
2. Select the Firebase project: `firebase use <project-name>`. If you need to find your project name, run the following command: `firebase projects:list`
3. Build the project build folder using the command: `npm run build`
4. To generate a shareable preview of the project run the command `firebase hosting:channel:deploy preview` and navigate to the `hosting:channel` URL to see the preview.
   NOTE: You may need to append `/stockton-judo-club` at the end of the generated **Channel URL** to render the site.
5. To finalize and deploy to production use the command `firebase deploy` and then navigate to http://stocktonjudoclub.com to see the new changes.
