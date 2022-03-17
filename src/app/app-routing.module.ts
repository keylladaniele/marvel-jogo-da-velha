import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolhaPersonagemComponent } from './escolha-personagem/escolha-personagem.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'escolha', component: EscolhaPersonagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
