# Angular2Stylebinding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Follow along video Link:
https://coursetro.com/posts/code/24/Angular-2-Class-&-Style-Binding-Tutorial

## My Notes:
1. In app.component.ts, inside '@Component'
  - `@Component({
    selector: 'app-root',
    template:
    <h1> {{ title }} </h1>
    <button class='myBtn' [class.extraclass]="someProperty">Call to Action</button>
    <button class='myBtn' [style.border]="someProperty ? '5px solid yellow' : 'none'">Call to Action</button>
    <br><br>
    <button class='myBtn' [ngClass]="setClasses()">Call to Action</button>
    <button class='myBtn' [ngStyle]="setStyles()">Call to Action</button>
    ,
    styles: [
    .myBtn { font-size:1.7em; }
    .extraclass { background: black; color: white;}
    .anotherclass { font-weight: bold;}
    ]
  })
  export class AppComponent {
    title = 'Angular 2 - Class and Style Binding.';

    someProperty = true;
    anotherProperty = true;

    setClasses() {
      let classes= {
        extraclass: this.someProperty,
        anotherclass: this.anotherProperty
      };
      return classes;
    }

    setStyles() {
      let styles = {
        'font-style': this.someProperty ? 'italic' : 'normal',
        'font-weight': this.anotherProperty ? 'bold' : 'normal'
      };
      return styles;
    }
  }`
