import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-curso1',
  templateUrl: './curso1.component.html',
  styleUrls: ['./curso1.component.css']
})
export class Curso1Component implements OnInit {
  crearAl:any;
  intros:boolean=true
  mostrar:boolean= false;
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
 intro(){
  this.intros=true
  this.mostrar2=false;
  this.mostrar=false;
  this.mostrar3=false;
 }
 onVer(){
  this.intros=false
   this.mostrar2=false;
   this.mostrar=true;
   this.mostrar3=false;
   
 }
 onVer2(){
  this.intros=false
   this.mostrar2=true;
   this.mostrar=false;
   this.mostrar3=false;
   
 }
 onVer3(){
  this.intros=false
   this.mostrar2=false;
   this.mostrar=false;
   this.mostrar3=true;
     }
 onVer4(){
  this.intros=false
   this.mostrar4=true;
   this.mostrar5=false;
   this.mostrar6=false;
   
 }
 onVer5(){
  this.intros=false
   this.mostrar4=false;
   this.mostrar5=true;
   this.mostrar6=false;
   
 }
 onVer6(){
  this.intros=false   
   this.mostrar4=false;
   this.mostrar5=false;
   this.mostrar6=true;
   
 }
 onVer7(){
  this.intros=false   
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
