import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-autenticado',
  templateUrl: './no-autenticado.component.html',
  styleUrls: ['./no-autenticado.component.css']
})
export class NoAutenticadoComponent implements OnInit {

  constructor(private routes:Router) { }

   enviarReg(){
     this.routes.navigate(['/register']);
     
   }
   enviarLogin(){
    this.routes.navigate(['/login']);
   }

  ngOnInit(): void {
  }

}
