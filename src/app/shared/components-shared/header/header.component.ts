import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccederLocalStorageService } from 'src/app/dashboard/services/acceder-local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

}
