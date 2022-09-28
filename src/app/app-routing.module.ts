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
  {path: 'lista-Alumnos', component: ListaAlumnosComponent },
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
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
