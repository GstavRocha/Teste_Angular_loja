import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projeto-loja-lauto';
  imageUrl = "";
  constructor() {
  }
  ngOnInit() {
    this.imageUrl = "assets/logo.png";
  }

}
