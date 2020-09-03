import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableDemoService {

  constructor() { }

  demoObservable(): void {
    // create simple observable from scratch
    const observable = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(1);
      }, 1000);
      setTimeout(() => {
        subscriber.next(2);
      }, 1000);
      // subscriber.error();
      subscriber.complete();
    });

    // observable from an array
    const myNumbers = [1, 2, 3];
    const observableOf = of(...myNumbers);

    // observer: Observer
    const observer = {
      next: (data) => { console.log('observer next', data); },
      error: (data) => { console.log('observer error', data); },
      complete: () => { },
    };

    // consume data / results from observable
    // with complete observer
    observable.subscribe(observer);
    // with PartialObserver (see Partial<type> - Typescript)
    observableOf.subscribe(
      (data) => console.log(data)
    );

    observableOf.pipe(
      map(x => x * 2)
    ).subscribe(x => console.log('with map', x));

  }
}
