import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from 'src/app/components/services/autenticacion.service';

import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-curso1',
  templateUrl: './curso1.component.html',
  styleUrls: ['./curso1.component.css']
})
export class Curso1Component implements OnInit {
  crearAl:any;
   mostrar:boolean= true;
   mostrar2:boolean=false;
   mostrar3:boolean=false;
  constructor(private autenticarce:AutenticacionService , 
    private router:Router, 
    ) {    
 }
  ngOnInit(): void {
  }
  onClick(){
    //promesa
    this.autenticarce.logout()
    .then(()=>{
      this.router.navigate(['/noautenticado']);
    })
    .catch(error=>{      console.log(error);} ) ; 
  };

  onVer(){
    this.mostrar2=false;
    this.mostrar=true;
    this.mostrar3=false;
  }
  onVer2(){
    this.mostrar=false;
    this.mostrar2=true;
    this.mostrar3=false;
  }
  onVer3(){
    this.mostrar= false;
    this.mostrar2=false;
    this.mostrar3=true;
  }
 


}
