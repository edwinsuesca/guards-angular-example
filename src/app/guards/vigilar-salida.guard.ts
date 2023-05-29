import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface AlSalir {
  respuestaSalida: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const vigilarSalidaGuard: CanDeactivateFn<AlSalir> = (component:AlSalir) => {
  const respuestaSalida = component.respuestaSalida();
  return respuestaSalida ? respuestaSalida : false;
};
