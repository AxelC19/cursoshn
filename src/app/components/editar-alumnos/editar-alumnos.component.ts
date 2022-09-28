import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})

export class EditarAlumnosComponent implements OnInit,OnChanges {
 
  crearAl:FormGroup;
  l:string[]=[];
  Enviado:boolean=false;
  cargar: boolean=false;
  
  
  @Input() alumno: any={};

  constructor( private router:Router,
               private firestore:AlumnosService,                
               private fb:FormBuilder,
               private toastr: ToastrService,
               private aRoute:ActivatedRoute,    )   
   {        
     this.crearAl = this.fb.group({
      id:['', Validators.required],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      identidad:['', Validators.required],
      edad:['', Validators.required],
      sexo:['', Validators.required],
      correo:[''],
      contrasena:[''],
      curso:['', Validators.required],
     })
     
     
     
    }

                
  ngOnInit(): void {
  
  }
  ngOnChanges() {
      console.log('=> ',this.alumno);
      if(this.alumno && this.alumno['id']){
        this.id?.setValue(this.alumno['id']);
         this.nombre?.setValue(this.alumno['nombre']);
         this.apellido?.setValue(this.alumno['apellido']);
         this.edad?.setValue(this.alumno['edad']);
         this.identidad?.setValue(this.alumno['identidad']);
         this.sexo?.setValue(this.alumno['sexo']),
         this.correo?.setValue(this.alumno['correo']);
         this.contrasena?.setValue(this.alumno['contrasena']);
         this.curso?.setValue(this.alumno['curso']);
      }
      
  }
   
  
  editarAlumnos(){
    this.Enviado=true;
    if (this.crearAl.invalid) {
      return;
      
    }
    const Alumnos: any={
        id: this.crearAl.value.id,
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
    const envio:any = this.firestore.editarAlumnos(Alumnos).then(()=>{
      
      this.toastr.success('EDITADO EXISTOSAMENTE', '');
    console.log('agregado correctamente :D','$');
    this.cargar=false;  
   }).catch(error=>{
    this.cargar=false;  
     console.log(error);
     
   })
    
    
  }


get id() { return this.crearAl.get('id') }; 
get nombre() { return this.crearAl.get('nombre') };
get apellido() { return this.crearAl.get('apellido') }
get identidad() { return this.crearAl.get('identidad') }
get edad() { return this.crearAl.get('edad') } 
get sexo() { return this.crearAl.get('sexo') }
get correo() { return this.crearAl.get('correo') }
get contrasena() { return this.crearAl.get('contrasena') }
get curso() { return this.crearAl.get('curso') }
}
