import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService:LoginService,
              private ruta:Router) { }

  ngOnInit(): void {
  }
  hide = true;
 
   
  loginForm = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
     password: new FormControl('',Validators.required),
     
   }); 

   submitForm(formDirective:FormGroupDirective){
  
    this.loginService.loginUsuario(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe(
      resp=>{
        if(resp.rol?.id===1){
          localStorage.setItem('adminLogged',JSON.stringify(resp));
          formDirective.resetForm();
          this.loginForm.reset();
          this.ruta.navigate(['dashboard'])
        }
        else{
          formDirective.resetForm();
          this.loginForm.reset();
          alert('Esta web es para admin')
          /* const config = new MatSnackBarConfig();
          config.panelClass = ['mensaje-error'];
          config.duration = 4000;
  
          this.snackBar.open('Esta web es solo para cadetes!',"OK",config); */
        }
        
      },
      error=>{
        formDirective.resetForm();
          this.loginForm.reset();
          alert(error.error)
          /* const config = new MatSnackBarConfig();
          config.panelClass = ['mensaje-error'];
          config.duration = 4000;
  
          this.snackBar.open(error.error,"OK",config); */
        
        console.log(error)
      }
      
    )
    //
    
   }
}
