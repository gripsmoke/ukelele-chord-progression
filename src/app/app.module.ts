import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ChordsComponent } from './chords/chords.component';
import { PianoComponent } from './piano/piano.component';
import { SettingsComponent } from './settings/settings.component';
import { UkeStringComponent } from './uke/uke-string/uke-string.component';
import { UkeleleComponent } from './uke/ukelele/ukelele.component';

import { SettingsService } from './settings.service';

import { ChordnameSimplifierPipe } from './pipes/chordname-simplifier.pipe';
import { InfoCopyrightComponent } from './info-copyright/info-copyright.component';
import { ChordTableComponent } from './chords/chordTable/chord-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ChordsComponent,
    PianoComponent,
    SettingsComponent,
    ChordnameSimplifierPipe,
    UkeStringComponent,
    UkeleleComponent,
    InfoCopyrightComponent,
    ChordTableComponent
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
