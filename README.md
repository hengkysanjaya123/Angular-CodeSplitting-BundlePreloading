# Code Splitting and BundlePreloading

## Tools for fast Angular applications
### Code Splitting
Lazy loading module (on-demand loading)

    ```jsx
    ng g module <module name> --route <lazy route path> --module <parent module name>
    ng g m about --route about --module app

    ```
This lazy load method will lead to high latency when navigating across pages.
 
#### How to solve?
We can use 'Bundle Preloading' to pre-load the module. (More detail in next point)
 
### Bundle Preloading
ngx-quicklink:
 - Detects when the router links is visible in the viewport
 - Wait until the browser is idle
 - Prefetches the lazy modules

```jsx
npm i ngx-quicklink --save
```
### Efficient Serving (not implemented in this project)
```jsx
ng add @angular/fire // install firebase tool
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
