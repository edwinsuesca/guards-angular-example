import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { InicioSesionComponent } from './paginas/inicio-sesion/inicio-sesion.component';
import { InicioLogueadoComponent } from './paginas/inicio-logueado/inicio-logueado.component';
import { ProhibidoComponent } from './paginas/prohibido/prohibido.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    InicioLogueadoComponent,
    ProhibidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
