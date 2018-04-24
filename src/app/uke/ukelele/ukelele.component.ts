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
    var retArr = Array();
    var i:number;
    var self = this;
    for(i=0;i<4;i++){
      retArr.push(this.strings[i].findBestFret(chordNotes));
    }
    console.log(chordNotes);
    console.log(retArr);
    console.log("-------------");
    return retArr;
  }

}
