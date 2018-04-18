import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Constants } from '../const/chords.const';
import { Http } from '@angular/http';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {
  scale: string[];
  root: string;
  @Output() onRootChange:EventEmitter<string> = new EventEmitter<string>();

  constructor(private settings: SettingsService) { 
    this.scale = Constants.SCALE;
  }

  ngOnInit() {
    this.settings.currentRoot.subscribe(root => this.root = root);
  }

  public changeNote(strNote:string){
    console.log('User clicked ' + strNote);
    this.settings.changeNote(strNote);
  }
}
