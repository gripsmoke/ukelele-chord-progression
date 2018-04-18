import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ChordsComponent } from './chords/chords.component';
import { PianoComponent } from './piano/piano.component';

import { RootnoteService } from './rootnote.service';
@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ChordsComponent,
    PianoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RootnoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
