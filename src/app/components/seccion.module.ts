import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NoAutenticadoComponent } from './no-autenticado/no-autenticado.component';
import { ModalComponent } from './modal/modal.component';
import { FormularioRegitrosComponent } from './formulario-regitros/formulario-regitros.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CrearAlumnosComponent } from './crear-alumnos/crear-alumnos.component';
import {EditarAlumnosComponent} from './editar-alumnos/editar-alumnos.component'
import { BannerComponent } from './banner/banner.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { MatricularAluComponent } from './matriculasCursos/Matricular-alu/MatricularAlu.component';
import { MatricularAlu2Component } from './matriculasCursos/matricular-alu2/matricular-alu2.component';
import { MatricularAlu3Component } from './matriculasCursos/matricular-alu3/matricular-alu3.component';
import { MatricularAlu4Component } from './matriculasCursos/matricular-alu4/matricular-alu4.component';
import { MatricularAlu5Component } from './matriculasCursos/matricular-alu5/matricular-alu5.component';
import { MatricularAlu6Component } from './matriculasCursos/matricular-alu6/matricular-alu6.component';
import { MatricularAlu7Component } from './matriculasCursos/matricular-alu7/matricular-alu7.component';








@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegistroComponent,
    NoAutenticadoComponent,
    ModalComponent,
    FormularioRegitrosComponent,
    ListaAlumnosComponent,
    CrearAlumnosComponent,
    BannerComponent,
    EditarAlumnosComponent,
    RecuperarContrasenaComponent,
    MatricularAluComponent,
    MatricularAlu2Component,
    MatricularAlu3Component,
    MatricularAlu4Component,
    MatricularAlu5Component,
    MatricularAlu6Component,
    MatricularAlu7Component,
    
    
  ],
  exports:[
    MainComponent,
    LoginComponent,
    RegistroComponent,
    NoAutenticadoComponent,
    ModalComponent,
    FormularioRegitrosComponent,
    ListaAlumnosComponent,
    RecuperarContrasenaComponent,
    MatricularAluComponent,
    MatricularAlu2Component,
    MatricularAlu3Component,
    MatricularAlu4Component,
    MatricularAlu5Component,
    MatricularAlu6Component,
    MatricularAlu7Component,
    

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    

  ]
})
export class SeccionModule { }
