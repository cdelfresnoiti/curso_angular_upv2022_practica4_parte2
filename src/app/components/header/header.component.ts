import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  urlImagen: string;
  titulo: string;

  textoMenu: string = 'Esperando desde el header';

  constructor() {
    this.titulo = 'Práctica 4';
    this.urlImagen =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  }

  ngOnInit(): void {}
}
