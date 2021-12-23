import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Route, Router } from '@angular/router';
import Swal from'sweetalert2';
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
          
          Swal.fire({
            icon: 'error',
            title: 'Esta web es sólo para Administradores!',
            text: 'Ante cualquier error comunicate con soporte@todoit.com ',
            
          })
        }
        
      },
      error=>{
        formDirective.resetForm();
          this.loginForm.reset();
          Swal.fire({
            icon: 'error',
            title: error.error,
            text:  'Ante cualquier error comunicate con soporte@todoit.com ',
            
          })
        console.log(error)
      }
      
    )
    //
    
   }
}
