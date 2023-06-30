import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  nombreEmpresa:string="Amazon"
  precio:number=21
  patrocinios=["Coca Cola","Red Bull","Amazon"]

  public incrementarPrecio(){
    let variableRandom=21
    variableRandom=variableRandom+1
    this.precio=this.precio+1
   }
}
