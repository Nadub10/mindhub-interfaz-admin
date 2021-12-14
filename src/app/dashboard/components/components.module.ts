import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    FormRegistroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
