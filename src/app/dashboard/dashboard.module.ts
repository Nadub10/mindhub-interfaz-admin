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
import { TraerViajesService } from './services/traer-viajes.service';
import { GetTravelsService } from './services/get-travels.service';
import { DialogServiceService } from './services/dialog-service.service';

@NgModule({
  declarations: [
    DashboardComponent
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
    ReactiveFormsModule
  ],
  providers:[DialogServiceService]
})
export class DashboardModule { }
