import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';





@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {

  RecuperarUsuario:FormGroup;
  
  

  constructor(   private fb:FormBuilder,
                 private aute:AutenticacionService,   
                  private router:Router,
                      )                   
  {
    this.RecuperarUsuario= this.fb.group({
      email:['',Validators.required]      
    })
  }
  recuperar(){
     const email = this.RecuperarUsuario.value.email;
     console.log(email);
     
     this.aute.recuperarContra(email).then((r)=>{
       console.log(r);
      this.router.navigate(['/login'])       
       alert('se envió un correo para restablecer contraseña')
     })
     .catch((err)=>{
       console.log(err);
       alert('error usario no encontrado')
       
     })

     
    
    
  }
  FirebaseError(code:string){
    switch (code) {
      case 'auth/wrong-password':
           return 'contraseña invalida';
        
      case 'auth/weak-password':
      return 'contraseña debil';        
        
      case 'auth/invalid-email':
         return 'correo Invalido @.com'  
      case 'auth/invalid-email':
          return 'Cuenta invalida'
      case 'auth/user-disabled':
            return 'Cuenta Inhabilitada'        
        default:
        return 'error usario no encontrado'   ;
        
    }
  
  }

  ngOnInit(): void {
  }
  
regrsarLogin(){
  this.router.navigate(['/login'])
}

}
