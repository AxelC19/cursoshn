import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-crud-al7',
  templateUrl: './crud-al7.component.html',
  styleUrls: ['./crud-al7.component.css']
})
export class CrudAl7Component implements OnInit {

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
   this.router.navigate(['/agregarALu7'])
}

  editAlumnos(campos:any){
    //this.router.navigate(['/editAlumnos/campos.id'])
    this.alumnoEditar=campos;   
          
            

  }
  
  async onEliminarAlumnos(campos:any){
    this.cargar=true;
    alert("Eliminando...")
     const resp =      
     await  this.Alu.curso7delete(campos);
     this.cargar=false;
     console.log(resp);
     
  }


}