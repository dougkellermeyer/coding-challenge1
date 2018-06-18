# Mindex Angular 6 Coding Challenge

## What's Provided
An [Angular 6](https://angular.io/) employee web application has been created and bootstrapped using an in browser "database".
Basic unit and e2e tests have been created.  [Angular Material Design](https://material.angular.io/) and [Flex Layout](https://github.com/angular/flex-layout)
have been added as dependencies.  Feel free to add or use other dependencies as you see fit.

Spend a few hours on this.  An incomplete solution is acceptable but it is recommended that you unit and/or e2e test completed functionality.

### Initial setup

Install [Node](https://nodejs.org/en/) version 8+.  After installation run `npm install` at the root of this project.

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## What to Implement

### Task 1
Add a new compensation property of type number to the [employee](./src/app/employee.ts) type.  Add the type to the [employee component](./src/app/employee/employee.component.ts).

### Task 2
The [employee](./src/app/employee.ts) type has the property directReports which is an array of other employee ids who report
directly to this employee.  On the [employee component](./src/app/employee/employee.component.ts) add a new field that displays
the **total** number of employees reporting to this person, directly and indirectly.
