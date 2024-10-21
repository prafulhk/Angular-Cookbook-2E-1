import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  count$ = new BehaviorSubject(0);

  constructor() {
  }

  setCount(value: number) {
    this.count$.next(value);
  }
}
