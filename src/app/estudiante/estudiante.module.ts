import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';


@NgModule({
  declarations: [
    CalificacionesComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
