import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-cruds-instructor',
  templateUrl: './cruds-instructor.component.html',
  styleUrls: ['./cruds-instructor.component.css']
})

export class CrudsInstructorComponent implements OnInit {

  constructor(private Alu: AlumnosService,private router:Router) { }

  cargar:boolean=false;
  alumnoEditar:object={};
  upDate:any;
  campos:any[]=[];
  editarFrom:any;

  ngOnInit(): void {
    this.Alu.mostrarinstructor().subscribe((r =>{
    this.campos= r;
    }))
  }

  
onAluAgregar(){
   this.router.navigate(['/tablaInstructoragregar'])
}

  editAlumnos(campos:any){
    //this.router.navigate(['/editAlumnos/campos.id'])
    this.alumnoEditar=campos;   
          
            

  }
  
  async onEliminarAlumnos(campos:any){
    this.cargar=true;
    alert("Eliminando...")
     const resp =      
     await  this.Alu.deleteinstructor(campos);
     this.cargar=false;
     console.log(resp);
     
  }


}
