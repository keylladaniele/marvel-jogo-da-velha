import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolhaPersonagemComponent } from './escolha-personagem/escolha-personagem.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
