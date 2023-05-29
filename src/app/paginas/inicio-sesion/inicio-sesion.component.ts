import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {

  constructor(private autenticacionService:AutenticacionService, private router:Router){}

  iniciarSesion(rol:string) {
    this.autenticacionService.iniciarSesion(rol);
  }
}
