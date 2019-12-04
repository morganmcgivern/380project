import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import io from 'socket.io-client';


@Component({
  selector: 'app-gamescreen',
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css']
})
export class GamescreenComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  @ViewChild('game')
  private gameScreen: ElementRef;

  constructor() {
  }

  private context: any;
  private socket: any;

  public ngOnInit() {
    this.socket = io('http://localhost:3000');
  }

  public ngAfterViewInit() {
    this.context = this.gameScreen.nativeElement.getContext('chatcontainer');
    this.socket.on('sentence', data => {
    });
  }

  public updateSentence(newsentence: string) {
    this.socket.emit('updateSentence', newsentence);
  }

}
