import { Component, OnInit, Inject } from '@angular/core';
import { CrearUsuarioService } from '../../services/crear-usuario.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Usuario } from 'src/app/shared/interfaces/usuario';
import { Vehicle } from '../../../shared/interfaces/vehicle';
import { Rol } from 'src/app/shared/interfaces/rol';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccederLocalStorageService } from '../../services/acceder-local-storage.service';

@Component({
  selector: 'app-form-editar-user',
  templateUrl: './form-editar-user.component.html',
  styleUrls: ['./form-editar-user.component.scss']
})
export class FormEditarUserComponent implements OnInit {
  vacio:string=' '
  datosUsuario:Usuario;
  boton:string;

  hide:boolean=true;
  hidePass:boolean=true;
  hideRol:boolean=true;
  hideName:boolean=true;
  hideEmail:boolean=true;
  hideAddress:boolean=true;
  hideCellPhone:boolean=true;
  hideVehicle:boolean=true;

  rolUsuario:string='cliente';
  tipoVehiculo:string='moto'
  user!:Usuario;

  constructor(private crearUsuario:CrearUsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: {item:Usuario,boton:string},
    private accederLocalStorage:AccederLocalStorageService) {
      this.datosUsuario=data.item;
      this.boton=data.boton
     }

  ngOnInit(): void {
  
  }
  
  registerForm = new FormGroup({
    fullName: new FormControl('')
    ,
      email: new FormControl(''),
      password: new FormControl(''),
      address: new FormControl(''),
      cellPhone: new FormControl(''),
      rolName: new FormControl(''),
      vehicleName: new FormControl(''),
    });
    
    //**ESTA FUNCION SOLO LE PASA EL OBJETO DEL USUARIO AL SERVICIO */
    submitForm(formDirective?:FormGroupDirective){
      
      let u:Usuario = this.modificarObjetoUsuario(this.boton);
      //LA FUNCION SOLO TIENE Q HACER EL SET USER
     this.crearUsuario.setUser(u);
      
     this.crearUsuario.crearUsuario(this.boton);
     
     if(formDirective!== undefined){
      formDirective.resetForm();
      
      this.registerForm.reset();
     }
      
    }
    clearForm(formDirective:FormGroupDirective){
      formDirective.resetForm();
      
      this.registerForm.reset();
    }
    
    modificarObjetoUsuario(accion:string):Usuario{
      return this.user={
        id:this.datosUsuario.id,
        fullName:this.registerForm.value.fullName===''?this.datosUsuario.fullName:this.registerForm.value.fullName,
        email:this.registerForm.value.email===''?this.datosUsuario.email:this.registerForm.value.email,
        password:this.registerForm.value.password===''?this.datosUsuario.password:this.registerForm.value.password,
        address:this.registerForm.value.address===''?this.datosUsuario.address:this.registerForm.value.address,
        cellPhone:this.registerForm.value.cellPhone===''?this.datosUsuario.cellPhone:this.registerForm.value.cellPhone,
        isAccepted:accion==='eliminar'?false:true,
        isDeleted:accion==='eliminar'?true:false,
        vehicle:this.registerForm.value.vehicleName==='' ? this.alternativasVehiculo(): this.vehiculo(),
        rol:this.registerForm.value.rolName===''? this.datosUsuario.rol:this.defineRol()
      }
    }
    idUsuario(id:number ,accion:string){
      return accion==='crear'?0:id;
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
      if(this.rolUsuario==='cadete' || this.datosUsuario.rol.id===2 ){
        return {
          id:this.idVehiculo(this.registerForm.value.vehicleName),
          name:this.registerForm.value.vehicleName,
          isDeleted:0
        }
      }
      return null
    }

    alternativasVehiculo():Vehicle|null{
      if(this.datosUsuario.rol.id !== 2 && this.registerForm.value.rolName !== 'cadete'){
        return null
      }
      
      else if(this.datosUsuario.rol.id ===2 && (this.registerForm.value.rolName === 'admin' ||this.registerForm.value.rolName === 'cliente') ){
        return null
      }
      else {
        return this.datosUsuario.vehicle
      }
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
