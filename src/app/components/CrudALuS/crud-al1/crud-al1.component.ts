import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-crud-al1',
  templateUrl: './crud-al1.component.html',
  styleUrls: ['./crud-al1.component.css']
})
export class CrudAl1Component implements OnInit {

  constructor(private Alu: AlumnosService,private router:Router) { 
    this.downloadPDF();
  }
  

  cargar:boolean=false;
  alumnoEditar:object={};
  upDate:any;
  campos:any[]=[];
  editarFrom:any;
  DATA:any;

  ngOnInit(): void {
    this.Alu.curso1Alu().subscribe((r =>{
    this.campos= r;
    }))
  }

  
onAluAgregar(){
   this.router.navigate(['/agregarALu1'])
}

  editAlumnos(campos:any){
    //this.router.navigate(['/editAlumnos/campos.id'])
    this.alumnoEditar=campos;   
          
            

  }
  
  async onEliminarAlumnos(campos:any){
    this.cargar=true;
    alert("Eliminando...")
     const resp =      
     await  this.Alu.curso1delete(campos);
     this.cargar=false;
     console.log(resp);
     
  }
  

  downloadPDF() {
    // Extraemos el
    this.DATA = document.getElementById('htmlData') ;
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(this.DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 10;
      const bufferY = 10;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }


}
