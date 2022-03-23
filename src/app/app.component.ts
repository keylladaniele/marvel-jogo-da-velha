import { GameService } from './services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marvel-jogo-da-velha';
  startGameClicked = false;
  endGame = false;

  namePlay1: string = '';
  namePlay2: string = '';


  constructor(private gameService: GameService) { }

  ngOnInit() {
  }


  get player(): number {
    return this.gameService.player;
  }

  get showGameboard(): boolean {
    this.endGame = this.gameService.showGameboard;
    return this.gameService.showGameboard;
  }

  starGame() {
    this.startGameClicked = true;
    this.gameService.newGame();
  }

  setNamePlay1(name) {
    console.log(name);
    this.namePlay1 = name;
  }

  setNamePlay2(name) {
    this.namePlay2 = name;
  }
}

