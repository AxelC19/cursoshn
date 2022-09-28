import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from '@angular/fire/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private auth:Auth,
              ) { }
  
  registre({email,password}:any){
    return createUserWithEmailAndPassword(this.auth, email,password);
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  logout(){ //exige loguearce
    return signOut(this.auth);
  }

  /*vija forma de registro funcional 22/9/22  tiene mas aspectos*/
  // registar2(email:any,password:any){
  //   return this.auth2.createUserWithEmailAndPassword(email, password);
  // }

}
