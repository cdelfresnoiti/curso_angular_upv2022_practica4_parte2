import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  contador = 1;
  saludo = '';

  localizacion = 'Esperando click...';

  constructor() {}

  sumar() {
    this.contador++;
  }

  restar() {
    this.contador--;
  }

  obtenerLocalizacion(data: MouseEvent) {
    this.localizacion = `Coordenadas ${data.clientX}:${data.clientY}`;
  }

  ngOnInit(): void {}
}
