import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-login-master',
  templateUrl: './login-master.component.html',
  styleUrls: ['./login-master.component.css']
})
export class LoginMasterComponent implements OnInit {
 
  campos:any[]=[];  
  campos2:any[]=[];
  campos3:any[]=[];
  campos4:any[]=[];
  campos5:any[]=[];
  campos6:any[]=[];
  campos7:any[]=[];
  mostrar:boolean=false;

  constructor( private Alumnosservicio:AlumnosService ) { }

  ngOnInit(): void {
    
    this.Alumnosservicio.curso1Alu().subscribe(resp=>{
      this.campos= resp;
      console.log(this.campos);
    if (this.campos.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo2Alu().subscribe(resp=>{
      this.campos2= resp;
      console.log(this.campos2);
    if (this.campos2.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo3Alu().subscribe(resp=>{
      this.campos3= resp;
      console.log(this.campos);
    if (this.campos3.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo4Alu().subscribe(resp=>{
      this.campos4= resp;
      console.log(this.campos);
    if (this.campos4.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo5Alu().subscribe(resp=>{
      this.campos5= resp;
      console.log(this.campos);
    if (this.campos5.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo6Alu().subscribe(resp=>{
      this.campos6= resp;
      console.log(this.campos);
    if (this.campos6.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo7Alu().subscribe(resp=>{
      this.campos7= resp;
      console.log(this.campos);
    if (this.campos7.length === 0)  {
       this.mostrar=true;
    }})

    

   



  }

}
