import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';




@Component({
  selector: 'app-formulario-regitros',
  templateUrl: './formulario-regitros.component.html',
  styleUrls: ['./formulario-regitros.component.css']
})
export class FormularioRegitrosComponent implements OnInit {
  formReg:FormGroup;
  
  constructor( private formBu:FormBuilder,
               private auth:AutenticacionService,
               private router:Router               
               ) { 
    this.formReg= this.formBu.group({
      email:['', Validators.required],
      password:['',Validators.required],
      Repetirpassword:['',Validators.required]

      
    })
      
    
  }
  registrar(){
    const email           = this.formReg.value.email;
    const Repetirpassword = this.formReg.value.Repetirpassword;
    const password        = this.formReg.value.password;
    if (Repetirpassword!= password) {
      alert('contraseñas no coinciden')      
    }
   else this.auth.registre({email,password}).then((user)=>{
      this.router.navigate(['/login'])
      
      alert('usario  registrado ')
    }).catch((error)=>{
      
       console.log(error);
       console.log(error);
       
       alert(this.FirebaseError(error.code))
    })

    
     
     
  }
  FirebaseError(code:string){
    switch (code) {
      case 'auth/email-already-in-use':
           return ' el usario ya esta registrado';
        
      case 'auth/weak-password':
      return 'contraseña debil';        
        
      case 'auth/invalid-email':
         return 'correo Invalido @.com'   
        default:
        return 'error desconocido'   ;
    }

  }

  ngOnInit(): void {
  }
  onlogin(){
    this.router.navigate(['/login'])
  }

}
