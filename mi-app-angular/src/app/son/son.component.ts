import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit  {

  @Input()messageFather :string = "";
  @Output()sendMessage = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToFather() {
    this.sendMessage.emit("Mensaje enviado desde el componente hijo");
  }
  

}
