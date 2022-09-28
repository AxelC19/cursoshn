import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  cargar:boolean=false;
  alumnoEditar:object={};
  upDate:any;
  campos:any[]=[];
  editarFrom:any;

  constructor( private router:Router,private Alumnosservicio:AlumnosService) { }

  agrearAlumnos(){
    this.router.navigate(['/crearAlumnos']);
  }
 

  ngOnInit(): void { 
     this.Alumnosservicio.getAlumnoscurso1().subscribe(resp=>{
            this.campos= resp;
            console.log(this.campos);
      
    })

   
  }

  editAlumnos(campos:any){
    //this.router.navigate(['/editAlumnos/campos.id'])
    this.alumnoEditar=campos;
    
    
       
            

  }
  
  async onEliminarAlumnos(campos:any){
    this.cargar=true;
    alert("Eliminando...")
     const resp =      
     await  this.Alumnosservicio.deleteAlumnos(campos);
     this.cargar=false;
     console.log(resp);
     
  }


}
