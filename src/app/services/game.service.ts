import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly tab: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly empty:  number = 0;
  private gameboard: any;
  private nMoviments: number;
  private win: any;

  private _player: number;
  private _showStart: boolean;
  private _showGameboard: boolean;
  private _showEnd: boolean;


  constructor() { }

  inicio(): void {
    this._showStart = true;
    this._showGameboard = false;
    this._showEnd = false;
    this.nMoviments = 0;
    this._player = this.X;
    this.win = false;
    this.iniciarTabuleiro();
  }

  // Zerar tabuleiro

  iniciarTabuleiro(): void {
    this.gameboard = [this.tab];
    for (let i = 0; i < this.tab; i++) {
      this.gameboard[i] = [this.empty, this.empty, this.empty]
    }
  }

  get showStart(): boolean {
    return this._showStart;
  }

  get showEnd() : boolean {
    return this._showEnd
  }

  get showGameboard(): boolean {
    return this._showEnd;
  }

  get player(): number {
    return this._player;
  }

  // Iniciar jogo

  startGame(): void {
    this._showStart = false;
    this._showGameboard = true;
  }


  toPlay(posX: number, posY: number): void {
    if (this.gameboard[posX][posY] !== this.empty|| this.win){
      return;
    }

    this.gameboard[posX][posY] = this._player;
    this.nMoviments++;
    this.win = this.endGame(posX, posY, this.gameboard, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

    
    if (this.win !== false) {
      this._showEnd = true;
    }

    if (!this.win && this.nMoviments === 9) {
      this._player = 0;
      this._showEnd = true;

    }

  }

  // Finaliza jogo (condições para vitória)

  endGame(row: number, column: number, gameboard: any, player: number) {
    let fim:  any = false;

    if (gameboard[row][0] === player &&
        gameboard[row][1] === player &&
        gameboard[row][2] === player) {
          fim = [[row, 0], [row, 1], [row, 2]];
        }

    if (gameboard[0][column] === player &&
        gameboard[1][column] === player &&
        gameboard[2][column] === player) {
          fim = [[0, column], [1, column], [2, column]];
        }

    if (gameboard[0][0] === player &&
        gameboard[1][1] === player &&
        gameboard[2][2] === player) {
          fim = [[0,0], [1,1], [2,2]];
        }

    if (gameboard[0][2] === player &&
        gameboard[1][1] === player &&
        gameboard[2][0] === player) {
          fim = [[0,2], [1,1], [2,0]]
        }
    return fim;

  }


  

  getJogada(player: number): number[] {
    let tabu = this.gameboard;
    for (let r = 0; r < this.tab; r++) {
      for (let col = 0; col < this.tab; col++) {
        if (tabu[r][col] !== this.empty) {
          continue;
        }
        tabu[r][col] = player;
        if (this.endGame(r, col, tabu, player)) {
          return [r, col];
        }
        tabu[r][col] = this.empty;
      }
    }
    return [];
  }

  // Exibe X no tabuleiro

  mostrarX(posX: number, posY: number): boolean {
    return this.gameboard[posX][posY] === this.X;
  }

  // Exibe O no tabuleiro

  mostrarO(posX: number, posY: number): boolean {
    return this.gameboard[posX][posY] === this.O;
  }

  mostrarWin(posX: number, posY: number): boolean {
    let mostrarWin: boolean = false;

    if (!this.win) {
      return mostrarWin;
    }

    for (let pos of this.win) {
      if (pos[0] === posX && pos[1] === posY) {
        mostrarWin = true;
        break;
      }
    }
    return mostrarWin;

  }


  // Iniciar novo jogo

  newGame(): void {
    this.inicio();
    this._showEnd = false;
    this._showStart = false;
    this._showGameboard = true;
  }




}
