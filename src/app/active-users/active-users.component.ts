import { CounterService } from './../counter.services';
import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];


  ngOnInit() {
    this.users = this.usersServices.activeUsers;
  }
  constructor(private usersServices: UsersServices,
    private counterService: CounterService) { }

  onSetToInactive(id: number) {
    this.usersServices.setToInactive(id);
    this.counterService.countToInactive();
  }
}
