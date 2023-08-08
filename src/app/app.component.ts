import { Component } from '@angular/core';
import { StorageService } from './core/services/storage-service/storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth';

  formType = 0;

  constructor(
    private routes: Router,
    private storageService: StorageService) 
  {
    if(this.storageService.isAuthenticated()) {
      this.routes.navigate(['dashboard'])
    }
  }

}
