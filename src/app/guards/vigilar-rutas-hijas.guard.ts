import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

export const vigilarRutasHijasGuard: CanActivateChildFn | UrlTree = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const urlObjetivo = state.url;
  const rol = verificarRol(urlObjetivo);

  //Permisos para usuarios con rol "Administrador"
  if(rol === "Superadministrador"){
    return true;
  }
  
  if(rol === "Administrador" && urlObjetivo === "/administracion/cursos"){
    return true
  }

  //Redirige a la página de "No autorizado"
  return inject(Router).parseUrl('/no-autorizado');
};

const verificarRol = (url:string): string => {
  return inject(AutenticacionService).verificarRol(url);
}
