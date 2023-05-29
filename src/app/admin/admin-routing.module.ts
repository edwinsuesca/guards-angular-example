import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { RolesComponent } from './roles/roles.component';
import { vigilarSalidaGuard } from '../guards/vigilar-salida.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cursos', component: CursosComponent, 
        //canDeactivate: [(component: CursosComponent) => component.creado],
        canDeactivate: [vigilarSalidaGuard]
      },
      {path: 'roles', component: RolesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
