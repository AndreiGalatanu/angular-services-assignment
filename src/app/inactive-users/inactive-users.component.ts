import { CounterService } from './../counter.services';
import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  ngOnInit() {
    this.users = this.usersServices.inactiveUsers;
  }
  constructor(private usersServices: UsersServices,
    private counterService: CounterService) { }
  onSetToActive(id: number) {
    this.usersServices.setToActive(id);
    this.counterService.countToActive();
  }
}
