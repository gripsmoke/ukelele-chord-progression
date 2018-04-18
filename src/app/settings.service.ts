import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SettingsService {
  private rootnoteSource = new BehaviorSubject<string>("C");
  private keymodeSource = new BehaviorSubject<string>("minor");
  private tuningSource = new BehaviorSubject<string>("gCEA");
  private righthandSource = new BehaviorSubject<boolean>(true);

  currentRoot = this.rootnoteSource.asObservable();
  currentMode = this.keymodeSource.asObservable();
  currentTune = this.tuningSource.asObservable();
  currentHand = this.righthandSource.asObservable();
  
  constructor() { }

  changeNote(note:string){
    console.log('In settings service changing note');
    this.rootnoteSource.next(note);
  }
  changeMode(mode:string){
    console.log('In settings service changing mode');
    this.keymodeSource.next(mode);
  }
  changeTune(tune:string){
    console.log('In settings service changing tune');
    this.tuningSource.next(tune);
  }
  changeHand(hand:boolean){
    console.log('In settings service changing hand');
    this.righthandSource.next(hand);
  }
}
