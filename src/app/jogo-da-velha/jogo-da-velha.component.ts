import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void { this.gameService.inicio();
  }

  get showStart():boolean {
    return this.gameService.showStart;
  }

  get showEnd():boolean {
    return this.gameService.showEnd;
  }

  get showGameboard(): boolean {
    return this.gameService.showGameboard;
  }

  startGame() : void {
    this.gameService.startGame();
  }

  toPlay(posX: number, posY: number) : void {
    this.gameService.toPlay(posX, posY);
  }

  mostrarX(posX: number, posY: number) : boolean {
    return this.gameService.mostrarX(posX, posY);
  }

  mostrarO(posX: number, posY: number) : boolean {
    return this.gameService.mostrarO(posX, posY);
  }

  mostrarWin(posX: number, posY: number) : boolean {
    return this. gameService.mostrarWin(posX, posY)
  }

  get player(): number {
    return this.gameService.player;
  }

  newGame(): void {
    this.gameService.newGame();
  }

}
