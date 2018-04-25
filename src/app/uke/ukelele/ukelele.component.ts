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

    /* Find the notes represented and compare with the original chord to see if any notes are missing */
    var tempArr = fretArr.slice(0);
    tempArr.forEach(function(value,index){
      var noteUsed = this.strings[index].getNoteFromFret(this.strings[index].ukeString, value);
      tempArr.splice(index,1,noteUsed);
    }, this);
    var missingNotes = chordNotes.filter(function(n){
      return tempArr.indexOf(n) == -1;
    });
    var dupeNotes = chordNotes.filter(function(n){
      return tempArr.indexOf(n) != tempArr.lastIndexOf(n);
    });

    /* If we found missing notes, we will find the missing note as close to the neck as possible.
      TODO: Change the function to focus on better hand positioning rather than close to neck
    */
    if (missingNotes.length){
      //console.log("Missing notes are " + missingNotes);
      //console.log("Dupe notes are " + dupeNotes);
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
      //console.log("Now the frets are " + fretArr);
    }
    
//    console.log("-------------");
    return fretArr;
  }

}
