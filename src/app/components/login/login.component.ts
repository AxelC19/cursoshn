import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';


import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;
  curso:string='/main'
  constructor(    private autenticarService: AutenticacionService,private router:Router
                      ) 
  {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      
    })  
  }
  
  onSubmit(){
    this.autenticarService.login(this.formLogin.value) //promesa
      /*/funciona bien*/ 
      .then(resp=>{
        this.router.navigate([this.curso]);
      console.log(resp);
      
    })
       //errores
    .catch(erro=>{
      console.log(erro);
      
      alert(this.FirebaseError(erro.code))
      

  }); 
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
google(){
  this.autenticarService.googleInicio().then(r=>{
    console.log(r);
    this.router.navigate(['/main']);
    alert('iniciar con google') 
  }).catch(err=> console.log(err) )
  
}
  recuperarContrasena(){
    this.router.navigate(['/recuperarContrasena']);
  }
  registro(){
     this.router.navigate(['formularioRegistros']);
  }

  ngOnInit(): void {
  }
  
}
