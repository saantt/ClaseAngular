import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  readonly errors$ = new Subject<string>();

  notifyError(message: string): void {
    this.errors$.next(message);
  }
}
