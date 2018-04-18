import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ChordsComponent } from './chords/chords.component';
import { PianoComponent } from './piano/piano.component';

import { SettingsService } from './settings.service';
import { SettingsComponent } from './settings/settings.component';
import { ChordnameSimplifierPipe } from './pipes/chordname-simplifier.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ChordsComponent,
    PianoComponent,
    SettingsComponent,
    ChordnameSimplifierPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent],
  exports: [SettingsComponent, ChordnameSimplifierPipe, ChordnameSimplifierPipe]
})
export class AppModule { }
