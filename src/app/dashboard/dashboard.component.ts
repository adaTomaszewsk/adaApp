import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CurrentuserService} from '../services/currentuser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private currentuser: CurrentuserService) {
  }

  ngOnInit() {
    this.currentuser.userSubject.subscribe(
      (uid: string) => {
        console.log(uid);
        console.log('cokolwiek');
      }
    );
  }

}
