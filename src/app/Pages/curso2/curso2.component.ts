import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curso2',
  templateUrl: './curso2.component.html',
  styleUrls: ['./curso2.component.css']
})
export class Curso2Component implements OnInit {

  crearAl:any;
   mostrar:boolean= true;
   mostrar2:boolean=false;
   mostrar3:boolean=false;
   mostrar4:boolean=false;
   mostrar5:boolean=false;
   mostrar6:boolean=false;
   mostrar7:boolean=false;
   mostrar8:boolean=false;
   mostrar9:boolean=false;
   mostrar10:boolean=false;
  constructor( 
    
    ) {    
 }

  ngOnInit(): void {
  }
  
  onVer(){
    
    this.mostrar2=false;
    this.mostrar=true;
    this.mostrar3=false;
    
  }
  onVer2(){
    this.mostrar2=true;
    this.mostrar=false;
    this.mostrar3=false;
    
  }
  onVer3(){

    this.mostrar2=false;
    this.mostrar=false;
    this.mostrar3=true;
      }
  onVer4(){
    
    this.mostrar4=true;
    this.mostrar5=false;
    this.mostrar6=false;
    
  }
  onVer5(){
    this.mostrar4=false;
    this.mostrar5=true;
    this.mostrar6=false;
    
  }
  onVer6(){
    
    
    this.mostrar4=false;
    this.mostrar5=false;
    this.mostrar6=true;
    
  }
  onVer7(){
    
    
    this.mostrar7=true;
    this.mostrar8=false;
    this.mostrar9=false;
    this.mostrar10=false;
  }
  onVer8(){
    
    this.mostrar7=false;
    this.mostrar8=true;
    this.mostrar9=false;
    this.mostrar10=false;;
  }
  
  onVer9(){
    
    this.mostrar7=false;
    this.mostrar8=false;
    this.mostrar9=true;
    this.mostrar10=false;
  }

  onVer10(){
    
    this.mostrar7=false;
    this.mostrar8=false;
    this.mostrar9=false;
    this.mostrar10=true;
  }

}
