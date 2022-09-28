import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {

  constructor( private routes:Router) { }

  ngOnInit(): void {
  }
  
regrsarLogin(){
  this.routes.navigate(['/login'])
}

}
