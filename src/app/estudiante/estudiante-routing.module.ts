import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'calificaciones', component: CalificacionesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
