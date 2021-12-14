import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardRoutingModule } from '../../dashboard/dashboard-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { AuthRoutingModule } from '../auth-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsSharedModule,
    ComponentsModule,
    DashboardRoutingModule,
    MaterialModule,
    AuthRoutingModule,
    AuthRoutingModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
