import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  disp1: string = 'Nothing to show';
  disp2: string = 'Nothing to show';

  constructor(private ctrService: CounterService){}

  setToInactive(id:number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.disp1 = "Active -> Inactive count = " + this.ctrService.activeToInactive();
  }
  setToActive(id:number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.disp2 = "Inactive -> Active count = " + this.ctrService.inactiveToActive();
  }
}
