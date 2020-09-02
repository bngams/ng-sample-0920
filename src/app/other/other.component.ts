import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
    <p>
      Use material component
    </p>
    <button mat-raised-button color="primary">Primary</button>
  `,
  styles: [
  ]
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
