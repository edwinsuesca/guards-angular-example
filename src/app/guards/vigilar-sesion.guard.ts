import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

export const vigilarSesionGuard: CanMatchFn = () => {
  const sesion = verificarSesion();
  if(sesion){
    return true;
  }
  return false;
};

const verificarSesion = (): boolean => {
  return inject(AutenticacionService).verificarSesion();
}
