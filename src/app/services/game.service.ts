import { Injectable } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

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

    // if (!this.win && this.nMoviments < 9) {
    //   this.cpuPlay();
    // }
    
    if (this.win !== false) {
      this._showEnd = true;
    }

    if (!this.win && this.nMoviments === 9) {
      this._player = 0;
      this._showEnd = true;
    }

  }

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


  // cpuPlay(): void {
  //   let jogada: number[] = this.getJogada(this.O);
    
  //   if (jogada.length <= 0) {
  //     jogada = this.getJogada(this.X);
  //   }

  //   if (jogada.length <= 0) {
  //     let jogadas: any= [];
  //     for (let i=0; i<this.tab; i++){
  //       for (let j=0; j<this.tab; j++) {
  //         if (this.gameboard[i][j] === this.empty) {
  //           jogadas.push([i, j]);
  //         }
  //       }
  //     }
      
  //     let k = Math.floor((Math.random() * (jogadas.length - 1)));
  //     jogada = [jogadas[k][0], jogadas[k][i]];
    
  //   }

  //   this.gameboard[jogada[0]][jogada[i]] = this._player;
  //   this.nMoviments++;
  //   this.win = this.endGame(jogada[0], jogada[1], this.gameboard, this._player);
  //   this._player = (this._player === this.X) ? this.O : this.X;
  
  // }


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

  mostrarX(posX: number, posY: number): boolean {
    return this.gameboard[posX][posY] === this.X;
  }

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

  newGame(): void {
    this.inicio();
    this._showEnd = false;
    this._showStart = false;
    this._showGameboard = true;
  }




}
