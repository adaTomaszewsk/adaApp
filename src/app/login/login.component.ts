import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  // credentials = {
  //   email: '',
  //   password: ''
  // }
  //
  // registerInfo = '';
  //
  // constructor(
  //   private router: Router,
  //   private authService: AuthService
  // ) {}
  //
  // login() {
  //   this.authService.login(this.credentials)
  //     .then(() => this.router.navigate(['/dashboard']))
  //     .catch(err => console.log(err.message));
  // }
  //
  // register() {
  //   this.authService.register(this.credentials)
  //     .then(() => this.registerInfo = 'ACCOUNT CREATED, PLZ LOGIN IN!')
  //     .catch(err => console.log(err.message));
  // }
}
