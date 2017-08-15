import { Injectable } from '@angular/core';
import { CountingService } from './counting.service';

@Injectable()
export class UsersService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  
  constructor(private countingService: CountingService){}
  
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countingService.incInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countingService.incActive();
  }
  
}

