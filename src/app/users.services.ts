import { Injectable } from '@angular/core';
import { CounterService } from './counter.services';
@Injectable()
export class UsersServices {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  logChanges(status: string) {

    console.log('user changed to :' + status)
  }

  constructor(private CounterService: CounterService) { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }





}



