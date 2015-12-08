

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

Change directory to `app/`

```bash
cd app
```

Install the browser platform

```bash
../node_modules/.bin/cordova platform add browser
```

Start the server

```bash
cd ../app-server
node index.js
```

Run the app on the browser platform

```bash
../node_modules/.bin/cordova
```