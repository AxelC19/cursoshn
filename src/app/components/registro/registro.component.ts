import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  

  
  
  formReg:FormGroup;
  

  constructor(    private autenticarService: AutenticacionService,
                  private router:Router
                      ) 
                  
  {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })  
  }


  loginRe(){
    this.router.navigate(['/login']);
  }
  onSubmit(){
    this.autenticarService.registre(this.formReg.value) //promesa
      /*/funciona bien*/ 
      .then(resp=>{
        this.router.navigate(['/login']);
      console.log(resp);
      
    })
       //errores
    .catch(erro=>console.log(erro)
    ); 
    
  }

  ngOnInit(): void {
  }

}
