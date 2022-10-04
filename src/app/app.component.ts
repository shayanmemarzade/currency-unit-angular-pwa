import { Component } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status: OnlineStatusType;
  onlineStatusCheck: any = OnlineStatusType;
  title = 'angular-pwa';
  constructor(private onlineStatusService: OnlineStatusService, private toastr: ToastrService) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // Retrieve Online status Type
      this.status = status;
      if(status === this.onlineStatusCheck.OFFLINE){
        this.toastr.error('Offline', 'Please check internet connection');
      }
    });
    
  }
}
