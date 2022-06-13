import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  contador = 0;
  @Output() resultadoEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  sumar() {
    this.contador++;
    this.resultadoEvent.emit(this.contador);
  }

  restar() {
    this.contador--;
    this.resultadoEvent.emit(this.contador);
  }
}
