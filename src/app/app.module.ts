import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OnlineStatusModule } from 'ngx-online-status';

/**
 * Author: Rakshit Shah
 * Email: rakshitshah1994@gmail.com
 * Link: https://medium.com/beingcoders/simple-way-to-fetch-the-internet-connection-status-for-your-angular-application-291d9ab34999?sk=5fd1a0ddfa5593ef97e6a6151e0416c7
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //Add import OnlineStatusModle from ngx-online-status package.
    OnlineStatusModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
