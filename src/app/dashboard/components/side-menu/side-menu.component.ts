import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from'sweetalert2';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){

    Swal.fire({
      title: '¿Estas seguro de cerrar sesión?',
      
      showCancelButton: true,
      confirmButtonText: 'Si',
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ruta.navigate(['/auth']);
   
        localStorage.clear();
      } 
    })
    
  }
}

