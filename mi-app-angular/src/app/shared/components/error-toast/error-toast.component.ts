import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.css']
})
export class ErrorToastComponent implements OnInit {

  message: string | null = null;
  private subscription?: Subscription;
  private timeoutId?: ReturnType<typeof setTimeout>;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.subscription = this.notificationService.errors$.subscribe(message => {
      this.message = message;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() =>
        this.message = null,
        5000);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    clearTimeout(this.timeoutId);
  }

  dismiss(): void {
    this.message = null;
  }
}
