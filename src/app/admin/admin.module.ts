import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { RolesComponent } from './roles/roles.component';


@NgModule({
  declarations: [
    CursosComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule
  ]
})
export class AdminModule { }
