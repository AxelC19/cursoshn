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
import { CrudAl1Component } from './CrudALuS/crud-al1/crud-al1.component';
import { CrudAl2Component } from './CrudALuS/crud-al2/crud-al2.component';

import { CrudAl4Component } from './CrudALuS/crud-al4/crud-al4.component';
import { CrudAl5Component } from './CrudALuS/crud-al5/crud-al5.component';
import { CrudAl6Component } from './CrudALuS/crud-al6/crud-al6.component';
import { CrudAl7Component } from './CrudALuS/crud-al7/crud-al7.component';
import { ResecionCursosAdComponent } from './CrudALuS/resecion-cursos-ad/resecion-cursos-ad.component';
import { EdiAl1Component } from './CrudALuS/editarALuCrud/edi-al1/edi-al1.component';
import { EdiAl2Component } from './CrudALuS/editarALuCrud/edi-al2/edi-al2.component';
import { EdiAl3Component } from './CrudALuS/editarALuCrud/edi-al3/edi-al3.component';
import { EdiAl4Component } from './CrudALuS/editarALuCrud/edi-al4/edi-al4.component';
import { EdiAl5Component } from './CrudALuS/editarALuCrud/edi-al5/edi-al5.component';
import { EdiAl6Component } from './CrudALuS/editarALuCrud/edi-al6/edi-al6.component';
import { EdiAl7Component } from './CrudALuS/editarALuCrud/edi-al7/edi-al7.component';
import { CrudsInstructorComponent } from '../components/CrudInstruc/cruds-instructor/cruds-instructor.component';
import { EdiInstrComponent } from './CrudInstruc/edi-instr/edi-instr.component';
import { AgregarInstrComponent } from './CrudInstruc/agregar-instr/agregar-instr.component';








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
    CrudAl1Component,
    CrudAl2Component,
    
    CrudAl4Component,
    CrudAl5Component,
    CrudAl6Component,
    CrudAl7Component,
    ResecionCursosAdComponent,
    EdiAl1Component,
    EdiAl2Component,
    EdiAl3Component,
    EdiAl4Component,
    EdiAl5Component,
    EdiAl6Component,
    EdiAl7Component,
    CrudsInstructorComponent,
    EdiInstrComponent,
    AgregarInstrComponent,
    
    
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
    CrudAl1Component,
    CrudAl2Component,
    
    CrudAl4Component,
    CrudAl5Component,
    CrudAl6Component,
    CrudAl7Component,
    ResecionCursosAdComponent,
    EdiAl1Component,
    EdiAl2Component,
    EdiAl3Component,
    EdiAl4Component,
    EdiAl5Component,
    EdiAl6Component,
    EdiAl7Component,
    

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    

  ]
})
export class SeccionModule { }
