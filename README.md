<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/123728969-d2a87b00-d8b1-11eb-9ece-558d4021f816.png">

# Web Application (https://freecash.com/en) Test Automation with Playwright, javascript, BDD cucumber : 
## Table of Contents

- [Tools And Technology](#tools-and-technology)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests based on environment](#running-tests)
- [Report](#report)


## Tools And Technology
- code editor: VS code (preferred)
- PlayWright 
- JavaScript
- BDD Cucumber
- Page Object Model
- Chai Assertion
- Html Report

## Prerequisites
- Ensure Node.js and npm are installed on your machine
- Install Visual Studio (Optional): Visual Studio is recommended for javaScript/Typescript development, but you can use any editor/IDE 

## Installation

- Clone the repository:

```sh
https://github.com/sumant326541/FreecashAutomationPlayWrightBDD.git
```
- Installing dependencies from package.json

```sh
npm install
```

## Running Tests based on environment

- Run in production environment (update url based on environment in config file)

```sh
npm run test:prod
```

- Run in Stage environment (update url based on environment in config file) - currently no sataging url available

```sh
npm run test:stage
```

## Report

```sh
npm run report
```

