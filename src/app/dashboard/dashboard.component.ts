import { Component, OnInit } from '@angular/core';
import { AccederLocalStorageService } from './services/acceder-local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private accederLocalStorage:AccederLocalStorageService) { }

  ngOnInit(): void {
  }
  nombre:string=this.accederLocalStorage.nombreAdmin;
  sideBarOpen=true;
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
