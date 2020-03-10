import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  error = false;
  credentials = {username: '', password: ''};

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    if (this.credentials.username && this.credentials.password) {
/*      this.app.authenticate(credentials).subscribe(() => {
        console.log("User is logged in");
        this.router.navigateByUrl('/');
      });
    }
*/    this.authService.login(this.credentials, () => {
        this.router.navigateByUrl('/');
      });
    }
    return false;
  }

}
