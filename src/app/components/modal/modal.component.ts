import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  

   show:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }
  showModal(){
    this.show= true;
  }

  hidemodal(){
    this.show= false;
  }
}
