import { Component } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

/**
 * Author: Rakshit Shah
 * Email: rakshitshah1994@gmail.com
 * Link: https://medium.com/beingcoders/simple-way-to-fetch-the-internet-connection-status-for-your-angular-application-291d9ab34999?sk=5fd1a0ddfa5593ef97e6a6151e0416c7
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: OnlineStatusType; //Enum provided by ngx-online-status
  onlineStatusCheck: any = OnlineStatusType;

  constructor(private onlineStatusService: OnlineStatusService) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // Retrieve Online status Type
      this.status = status;
    });
  }
}
