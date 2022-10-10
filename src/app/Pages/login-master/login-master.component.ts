import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-login-master',
  templateUrl: './login-master.component.html',
  styleUrls: ['./login-master.component.css']
})
export class LoginMasterComponent implements OnInit {
  DATA:any;
  campos:any[]=[];  
  campos2:any[]=[];
  campos3:any[]=[];
  campos4:any[]=[];
  campos5:any[]=[];
  campos6:any[]=[];
  campos7:any[]=[];
  mostrar:boolean=false;

  constructor( private Alumnosservicio:AlumnosService ) {
    this.downloadPDF();
   }

  ngOnInit(): void {
    
    this.Alumnosservicio.curso1Alu().subscribe(resp=>{
      this.campos= resp;
      console.log(this.campos);
    if (this.campos.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo2Alu().subscribe(resp=>{
      this.campos2= resp;
      console.log(this.campos2);
    if (this.campos2.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo3Alu().subscribe(resp=>{
      this.campos3= resp;
      console.log(this.campos);
    if (this.campos3.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo4Alu().subscribe(resp=>{
      this.campos4= resp;
      console.log(this.campos);
    if (this.campos4.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo5Alu().subscribe(resp=>{
      this.campos5= resp;
      console.log(this.campos);
    if (this.campos5.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo6Alu().subscribe(resp=>{
      this.campos6= resp;
      console.log(this.campos);
    if (this.campos6.length === 0)  {
       this.mostrar=true;
    }})

    this.Alumnosservicio.curo7Alu().subscribe(resp=>{
      this.campos7= resp;
      console.log(this.campos);
    if (this.campos7.length === 0)  {
       this.mostrar=true;
    }})   }

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
    downloadPDF2() {
      // Extraemos el
      this.DATA = document.getElementById('htmlData2') ;
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

    downloadPDF3() {
      // Extraemos el
      this.DATA = document.getElementById('htmlData3') ;
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

    downloadPDF4() {
      // Extraemos el
      this.DATA = document.getElementById('htmlData4') ;
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

    downloadPDF5() {
      // Extraemos el
      this.DATA = document.getElementById('htmlData5') ;
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

    downloadPDF6() {
      // Extraemos el
      this.DATA = document.getElementById('htmlData6') ;
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

    downloadPDF7() {
      // Extraemos el
      this.DATA = document.getElementById('htmlData7') ;
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
