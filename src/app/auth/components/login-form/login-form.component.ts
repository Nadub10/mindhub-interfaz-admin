import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide = true;
 
   
  loginForm = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
     password: new FormControl('',Validators.required),
     
   }); 
}
