import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormGroupDirective } from '@angular/forms';
import { CrearUsuarioService } from '../../services/crear-usuario.service';
import { Usuario } from '../../../shared/interfaces/usuario';
import { Vehicle } from '../../../shared/interfaces/vehicle';
import { Rol } from 'src/app/shared/interfaces/rol';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent implements OnInit {

  constructor(private crearUsuario:CrearUsuarioService) { }

  ngOnInit(): void {
  
  }
  hide:boolean=true;
  rolUsuario:string='cliente';
  tipoVehiculo:string='moto'
  registerForm = new FormGroup({
    fullName: new FormControl('',
      [Validators.required,])
    ,
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      cellPhone: new FormControl('',Validators.required),
      rolName: new FormControl('',Validators.required),
      vehicleName: new FormControl(''),
    });
    user!:Usuario;
    //**ESTA FUNCION SOLO LE PASA EL OBJETO DEL USUARIO AL SERVICIO */
    submitForm(formDirective:FormGroupDirective){
      
      let u:Usuario = this.crearObjetoUsuario();
      
     this.crearUsuario.setUser(u);
      
     this.crearUsuario.crearUsuario('crear');
     
      formDirective.resetForm();
      
      this.registerForm.reset();
    }
    clearForm(formDirective:FormGroupDirective){
      formDirective.resetForm();
      
      this.registerForm.reset();
    }
    
    crearObjetoUsuario():Usuario{
      return this.user={
        id:0,
        fullName:this.registerForm.value.fullName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        address:this.registerForm.value.address,
        cellPhone:this.registerForm.value.cellPhone,
        isAccepted:true,
        isDeleted:false,
        vehicle:this.vehiculo(),
        rol:this.defineRol()
      }
    }
    idUsuario(id:number ,accion:string){
      return accion==='crear'?0:id;
    }
    aceptarUser(accion:string){
      return accion==='crear' || accion==='modificar' ?true:false;
    }
  
    borrarUser(accion:string){
      return accion==='eliminar'?true:false;
    }

    idVehiculo(vehicleName:string):number{
      switch(vehicleName.toLowerCase()){
        case 'bicicleta':
          return 1
        case 'moto':
          return 2
        default:
          return 3
      }
    }
  
    vehiculo():Vehicle|null{
      if(this.rolUsuario==='cadete'){
        return {
          id:this.idVehiculo(this.registerForm.value.vehicleName),
          name:this.registerForm.value.vehicleName,
          isDeleted:0
        }
      }
      return null
    }
    defineRol():Rol{
      if(this.rolUsuario==='cadete'){
        return {
          id:2,
          name:this.registerForm.value.rolName,
          isDeleted:0
        }
      }
      else if(this.rolUsuario==='admin'){
        return {
          id:1,
          name:this.registerForm.value.rolName,
          isDeleted:0
        }
      }
      else{
        return {
          id:3,
          name:this.registerForm.value.rolName,
          isDeleted:0
        }
      }
      
    }
      
}
