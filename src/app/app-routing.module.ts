import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { InicioSesionComponent } from './paginas/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'iniciar-sesion', component: InicioSesionComponent},
  {
    path: 'administracion',
    loadChildren: () => import('./admin/admin.module').then(modulo => modulo.AdminModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then(modulo => modulo.EstudianteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
