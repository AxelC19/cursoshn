import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/components/services/autenticacion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private autenticarce:AutenticacionService, private router:Router) { }
   
  onInlogin(){
    //promesa
    this.autenticarce.logout()
    .then(()=>{
      this.router.navigate(['/noautenticado']);
    })
    .catch(error=>{      console.log(error);} ) ; 
  };
  onMaster(){
    this.router.navigate(['/loginMaster']);
  }
  onAdmin(){
    this.router.navigate(['/Admin']);
  }

  onMain(){
    this.router.navigate(['/main']);
  }
  onLogin(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
