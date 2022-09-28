import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SeccionModule } from '../components/seccion.module';
import { Curso1Component } from './curso1/curso1.component';
import { Curso2Component } from './curso2/curso2.component';
import { Curso3Component } from './curso3/curso3.component';
import { Curso4Component } from './curso4/curso4.component';
import { Curso5Component } from './curso5/curso5.component';
import { Curso6Component } from './curso6/curso6.component';
import { Curso7Component } from './curso7/curso7.component';
import { Curso8Component } from './curso8/curso8.component';
import { LoginMasterComponent } from './login-master/login-master.component';
import { AdministracionComponent } from './administracion/administracion.component';




@NgModule({
  declarations: [
    HomeComponent,
    Curso1Component,
    Curso2Component,
    Curso3Component,
    Curso4Component,
    Curso5Component,
    Curso6Component,
    Curso7Component,
    Curso8Component,
    LoginMasterComponent,
    AdministracionComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SeccionModule,

    
  ]
})
export class MatriculaModule { }
