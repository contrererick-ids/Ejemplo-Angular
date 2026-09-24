import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

  @Input() texto = '';
  @Output() doOnClick: EventEmitter<number> = new EventEmitter();
  cuenta = 0;

  clickHandler(e: Event) {
    console.log('Dieron click: ', e);
    this.cuenta++;
    this.doOnClick.emit(this.cuenta);
  }

}
