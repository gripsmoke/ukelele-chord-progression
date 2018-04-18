import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SettingsService {
  private rootnoteSource = new BehaviorSubject<string>("C");
  private keymodeSource = new BehaviorSubject<string>("major");
  private tuningSource = new BehaviorSubject<string>("gCEA");
  private righthandSource = new BehaviorSubject<boolean>(true);

  currentRoot = this.rootnoteSource.asObservable();
  currentMode = this.keymodeSource.asObservable();
  currentTune = this.tuningSource.asObservable();
  currentHand = this.righthandSource.asObservable();
  
  constructor() { }

  changeNote(note:string){
    console.log('In root note service changing note');
    this.rootnoteSource.next(note);
  }
}
