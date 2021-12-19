import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    DashboardRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class ComponentsSharedModule { }
