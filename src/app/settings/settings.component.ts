import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Http } from '@angular/http';

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
  @Output() onModeChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() onTuneChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() onHandChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  
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

  public changeMode(strMode:string){
    console.log("In Change Mode function");
    this.settings.changeMode(strMode); 
   }
   public changeTune(strTune:string){
    console.log("In Change Tune function");
    //this.settings.changeTune(strTune); 
   }
   public changeHand(strHand:boolean){
    console.log("In Change Hand function");
    //this.settings.changeHand(strHand); 
   }

}
