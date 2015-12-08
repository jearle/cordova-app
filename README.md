

# Cordova Application

A skeleton for creating a cordova application using SASS, Angular 1, and Express.

## Quickstart

Clone the repo

```bash
git clone git@github.com:jearle/cordova-app.git
```

Install the dependecies

```bash
npm install
```

## Browser Platform

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

## iOS Platform

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