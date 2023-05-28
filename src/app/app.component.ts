import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  rol = "";

  constructor(private router:Router){}

  ngOnInit(): void {
    const rol = localStorage.getItem('rol');
    if(rol){
      this.rol = rol
    }
  }

  cerrarSesion = () => {
    this.rol = "";
    localStorage.removeItem('rol');
    this.router.navigate(['/iniciar-sesion'])
  } 
}
