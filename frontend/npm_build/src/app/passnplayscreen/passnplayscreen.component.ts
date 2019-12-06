import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../gameservice.service';


@Component({
  selector: 'app-passnplayscreen',
  templateUrl: './passnplayscreen.component.html',
  styleUrls: ['./passnplayscreen.component.css']
})
export class PassnplayscreenComponent implements OnInit {
  constructor(
      private gameService: GameserviceService,

  ) { }

  ngOnInit() {

  }

}
