import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {
  @Input () titulo="Titulo generico"
  @Input () imagen=""

}
