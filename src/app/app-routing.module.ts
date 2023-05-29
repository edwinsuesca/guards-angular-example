import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { InicioSesionComponent } from './paginas/inicio-sesion/inicio-sesion.component';
import { InicioLogueadoComponent } from './paginas/inicio-logueado/inicio-logueado.component';
import { vigilarRolGuard } from './guards/vigilar-rol.guard';
import { ProhibidoComponent } from './paginas/prohibido/prohibido.component';
import { vigilarSesionGuard } from './guards/vigilar-sesion.guard';
import { vigilarRutasHijasGuard } from './guards/vigilar-rutas-hijas.guard';

const routes: Routes = [
  {path: '', component: InicioLogueadoComponent, canMatch: [vigilarSesionGuard]},
  {path: '', component: InicioComponent},
  {path: 'iniciar-sesion', component: InicioSesionComponent},
  {
    path: 'administracion', canActivate: [vigilarRolGuard], canActivateChild: [vigilarRutasHijasGuard],
    loadChildren: () => import('./admin/admin.module').then(modulo => modulo.AdminModule)
  },
  {
    path: 'estudiante', canActivate: [vigilarRolGuard],
    loadChildren: () => import('./estudiante/estudiante.module').then(modulo => modulo.EstudianteModule)
  },
  {path: 'no-autorizado', component: ProhibidoComponent},
  {path: "**", redirectTo: "", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
