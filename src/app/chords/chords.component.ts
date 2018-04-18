import { Component, OnInit, Input} from '@angular/core';
import { Constants } from '../const/chords.const';
import { SettingsService } from '../settings.service';
import { Chord } from '../chord';

import {ChordnameSimplifierPipe} from '../pipes/chordname-simplifier.pipe';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {
  // Constants
  notesScale: string[];
  majorChordScale: string[];
  majorChordRoman: string[];
  minorChordScale: string[];
  minorChordRoman: string[];
  chordMap: Chord[];

  // Properties
  root:string;
  mode:string;
  testChord:string;
  chordScale:string[];
  chordTable:string[];

  constructor(private settings: SettingsService) { }

  ngOnInit() {
    this.notesScale = Constants.SCALE;
    this.majorChordScale = Constants.CHORDS_MAJOR_SCALE;
    this.majorChordRoman = Constants.CHORDS_MAJOR_ROMAN;
    this.minorChordScale = Constants.CHORDS_MINOR_SCALE;
    this.minorChordRoman = Constants.CHORDS_MINOR_ROMAN;
    this.chordMap = Constants.CHORDS_MAP;
    
    this.settings.currentRoot.subscribe(root => {
      this.root = root;
      this.generateChords();
    });
    this.settings.currentMode.subscribe(mode => {
      this.mode = mode;
      this.generateChords();

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
    if (!(this.root && this.mode)){
      return false;
    }
    this.testChord = "";
    this.chordScale = [];
    var modeStr:string = this.mode + "ChordScale";
    var roman:string = this.mode + "ChordRoman";
    var rix:number = 0;
    this[modeStr].forEach(function(value,index){
      var thisChordDisplay = [];
      var chordIndex = this.chordMap.map(function(e){return e.name; }).indexOf(value);
      var notes: number[] = this.chordMap[chordIndex].notes;
      var thisRootNote = this.notesScale[(this.notesScale.indexOf(this.root)+index) % 12];
      
      thisChordDisplay.push(this[roman][rix]);
      rix++;

      thisChordDisplay.push(thisRootNote + value);

      thisChordDisplay.push(this.createChord(thisRootNote,notes));

      this.chordScale.push(thisChordDisplay);
      //this.testChord = thisRootNote + value + ":    " + this.createChord(thisRootNote,notes);
      //this.chordScale.push(this.testChord);
      console.log(thisChordDisplay);
    }, this);
  }

}
