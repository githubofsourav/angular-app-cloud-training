import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) {}
  ngOnInit() {

  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("Response received!");
        this._router.navigate(['/home'])
      },
      error=>{
        console.log("Exception occurred!");
        this.msg = "Bad credentials. Please enter valid email and password.";
      }
    )
  }

}
