

# Cordova Application

A skeleton for creating a cordova application using SASS, Angular 1, and Express.

## Table of Contents

+ [Quickstart](#quickstart)
  + [Browser Platform](#browser-platform)
  + [iOS Platform](#ios-platform)
+ [Development](#development)

## Quickstart

Clone the repo

```bash
git clone git@github.com:jearle/cordova-app.git
```

Install the Cordova dependencies.

```bash
npm install
```

### Browser Platform

Change directory to the app server, install the dependencies and start the server.

```bash
cd app-server
npm install
node index.js
```

Change directory to the app folder.

```bash
cd ../app
```

Install the browser platform.

```bash
../node_modules/.bin/cordova platform add browser
```

Run the app on the browser platform.

```bash
../node_modules/.bin/cordova run browser
```

### iOS Platform

Change directory to the app server, install the dependencies and start the server.

```bash
cd app-server
npm install
node index.js
```

Change directory to the app folder.

```bash
cd ../app
```

Install the iOS platform (note Xcode is required).

```bash
../node_modules/.bin/cordova platform add ios
```

Run the app on the browser platform.

```bash
../node_modules/.bin/cordova run ios
```

## Development

To develop the application further you will need to work out of the app-ui directory.

```bash
cd app-ui
```

Install dependencies.

```bash
npm install
```

Start the application.

```bash
npm start
```

To run the tests navigate to `http://localhost:3000/test` in your browser.

To view the application navigate to `http://localhost:3000`.

## Application Structure

The application is split up into sub applications, `app`, `app-server` and `app-ui`.

### App

The `app` follows the Cordova structure for documentation go to the cordova website [https://cordova.apache.org/](https://cordova.apache.org/).

### App Server

The `app-server` is an API server that generates 2000 random people, the schemas the people follow and the navigation.

### App UI

The `app-ui` is the heart of the application.  It follows the following tree structure:

```
lib/
  components/
  helpers/
  services/
  app.js
  index.js
test/
  helpers/
  ..mirrors lib..
```

The components are the visual elements drawn on the page

The helpers are helper functions.

The services are specifically API services used to hit the `app-server` endpoints.

The `test/` folder mirrors the lib folder, as well as adds a top level `helpers` folder.  This folder contains shared functions for things such as creating mocks.

## Understanding the Scroll View.

The scrollview helper located in the `lib/helpers/scrollview.js` is a helper class used to create scrollable content that has a lot of items.  In this application we use a dataset of 2000 items.

When the class is instantiated it determines the height of the first list item within a scrollable element passed to the constructure.

This height is used to determine the current shown element index based on height vs the scroll top distance.  It then slices the full data array into a subsection from the index to the index plus 110.  The number 110 was chosen as it allows the max amount of 18px height elements to be shown on a 2560px height monitor less the height of the Google Chrome Navigation bar and a 50px page header.  Ideally this number would be calculated based on the height of the scrollable element, and would update on window resize.

The top margin of the unordered list element is set to the scroll top distance upon index shifts when scrolled.

A passed in on scroll function is called upon whole index shifts passing the data subsection to the function.  It is up to instantiator of the scrollview to properly rendor the subsection of data.