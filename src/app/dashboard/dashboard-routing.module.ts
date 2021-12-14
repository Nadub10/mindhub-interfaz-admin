import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ViajesComponent } from './pages/viajes/viajes.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ListasComponent } from './pages/listas/listas.component';

const routes: Routes = [
  { path: '', 
  component: DashboardComponent,
  children:[
    {
      path:'',
      component: InicioComponent
    },
    {
      path:'registro',
      component:RegistroComponent
    },
    {
      path:'viajes',
      component:ViajesComponent
    },
    {
      path:'historial',
      component:HistorialComponent
    },
    {
      path:'listas',
      component:ListasComponent
    }
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
