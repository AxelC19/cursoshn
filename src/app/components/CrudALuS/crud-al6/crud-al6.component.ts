import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-crud-al6',
  templateUrl: './crud-al6.component.html',
  styleUrls: ['./crud-al6.component.css']
})
export class CrudAl6Component implements OnInit {

  constructor(private Alu: AlumnosService,private router:Router) { }

  cargar:boolean=false;
  alumnoEditar:object={};
  upDate:any;
  campos:any[]=[];
  editarFrom:any;

  ngOnInit(): void {
    this.Alu.curo6Alu().subscribe((r =>{
    this.campos= r;
    }))
  }

  
onAluAgregar(){
   this.router.navigate(['/agregarALu6'])
}

  editAlumnos(campos:any){
    //this.router.navigate(['/editAlumnos/campos.id'])
    this.alumnoEditar=campos;   
          
            

  }
  
  async onEliminarAlumnos(campos:any){
    this.cargar=true;
    alert("Eliminando...")
     const resp =      
     await  this.Alu.curso6delete(campos);
     this.cargar=false;
     console.log(resp);
     
  }


}