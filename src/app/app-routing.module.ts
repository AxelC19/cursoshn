import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegistroComponent } from './components/registro/registro.component';
import { canActivate, redirectUnauthorizedTo  } from '@angular/fire/auth-guard'; //bloqueo de los usarios  firebase
import { NoAutenticadoComponent } from './components/no-autenticado/no-autenticado.component';
import { Curso1Component } from './Pages/curso1/curso1.component';
import { Curso2Component } from './Pages/curso2/curso2.component';
import { Curso3Component } from './Pages/curso3/curso3.component';
import { Curso4Component } from './Pages/curso4/curso4.component';
import { Curso6Component } from './Pages/curso6/curso6.component';
import { Curso5Component } from './Pages/curso5/curso5.component';
import { Curso7Component } from './Pages/curso7/curso7.component';
import { Curso8Component } from './Pages/curso8/curso8.component';
import { map } from 'rxjs/operators';
import { LoginMasterComponent } from './Pages/login-master/login-master.component';
import { FormularioRegitrosComponent } from './components/formulario-regitros/formulario-regitros.component';
import { AdministracionComponent } from './Pages/administracion/administracion.component';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { CrudAl1Component } from './components/CrudALuS/crud-al1/crud-al1.component';
import { CrudAl2Component } from './components/CrudALuS/crud-al2/crud-al2.component';
import { CrudAl3Component } from './components/CrudALuS/crud-al3/crud-al3.component';
import { CrudAl4Component } from './components/CrudALuS/crud-al4/crud-al4.component';
import { CrudAl5Component } from './components/CrudALuS/crud-al5/crud-al5.component';
import { CrudAl6Component } from './components/CrudALuS/crud-al6/crud-al6.component';
import { CrudAl7Component } from './components/CrudALuS/crud-al7/crud-al7.component';
import { ResecionCursosAdComponent } from './components/CrudALuS/resecion-cursos-ad/resecion-cursos-ad.component';
import { MatricularAlu2Component } from './components/matriculasCursos/matricular-alu2/matricular-alu2.component';
import { MatricularAlu3Component } from './components/matriculasCursos/matricular-alu3/matricular-alu3.component';
import { MatricularAlu4Component } from './components/matriculasCursos/matricular-alu4/matricular-alu4.component';
import { MatricularAluComponent } from './components/matriculasCursos/Matricular-alu/MatricularAlu.component';
import { MatricularAlu5Component } from './components/matriculasCursos/matricular-alu5/matricular-alu5.component';
import { MatricularAlu6Component } from './components/matriculasCursos/matricular-alu6/matricular-alu6.component';
import { MatricularAlu7Component } from './components/matriculasCursos/matricular-alu7/matricular-alu7.component';
import { CrudsInstructorComponent } from './components/CrudInstruc/cruds-instructor/cruds-instructor.component';
import { EdiInstrComponent } from './components/CrudInstruc/edi-instr/edi-instr.component';
import { AgregarInstrComponent } from './components/CrudInstruc/agregar-instr/agregar-instr.component';

//admin
const AdminAu: string='nvzUG76SR0W0cLtUbDC2vsbenwf1';
//profe
const  profeAu: string='Wd8qiQGIZxNdAkkxopzWwPTnVTc2';
//permisos
const onlyAdmin = () => map((user:any) => !!user &&  user.uid === AdminAu ) ;
const onlyInstructor=( )=> map((user:any)=> !!user &&  (user.uid === profeAu) ||(user.uid === AdminAu )) ;
const routes: Routes = [
  { path: '', 
    pathMatch: 'full', 
    redirectTo: '/main' 
     }, 
    
     
    
  {path: 'main', component:MainComponent },       
  {path: 'register', component: RegistroComponent },
  {path: 'noautenticado', component: NoAutenticadoComponent},
  {path: 'login', component: LoginComponent },  
  {path: 'loginMaster', component: LoginMasterComponent },
  {path: 'Admin', component: AdministracionComponent, ...canActivate(onlyAdmin)},
  {path: 'lista-Alumnos', component: ListaAlumnosComponent, },
  {path: 'crearAlumnos', component: CrearAlumnosComponent},
  {path: 'editAlumnos/:id', component: CrearAlumnosComponent},
  {path: 'recuperarContrasena', component: RecuperarContrasenaComponent},
  {path: 'formularioRegistros', component: FormularioRegitrosComponent },  
  {path: 'curso1', component: Curso1Component,...canActivate(() => redirectUnauthorizedTo(['/noautenticado']))},
  {path: 'curso2', component: Curso2Component,...canActivate(() => redirectUnauthorizedTo(['/noautenticado'])) },
  {path: 'curso3', component: Curso3Component,...canActivate(() => redirectUnauthorizedTo(['/noautenticado'])) },
  {path: 'curso4', component: Curso4Component,...canActivate(() => redirectUnauthorizedTo(['/noautenticado'])) },
  {path: 'curso5', component: Curso5Component,...canActivate(() => redirectUnauthorizedTo(['/noautenticado'])) },
  {path: 'curso6', component: Curso6Component,...canActivate(() => redirectUnauthorizedTo(['/noautenticado'])) },
  {path: 'curso7', component: Curso7Component,...canActivate(() => redirectUnauthorizedTo(['/noautenticado'])) },
  {path: 'curso8', component: Curso8Component,...canActivate(() => redirectUnauthorizedTo(['/noautenticado'])) },
  //crud ALu
  {path: 'ALu1', component: CrudAl1Component,...canActivate(onlyAdmin)},
  {path: 'ALu2', component: CrudAl2Component,...canActivate(onlyAdmin)},
  {path: 'ALu3', component: CrudAl3Component,...canActivate(onlyAdmin)},
  {path: 'ALu4', component: CrudAl4Component,...canActivate(onlyAdmin)},
  {path: 'ALu5', component: CrudAl5Component,...canActivate(onlyAdmin)},
  {path: 'ALu6', component: CrudAl6Component,...canActivate(onlyAdmin)},
  {path: 'ALu7', component: CrudAl7Component,...canActivate(onlyAdmin)},
  {path: 'Administraciondecursos', component: ResecionCursosAdComponent,...canActivate(onlyAdmin)},
  //matricular Alu
  {path: 'agregarALu1', component: MatricularAluComponent},
  {path: 'agregarALu2', component: MatricularAlu2Component},
  {path: 'agregarALu3', component: MatricularAlu3Component},
  {path: 'agregarALu4', component: MatricularAlu4Component},
  {path: 'agregarALu5', component: MatricularAlu5Component},
  {path: 'agregarALu6', component: MatricularAlu6Component},
  {path: 'agregarALu7', component: MatricularAlu7Component},
  //crud instructor
  {path: 'tablaInstructor', component:CrudsInstructorComponent, ...canActivate(onlyAdmin)} ,
  {path: 'tablaInstructoreditar', component:EdiInstrComponent, ...canActivate(onlyAdmin)} ,
  {path: 'tablaInstructoragregar', component:AgregarInstrComponent, ...canActivate(onlyAdmin)} ,
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
