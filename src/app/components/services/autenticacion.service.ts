import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,sendPasswordResetEmail,signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';

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
  recuperarContra(email:any){
    return sendPasswordResetEmail(this.auth, email);
  }
  
  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }
 
  logout(){ //exige loguearce
    return signOut(this.auth);
  }
  googleInicio(){
   return  signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  /*vija forma de registro funcional 22/9/22  tiene mas aspectos*/
  // registar2(email:any,password:any){
  //   return this.auth2.createUserWithEmailAndPassword(email, password);
  // }

}
