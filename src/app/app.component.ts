import { UsersServices } from './users.services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServices]
})
export class AppComponent {


  constructor(private UsersServices: UsersServices
  ) {

  }

}
