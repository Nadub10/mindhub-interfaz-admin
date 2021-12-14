import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { ComponentsSharedModule } from '../shared/components-shared/components-shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesModule,
    ComponentsModule,
    ComponentsSharedModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class AuthModule { }
