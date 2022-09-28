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
    .catch(erro=>{console.log(erro)
      alert('Usuario no encontrado')
  }); 
    
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
