import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  msg: string='';
  user = new User();
  constructor(private _service: RegistrationService, private _router: Router) {}
  ngOnInit() {
  }
  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("Response received!");
        this.msg="Registration successful!!!";
        setTimeout(() => {
          this._router.navigate(['']); 
        }, 5000);
      },
      error=>{
        console.log("Exception occurred.");
        this.msg = error.msg;
      }
    )
  }
}
