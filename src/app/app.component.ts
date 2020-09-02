import { Component, OnInit } from '@angular/core';

// annotation - decorator
@Component({
  selector: 'app-root', // markup (prefix)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // providers (DI)
})
export class AppComponent implements OnInit {
  title = 'sample-ngapp';

  // DI
  constructor() { }

  // initialize
  ngOnInit(): void {
  }
}
