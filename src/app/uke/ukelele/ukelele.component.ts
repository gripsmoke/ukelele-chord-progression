import { Component, OnInit } from '@angular/core';
import { UkeStringComponent } from '../uke-string/uke-string.component';

@Component({
  selector: 'app-ukelele',
  templateUrl: './ukelele.component.html',
  styleUrls: ['./ukelele.component.css']
})
export class UkeleleComponent implements OnInit {
  public strings:UkeStringComponent[];
  
  constructor() { }

  ngOnInit() {
    console.log("UkeleleComponent ngOnInit fired");
    this.strings = [
      new UkeStringComponent(),
      new UkeStringComponent(),
      new UkeStringComponent(),
      new UkeStringComponent()
    ];
    this.strings[0].setString('A');
    this.strings[1].setString('E');
    this.strings[2].setString('C');
    this.strings[3].setString('G');
  }

  getFretsForChord(chordNotes:string[]){
    var fretArr = Array();
    var i:number;
    var self = this;
    for(i=0;i<4;i++){
      fretArr.push(this.strings[i].findBestFret(chordNotes));
    }
    // need a function to make the 4th C fret / open E --- or --- 5th E fret / open A problem from happening
    // need a function to ensure every note is represented in the chord.
    console.log("---------------------------------------------------");
    console.log("Chord is composed of the notes " + chordNotes);
    console.log("The frets returned are " + fretArr);
    var tempArr = fretArr.slice(0);
    tempArr.forEach(function(value,index){
      //console.log("value " + value);
     // console.log("index " + index);
      //console.log("ret arr is " + tempArr);
      var noteUsed = this.strings[index].getNoteFromFret(this.strings[index].ukeString, value);
      tempArr.splice(index,1,noteUsed);
      //console.log("Ret Arr is now " + tempArr);
    }, this);
   // console.log("Did RetArr stay changed ? " + tempArr);
   // console.log("leftover notes is " + chordNotes);
    var missingNotes = chordNotes.filter(function(n){
      return tempArr.indexOf(n) == -1;
    });
    
    var dupeNotes = chordNotes.filter(function(n){
      return tempArr.indexOf(n) != tempArr.lastIndexOf(n);
    });
    if (missingNotes.length){
      console.log("Missing notes are " + missingNotes);
      console.log("Dupe notes are " + dupeNotes);
      var missingNote = missingNotes[0]; // TODO: make this work for multiple missing notes
      var bestOffset = 12;
      var bestFret = -1;
      for(i=0;i<4;i++){
        if (dupeNotes.indexOf(tempArr[i]) != -1){
          var thisNextFret = this.strings[i].getNextFret(missingNote);
          if (thisNextFret < bestOffset){
            bestOffset = thisNextFret;
            bestFret = i;
          }
        }
      }
      fretArr[bestFret] = bestOffset;
      console.log("Now the frets are " + fretArr);
    }
    
    console.log("-------------");
    return fretArr;
  }

}
