import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }
  readonly LLAVE_SESION = 'rol';
  public urlUsuarioIntentaAcceder = '';

  iniciarSesion(rol:string) {
    localStorage.setItem(this.LLAVE_SESION, rol)
  }

  cerrarSesion() {
    localStorage.removeItem(this.LLAVE_SESION);
  }

  verificarRol(url: string): string {
    const rol = localStorage.getItem(this.LLAVE_SESION);
    if (!rol) {
      this.urlUsuarioIntentaAcceder = url;
      return "";
    }
    return rol;
  }

  verificarSesion(): boolean {
    const rol = localStorage.getItem(this.LLAVE_SESION);
    if (!rol) {
      return false;
    }
    return true;
  }
}

