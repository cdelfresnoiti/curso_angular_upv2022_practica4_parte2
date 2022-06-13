import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule } from '@angular/forms';
import { CoordenadasComponent } from './components/coordenadas/coordenadas.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent, BodyComponent, CoordenadasComponent, CalculadoraComponent, SaludoComponent, ResultadoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
