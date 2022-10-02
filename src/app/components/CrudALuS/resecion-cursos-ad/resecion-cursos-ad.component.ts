import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-resecion-cursos-ad',
  templateUrl: './resecion-cursos-ad.component.html',
  styleUrls: ['./resecion-cursos-ad.component.css']
})
export class ResecionCursosAdComponent implements OnInit {
   cursos:any;
   mostrar:string='Word Básico';
  constructor(private servicioCurso:AlumnosService,  private router:Router) { }

  ngOnInit(): void {
    this.servicioCurso.CursosName().subscribe((r)=>{
     console.log(r);
     
     this.cursos = r;     
      
    })
  }

  onCurso1(){
    this.router.navigate(['ALu1'])
  }
  onCurso2(){
    this.router.navigate(['ALu2'])
  }
  onCurso3(){
    this.router.navigate(['ALu3'])
  }
  onCurso4(){
    this.router.navigate(['ALu4'])
  }
  onCurso5(){
    this.router.navigate(['ALu5'])
  }
  onCurso6(){
    this.router.navigate(['ALu6'])
  }
  onCurso7(){
    this.router.navigate(['ALu7'])
  }

}
