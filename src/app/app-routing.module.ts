import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardGuard } from './guards/dashboard.guard';

const routes: Routes = [
{ path: 'auth',
canActivate: [DashboardGuard],
loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
}, 
{ path: 'dashboard',
canActivate: [AuthGuard],
 loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
},
{
  path:'**',
  canActivate: [DashboardGuard],
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
