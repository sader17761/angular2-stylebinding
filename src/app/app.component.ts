import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> {{ title }} </h1>
  <button class='myBtn' [class.extraclass]="someProperty">Call to Action</button>
  <button class='myBtn' [style.border]="someProperty ? '5px solid yellow' : 'none'">Call to Action</button>
  <br><br>
  <button class='myBtn' [ngClass]="setClasses()">Call to Action</button>
  <button class='myBtn' [ngStyle]="setStyles()">Call to Action</button>
  `,
  styles: [`
  .myBtn { font-size:1.7em; }
  .extraclass { background: black; color: white;}
  .anotherclass { font-weight: bold;}
  `]
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
}
