import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordenadas',
  templateUrl: './coordenadas.component.html',
  styleUrls: ['./coordenadas.component.css'],
})
export class CoordenadasComponent implements OnInit {
  localizacion = 'Esperando click...';

  constructor() {}

  ngOnInit(): void {}

  obtenerLocalizacion(data: MouseEvent) {
    this.localizacion = `Coordenadas ${data.clientX}:${data.clientY}`;
  }
}