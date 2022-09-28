import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

   Contra:string='pepe';
   correo:string='pepe';
  
  home(){
    
    console.log(this.correo);   

  }


}
