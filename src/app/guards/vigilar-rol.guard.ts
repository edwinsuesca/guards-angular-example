import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

export const vigilarRolGuard: CanActivateFn | UrlTree = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const urlObjetivo = route.url.join("");
  const rol = verificarRol(urlObjetivo);

  //Permisos para usuarios con rol "Administrador"
  if((rol === "Administrador" || rol === "Superadministrador") && urlObjetivo === "administracion"){
    return true
  }

  //Permisos para usuarios con rol "Estudiante"
  if(rol === "Estudiante" && urlObjetivo === "estudiante"){
    return true
  }

  //Redirige a la página de "No autorizado"
  return inject(Router).parseUrl('/no-autorizado');
};

const verificarRol = (url:string): string => {
  return inject(AutenticacionService).verificarRol(url);
}