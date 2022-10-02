import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-matricular-alu3',
  templateUrl: './matricular-alu3.component.html',
  styleUrls: ['./matricular-alu3.component.css']
})
export class MatricularAlu3Component implements OnInit {

  crearAl:FormGroup;
  l:string[]=[];
  Enviado:boolean=false;
  cargar: boolean=false;
  id:string | null= '';

  constructor( private router:Router,
               private firestore:AlumnosService,                
               private fb:FormBuilder,
               private toastr: ToastrService,
               private aRoute:ActivatedRoute,
               private auten:AutenticacionService    )   
   {        
     this.crearAl = this.fb.group({
      nombre:['', Validators.required],
      segundonombre:['', Validators.required],
      apellido:['', Validators.required],
      segundoapellido:['', Validators.required],
      identidad:['', Validators.required],
      edad:['', Validators.required],
      sexo:['', Validators.required],
      correo:['', Validators.required],                
      curso:['Negocio electrónico global'],
     })
     this.id = this.aRoute.snapshot.paramMap.get('id')
     
     
     
    }

                
  ngOnInit(): void {
    
  }
   
  
  agregarAlumnos(){
    this.Enviado=true;
    if (this.crearAl.invalid) {
      return;
      
    }

    const Alumnos: any={
        
        nombre: this.crearAl.value.nombre,
        segundonombre: this.crearAl.value.segundonombre,
        apellido: this.crearAl.value.apellido,
        segundoapellido: this.crearAl.value.segundoapellido,
        identidad: this.crearAl.value.identidad,        
        edad: this.crearAl.value.edad,
        sexo: this.crearAl.value.sexo,
        correo: this.crearAl.value.correo,        
        curso: this.crearAl.value.curso,        
        fechaActualizacion: new Date(),
        fechaCreacion: new Date(),  
        
    }
    

    this.cargar= true;
    const envio:any = this.firestore.curso3AluAgregar(Alumnos).then(()=>{
      
      this.toastr.success('AGREGADO CON EXITO', ':D');
    console.log('agregado correctamente :D');
    this.cargar=false;  
   }).catch(error=>{
    this.cargar=false;  
     console.log(error);
     
   })
    
    
  }

}
