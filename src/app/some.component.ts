import { Component } from "@angular/core";

@Component({
  selector: "app-some-component",
  template: `
    <p>
      some-component is visible!
    </p>
  `,
  styles: [
    `
      p {
        font-size: 30px;
      }
    `,
  ],
})
export class SomeComponent {}
