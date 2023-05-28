import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'cursos', component: CursosComponent},
      {path: 'roles', component: RolesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
