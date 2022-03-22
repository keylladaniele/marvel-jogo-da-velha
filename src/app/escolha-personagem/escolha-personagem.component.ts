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
  showSearchResult1: boolean;
  searchedCharacter1:any=[ ];
  showSearchResult2: boolean;
  searchedCharacter2:any=[ ];
  character1Confirmed: string;
  character2Confirmed: string;

  ngOnInit(): void {
    
    this.service.getAllCharacters().subscribe((result) => {
      console.log(result);
      this.allCharacters = result.data.results;
    })

  }

  findCharacter1(event:any) {
    this.characterName = event.target.value;
    console.log(this.characterName);
    this.service.getCharacterByName1(this.characterName).subscribe((result)=>{
      console.log(result);
      if(result.data.count>0) {
        this.showSearchResult1= true;
        this.searchedCharacter1= result.data.results;
      }
      else {
        this.ngOnInit();
      }
    })
  }

  findCharacter2(event:any) {
    this.characterName = event.target.value;
    console.log(this.characterName);
    this.service.getCharacterByName2(this.characterName).subscribe((result)=>{
      console.log(result);
      if(result.data.count>0) {
        this.showSearchResult2 = true;
        this.searchedCharacter2 = result.data.results;
      }
      else {
        this.ngOnInit();
      }
    })
  }

  confirmCharacter1(character1Name: string) {
    console.log(character1Name);
    this.character1Confirmed = character1Name;
    
  }

  confirmCharacter2(character2Name: string) {
    console.log(character2Name);
    this.character2Confirmed = character2Name;
    
  }

  

}
