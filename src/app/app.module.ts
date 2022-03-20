import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EscolhaPersonagemComponent } from './escolha-personagem/escolha-personagem.component';
import { PersonagemComponent } from './escolha-personagem/personagem/personagem.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';



@NgModule({
  declarations: [
    AppComponent,
    EscolhaPersonagemComponent,
    PersonagemComponent,
    JogoDaVelhaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
