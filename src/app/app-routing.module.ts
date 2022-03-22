import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolhaPersonagemComponent } from './escolha-personagem/escolha-personagem.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'escolha', component: EscolhaPersonagemComponent},  
  {path: 'jogo-da-velha', component: JogoDaVelhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
