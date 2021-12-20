import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccederLocalStorageService } from 'src/app/dashboard/services/acceder-local-storage.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();
  constructor(private route: Router) { }
  adminLogeado =JSON.parse(localStorage.getItem('adminLogged')!)
  fullNameAdmin=this.adminLogeado?.fullName || ''
  ngOnInit(): void {
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
  cerrarSesion(){
    Swal.fire({
      icon:'warning',
      title: '¿Estás seguro de cerrar sesión?',
      
      showCancelButton: true,
      confirmButtonText: 'Si',
      
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.route.navigate(['/auth']);
   
        localStorage.clear();
      }
    })
    
  }

}
