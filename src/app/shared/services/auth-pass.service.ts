import { Injectable } from '@angular/core';
import { AuthPassItem } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthPassService {
  private _AUTH_PASS: AuthPassItem[] = [
    {
      id: 'usr_001',
      pass: 'usr_001',
    },
    {
      id: 'usr_002',
      pass: 'usr_002',
    },
    {
      id: 'usr_003',
      pass: 'usr_003',
    },
    {
      id: 'usr_004',
      pass: 'usr_004',
    },
    {
      id: 'usr_005',
      pass: 'usr_005',
    },
    {
      id: 'usr_006',
      pass: 'usr_006',
    },
    {
      id: 'usr_007',
      pass: 'usr_007',
    },
    {
      id: 'usr_008',
      pass: 'usr_008',
    },
    {
      id: 'usr_009',
      pass: 'usr_009',
    },
    {
      id: 'usr_010',
      pass: 'usr_010',
    },
    {
      id: 'usr_011',
      pass: 'usr_011',
    },
    {
      id: 'usr_012',
      pass: 'usr_012',
    },
    {
      id: 'usr_013',
      pass: 'usr_013',
    },
    {
      id: 'usr_014',
      pass: 'usr_014',
    },
    {
      id: 'usr_015',
      pass: 'usr_015',
    },
  ];

  checkUserAuth(id: string, password: string) {
    let user_password = this._AUTH_PASS.filter(
      (i) => i.id === id && !i.deleted,
    );
    if (
      !user_password?.length ||
      user_password?.length > 1 ||
      user_password[0].pass !== password
    ) {
      return false;
    }

    return true;
  }
  
  setUserAuth(id: string, pass: string) {
    this._AUTH_PASS.push({ id, pass });
  }
}
