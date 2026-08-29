import { Component } from '@angular/core';
import { ACTIVE_AUTH } from './data/db.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biblio';

  constructor(){
    console.log('====================================');
    console.log(ACTIVE_AUTH);
    console.log('====================================');
  }
}
