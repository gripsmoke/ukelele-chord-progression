import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  root:string;
  mode:string;
  tune:string;
  hand:boolean;

  constructor(private settings: SettingsService) { }

  ngOnInit() {
    this.settings.currentRoot.subscribe(root => {
      this.root = root;
    });
    this.settings.currentMode.subscribe(mode => {
      this.mode = mode;
    });
    this.settings.currentTune.subscribe(tune => {
      this.tune = tune;
    });
    this.settings.currentHand.subscribe(hand => {
      this.hand = hand;
    });
  }

}
