import { Component, OnInit } from '@angular/core';

// interface vs class
interface Person {
  firstname: string;
  lastname: string;
}

// annotation - decorator
@Component({
  selector: 'app-root', // markup (prefix)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // providers (DI)
})
export class AppComponent implements OnInit {
  title = 'sample-ngapp';
  // type inference => type of value
  readonly myVar = 'test';
  // explicit type
  myBoolean: boolean;
  // any type - avoid usage
  myAny: any;
  // data array
  myData: Person[] = [
    { firstname: 'Boris', lastname: 'Ngam' },
    { firstname: 'Eddy', lastname: 'Beg' }
  ];

  // DI
  constructor() { }

  // initialize
  ngOnInit(): void {
    this.displayMsg();
    this.myBoolean = false;
  }

  toggleMyBoolean(): void {
    this.myBoolean = !this.myBoolean;
  }

  private displayMsg(): void {
    console.log(`App component init ${this.title}`);
  }

  private testAny(): void {
    this.myAny = 1;
    this.myAny = '1';
    this.myAny = true;
  }
}
