import { Component } from '@angular/core';
import { Observable, first } from 'rxjs';
import { AlSalir } from 'src/app/guards/vigilar-salida.guard';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements AlSalir{
  nombreCurso = "";
  creado = false;
  
  constructor(){}

  respuestaSalida = (): boolean | Observable<boolean> | Promise<boolean> => {
    if (!this.nombreCurso) {
      return true;
    }
/*     const salir = confirm('No has guardado cambios ¿Seguro deseas salir?');
    return salir */
    
    return new Observable<boolean>(observer => {
      const salir = confirm('No has guardado cambios ¿Seguro deseas salir?');
      observer.next(salir);
      observer.complete();
    });
  }

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
