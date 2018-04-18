import { Component, OnInit, Input } from '@angular/core';
import { Constants } from '../const/chords.const';
import { SettingsService } from '../settings.service';
import { Chord } from '../chord';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {
  notesScale: string[];
  majorChordScale: string[];
  minorChordScale: string[];
  chordMap: Chord[];
  root:string;
  mode:string;
  testChord:string;
  chordScale:string[];
  chordMinorScale:string[];
  testMinorChord:string;

  constructor(private settings: SettingsService) { }

  ngOnInit() {
    this.notesScale = Constants.SCALE;
    this.majorChordScale = Constants.CHORDS_MAJOR_SCALE;
    this.minorChordScale = Constants.CHORDS_MINOR_SCALE;
    this.chordMap = Constants.CHORDS_MAP;
    this.chordScale = [];
    this.settings.currentRoot.subscribe(root => {
      this.root = root;
    });
    this.settings.currentMode.subscribe(mode => {
      this.mode = mode;
    });

    this.generateChords();
    console.log('chords init');
    
  }
  createChord(note:string,arr:number[]){
    var self = this;
    var chord = arr.map(function(value){
        return (self.notesScale[(value + self.notesScale.indexOf(note)) % 12]);
    });
    return chord.toString();
  }
  generateChords(){
    this.testChord = "";
    this.chordScale = [];
    var modeStr:string = this.mode + "ChordScale";
    this[modeStr].forEach(function(value,index){
      var chordIndex = this.chordMap.map(function(e){return e.name; }).indexOf(value);
      var notes: number[] = this.chordMap[chordIndex].notes;
      var thisRootNote = this.notesScale[(this.notesScale.indexOf(this.root)+index) % 12];
      
      this.testChord = thisRootNote + value + ":    " + this.createChord(thisRootNote,notes);
      this.chordScale.push(this.testChord);
      console.log('in the foreach');
    }, this);
  }

}
