import { Component } from '@angular/core';
import { Response } from '@angular/http';

import {DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storePizzas()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getPizzas();
  }

  onLogout() {
      this.authService.logout();
  }
}