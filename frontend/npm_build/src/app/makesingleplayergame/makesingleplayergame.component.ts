import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-makesingleplayergame',
  templateUrl: './makesingleplayergame.component.html',
  styleUrls: ['./makesingleplayergame.component.css']
})
export class MakesingleplayergameComponent implements OnInit {
  playername = '';

  constructor(
      private gameService: GameserviceService,
  ) {

  }

  ngOnInit() {
  }

  addPlayer(playername) {
    window.alert('ding');
    this.gameService.addPlayer(playername);
  }
}
