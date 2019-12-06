import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {
  playerlist: string[] = [];
  playerscores: number[] = [];
  scorecap = 0;


  constructor() { }

  addPlayer(newPlayer: string) {
    if (newPlayer) {
      this.playerlist.push(newPlayer);
    }
  }
  getPlayerlist() {
    return this.playerlist;
  }

}
