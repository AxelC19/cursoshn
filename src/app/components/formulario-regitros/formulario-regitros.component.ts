import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.auth.registre({email,password}).then((user)=>{
      console.log(user);
      
    }).catch((error)=>{
      alert('problemas')
       console.log(error);
       
    })
     
     
  }

  ngOnInit(): void {
  }

}
