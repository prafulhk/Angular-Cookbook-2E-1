import { Component, inject } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
})
export class NotificationsButtonComponent {
  notificationCount$ = inject(NotificationsService).count$;
}
