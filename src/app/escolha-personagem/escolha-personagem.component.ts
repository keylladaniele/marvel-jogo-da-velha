import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-escolha-personagem',
  templateUrl: './escolha-personagem.component.html',
  styleUrls: ['./escolha-personagem.component.css']
})
export class EscolhaPersonagemComponent implements OnInit {

  constructor(private service: MarvelApiService) { }

  allCharacters: any = [];
  characterName: string;
  showSearchResult1: boolean;
  searchedCharacter1: any = [];
  showSearchResult2: boolean;
  searchedCharacter2: any = [];
  character1Confirmed: string;
  character2Confirmed: string;
  closeBtnConfirmPlayer1: boolean = false;
  closeBtnConfirmPlayer2: boolean = false;
  notResultPlayer1 = false;
  notResultPlayer2 = false;

  @Output()
  startGame = new EventEmitter<any>();

  @Output()
  namePlay1 = new EventEmitter<any>();

  @Output()
  namePlay2 = new EventEmitter<any>();

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe((result) => {
      this.allCharacters = result.data.results;
    })

  }

  findCharacter1(event: any) {
    this.closeBtnConfirmPlayer1 = false;
    this.characterName = event.target.value;
    if (this.characterName.length > 0) {
      this.service.getCharacterByName1(this.characterName).subscribe((response) => {
        console.log(response.data.results);
        if (response.data.results.length > 0) {
          this.showSearchResult1 = true;
          this.notResultPlayer1 = false;
          this.searchedCharacter1 = response.data.results;
        } else {
          this.notResultPlayer1 = true;
          this.showSearchResult1 = false;
          this.searchedCharacter1 = [];
        }
      })
    } else {
      this.showSearchResult1 = false;
      this.searchedCharacter1 = [];
    }

  }

  findCharacter2(event: any) {
    this.closeBtnConfirmPlayer2 = false;
    this.characterName = event.target.value;
    console.log(this.characterName);
    if (this.characterName.length > 0) {
      this.service.getCharacterByName1(this.characterName).subscribe((response) => {
        console.log(response.data.results);
        if (response.data.results.length > 0) {
          this.showSearchResult2 = true;
          this.notResultPlayer2 = false;
          this.searchedCharacter2 = response.data.results;
        } else {
          this.notResultPlayer2 = true;
          this.showSearchResult2 = false;
          this.searchedCharacter2 = [];
        }
      })
    } else {
      this.showSearchResult2 = false;
      this.searchedCharacter2 = [];
    }

  }

  confirmCharacter1(character1Name: string) {
    console.log(character1Name);
    this.closeBtnConfirmPlayer1 = true;
    this.character1Confirmed = character1Name;
    this.namePlay1.emit(character1Name);
  }

  confirmCharacter2(character2Name: string) {
    console.log(character2Name);
    this.closeBtnConfirmPlayer2 = true;
    this.character2Confirmed = character2Name;
    this.namePlay2.emit(character2Name);
  }

  newStartGame() {
    this.startGame.emit();
  }
}
