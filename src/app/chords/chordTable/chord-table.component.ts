import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chord-table',
  templateUrl: './chord-table.component.html',
  styleUrls: ['./chord-table.component.css']
})
export class ChordTableComponent implements OnInit {
  romanNumeral:string;
  chordName:string;
  notes:string;
  frets:string[];

  constructor() { }

  ngOnInit() {
  }

}
