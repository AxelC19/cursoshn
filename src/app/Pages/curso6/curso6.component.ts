import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso6',
  templateUrl: './curso6.component.html',
  styleUrls: ['./curso6.component.css']
})
export class Curso6Component implements OnInit {

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
   //execel
   exemostrar:boolean= true;
   exemostrar2:boolean=false;
   exemostrar3:boolean=false;
   exemostrar4:boolean=false;
   exemostrar5:boolean=false;
   exemostrar6:boolean=false;
   exemostrar7:boolean=false;
   exemostrar8:boolean=false;
   exemostrar9:boolean=false;
   exemostrar10:boolean=false;
   //powerpoint
   pomostrar:boolean= true;
   pomostrar2:boolean=false;
   pomostrar3:boolean=false;
   pomostrar4:boolean=false;
   pomostrar5:boolean=false;
   pomostrar6:boolean=false;
   

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
  //execel
  exeonVer(){
    
    this.exemostrar2=false;
    this.exemostrar=true;
    this.exemostrar3=false;
    
  }
  exeonVer2(){
    this.exemostrar2=true;
    this.exemostrar=false;
    this.exemostrar3=false;
    
  }
  exeonVer3(){

    this.exemostrar2=false;
    this.exemostrar=false;
    this.exemostrar3=true;
      }
  exeonVer4(){
    
    this.exemostrar4=true;
    this.exemostrar5=false;
    this.exemostrar6=false;
    
  }
  exeonVer5(){
    this.exemostrar4=false;
    this.exemostrar5=true;
    this.exemostrar6=false;
    
  }
  exeonVer6(){
    
    
    this.exemostrar4=false;
    this.exemostrar5=false;
    this.exemostrar6=true;
    
  }
  exeonVer7(){
    
    
    this.exemostrar7=true;
    this.exemostrar8=false;
    this.exemostrar9=false;
    this.exemostrar10=false;
  }
  exeonVer8(){
    
    this.exemostrar7=false;
    this.exemostrar8=true;
    this.exemostrar9=false;
    this.exemostrar10=false;;
  }
  
  exeonVer9(){
    
    this.exemostrar7=false;
    this.exemostrar8=false;
    this.exemostrar9=true;
    this.exemostrar10=false;
  }

  exeonVer10(){
    
    this.exemostrar7=false;
    this.exemostrar8=false;
    this.exemostrar9=false;
    this.exemostrar10=true;
  }
//powerpoint
poonVer(){
    
  this.pomostrar2=false;
  this.pomostrar=true;
  this.pomostrar3=false;
  
}
poonVer2(){
  this.pomostrar2=true;
  this.pomostrar=false;
  this.pomostrar3=false;
  
}
poonVer3(){

  this.pomostrar2=false;
  this.pomostrar=false;
  this.pomostrar3=true;
    }
poonVer4(){
  
  this.pomostrar4=true;
  this.pomostrar5=false;
  this.pomostrar6=false;
  
}
poonVer5(){
  this.pomostrar4=false;
  this.pomostrar5=true;
  this.pomostrar6=false;
  
}
poonVer6(){
  
  
  this.pomostrar4=false;
  this.pomostrar5=false;
  this.pomostrar6=true;
  
}
}
