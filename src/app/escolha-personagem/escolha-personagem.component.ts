import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-escolha-personagem',
  templateUrl: './escolha-personagem.component.html',
  styleUrls: ['./escolha-personagem.component.css']
})
export class EscolhaPersonagemComponent implements OnInit {

  constructor(private characterServ: MarvelApiService) { }

  allCharacters: Observable<any>;

  ngOnInit() {
    this.getCharacters();
    
  }

  getCharacters() {
    console.log(`Mostre os personagens ${this.allCharacters}`);
    
  }



}
