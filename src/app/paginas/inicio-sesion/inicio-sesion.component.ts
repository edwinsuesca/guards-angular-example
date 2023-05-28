import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {
  iniciarSesion(rol:string){
    const sesion = localStorage.setItem('rol', rol)
    window.location.href = "/"
  }
}
