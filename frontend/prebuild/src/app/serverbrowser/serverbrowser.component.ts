import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverbrowser',
  templateUrl: './serverbrowser.component.html',
  styleUrls: ['./serverbrowser.component.css']
})
export class ServerbrowserComponent implements OnInit {
  value = 'Server Name...';

  constructor() { }

  ngOnInit() {
  }

}
