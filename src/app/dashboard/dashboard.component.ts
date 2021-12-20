import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  objeto=JSON.parse(localStorage.getItem('adminLogged')!);
nombre1:string = this.objeto.fullName || '';
fin=this.nombre1.indexOf(' ');
nombre=this.nombre1.slice(0,this.fin)
  sideBarOpen=true;
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
