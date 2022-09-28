import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AutenticacionService } from '../services/autenticacion.service';


@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {
 
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
      apellido:['', Validators.required],
      identidad:['', Validators.required],
      edad:['', Validators.required],
      sexo:['', Validators.required],
      correo:[''],
      contrasena:[''],
      curso:['', Validators.required],
     })
     this.id = this.aRoute.snapshot.paramMap.get('id')
     
     
     
    }

                
  ngOnInit(): void {
    
  }
   
  onVolver(){
     this.router.navigate(['/lista-Alumnos']);
  }
  agregarAlumnos(){
    this.Enviado=true;
    if (this.crearAl.invalid) {
      return;
      
    }

    const Alumnos: any={
        
        nombre: this.crearAl.value.nombre,
        apellido: this.crearAl.value.apellido,
        identidad: this.crearAl.value.identidad,        
        edad: this.crearAl.value.edad,
        sexo: this.crearAl.value.sexo,
        correo: this.crearAl.value.correo,
        contrasena: this.crearAl.value.contrasena,
        curso: this.crearAl.value.curso,
        fechaActualizacion: new Date(),
        fechaCreacion: new Date(),  
        
    }
    

    this.cargar= true;
    const envio:any = this.firestore.apregarAlumnos(Alumnos).then(()=>{
      this.router.navigate(['/lista-Alumnos'])
      this.toastr.success('AGREGADO CON EXITO', ':D');
    console.log('agregado correctamente :D');
    this.cargar=false;  
   }).catch(error=>{
    this.cargar=false;  
     console.log(error);
     
   })
    
    
  }

  
}
