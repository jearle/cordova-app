

# Cordova Application

A skeleton for creating a cordova application using SASS, Angular 1, and Express.

## Table of Contents

[Quickstart](#quickstart)
[Browser Platform](#browser-platform)
[iOS Platform](#ios-platform)
[Development](#development)

## Quickstart

Clone the repo

```bash
git clone git@github.com:jearle/cordova-app.git
```

Install the dependecies

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

To run the tests navigation to `http://localhost:3000/test` in your browser.

To view the application navigate to `http://localhost:3000`.