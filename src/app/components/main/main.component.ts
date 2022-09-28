import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   mostrar:boolean=false;  
   ocultar:boolean=true;
  
  constructor(private autenticarce:AutenticacionService, private router:Router) { }

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
  mostrarTarjeta(){
     this.mostrar=true;
  }
  
  onMostrarInformacion(){
     this.ocultar=false;
  }
  onVolverIncio(){
    this.mostrar=false;
    this.ocultar=true;
  }
   login(){
    this.router.navigate(['/login']);
   }
  curso1(){
    this.router.navigate(['/curso1']);
  }
  curso2(){
    this.router.navigate(['/curso2']);
  }
  curso3(){
    this.router.navigate(['/curso3']);
  }
  curso4(){
    this.router.navigate(['/curso4']);
  }
  curso5(){
    this.router.navigate(['/curso5']);
  }
  curso6(){
    this.router.navigate(['/curso6']);
  }
  curso7(){
    this.router.navigate(['/curso7']);
  }
  curso8(){
    this.router.navigate(['/curso8']);
  }
 
}
