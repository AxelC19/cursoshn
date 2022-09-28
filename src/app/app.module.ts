import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { SeccionModule } from './components/seccion.module';
import { MatriculaModule } from './Pages/matricula.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import {FirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { ToastrModule } from 'ngx-toastr';







@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    

    
    
  ],
  imports: [        
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    MatriculaModule,
    SeccionModule,
    MatriculaModule,
    FirestoreModule,
    BrowserAnimationsModule,       
    ToastrModule.forRoot(), // ToastrModule added     
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
