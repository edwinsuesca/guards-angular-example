import { Component } from '@angular/core';
import { Observable, first } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent{
  nombreCurso = "";
  creado = false;
  
  constructor(){}

  establecerNombreCurso = (input:any) => {
    this.nombreCurso = input.target.value;
  }

  crearCurso = () => {
    if(this.nombreCurso){
      alert(`Curso "${this.nombreCurso}" creado.`);
      this.creado = true;
    }
  }
}
