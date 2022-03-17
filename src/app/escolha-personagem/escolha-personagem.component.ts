import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-escolha-personagem',
  templateUrl: './escolha-personagem.component.html',
  styleUrls: ['./escolha-personagem.component.css']
})
export class EscolhaPersonagemComponent implements OnInit {

  constructor(private service: MarvelApiService) { }

  allCharacters: any=[ ];
  characterName: string;
  showSearchResult: boolean;
  searchedCharacter:any=[ ];

  ngOnInit(): void {
    
    this.service.allCharacters().subscribe((result) => {
      console.log(result);
      this.allCharacters = result.data.results;
    })


  }

  



}
