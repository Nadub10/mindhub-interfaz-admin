import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthRoutingModule } from '../auth-routing.module';
import { DashboardRoutingModule } from '../../dashboard/dashboard-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class ComponentsModule { }
