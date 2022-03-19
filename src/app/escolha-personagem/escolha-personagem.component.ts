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
    
    this.service.getAllCharacters().subscribe((result) => {
      console.log(result);
      this.allCharacters = result.data.results;
    })

  }

  findCharacter(event:any) {
    this.characterName = event.target.value;
    console.log(this.characterName);
    this.service.getCharacterByName(this.characterName).subscribe((result)=>{
      console.log(result);
      if(result.data.count>0) {
        this.showSearchResult = true;
        this.searchedCharacter = result.data.results;
      }
      else {
        this.ngOnInit();
      }
    })
  }

  



}
