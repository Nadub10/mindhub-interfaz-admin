import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { ComponentsSharedModule } from '../shared/components-shared/components-shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogServiceService } from './services/dialog-service.service';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({ 
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PagesModule,
    ComponentsModule,
    ComponentsSharedModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers:[DialogServiceService]
})
export class DashboardModule { }
