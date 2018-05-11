import { Component, OnInit } from '@angular/core';
import { Constants } from '../../const/chords.const';

@Component({
  selector: 'app-uke-string',
  templateUrl: './uke-string.component.html',
  styleUrls: ['./uke-string.component.css']
})
export class UkeStringComponent implements OnInit {
  ukeString:string;
  frets:string[];

  constructor() { 
  }

  ngOnInit() {
  }

  setString(note:string){
    this.frets = Array(18);
    this.ukeString = note;
    var scale = Constants.SCALE;
    var i:number;
    for (i=0;i<12;i++){
      var scaleIndex = (scale.indexOf(note) + i) % 12; 
      this.frets[i] = scale[scaleIndex];
    }
  }

  findBestFret(chord:string[],startIndex:number=0){
    var bestFret = 12;
    var self = this;
    chord.map(function(value){
      var thisFret = self.getNextFret(value,startIndex);
      if (thisFret < bestFret){
        bestFret = thisFret;
      }
    });
    return bestFret;
  }

  getNextFret(note:string,startIndex:number=0){
    return (this.frets.indexOf(note,startIndex));
  }

  getNoteFromFret(note:string,fret:number){
    var scale = Constants.SCALE;
    var retNote = scale[(scale.indexOf(note) + fret) % 12];
    return retNote;
  }

}
