import { Injectable } from '@angular/core';
import { ACTIVE_AUTH, USER_LIST } from '../data/db.data';
import { User } from '../models/user.model';
// import * as uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ApiUserService {

  getUsers(): User[] {
    return USER_LIST;
  }

  getUser(value: string, key: 'id' | 'email'): User | null {
    let founded = USER_LIST.filter((i) => i[key] === value && !i.active);
    if (founded?.length === 1) {
      return founded[0];
    }
    return null;
  }

  changeUserStatus(id: string, status: boolean): boolean {
    let success = false;
    USER_LIST.forEach(i=>{
      if(i.id === id) {
        success = true;
        i.active = status;
      }
    })
    return success;
  }

//auth
  getAuth(id: string): string | null {
    if(id){
      let token = uuidv4();
      ACTIVE_AUTH.set(id, token);
      return token;
    }
    return null;
  }

  checkAuth(id: string, token: string): boolean {
    return ACTIVE_AUTH.get(id) === token;
  }
}
