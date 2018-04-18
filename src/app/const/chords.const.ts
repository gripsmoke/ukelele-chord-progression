import {NgModule} from '@angular/core';
import {Chord} from '../chord';

@NgModule({
    imports: [],
    declarations: [],
    bootstrap: []
})
export class Constants {
    public static SCALE: string[]= [
        'C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'
    ];
    public static CHORDS_MAP: Chord[]= [
        {name: 'major',     notes: [0,4,7]},
        {name: 'minor',     notes: [0,3,7]},
        {name: 'dim',       notes: [0,3,6]},
        {name: 'major7',    notes: [0,4,7,11]},
        {name: 'minor7',    notes: [0,3,7,10]},
        {name: '5',         notes: [0,7]},
        {name: '7',         notes: [0,4,7,10]},
        {name: 'dim7',      notes: [0,3,6,9]},
        {name: 'sus2',      notes: [0,2,7]},
        {name: 'sus4',      notes: [0,5,7]},
        {name: '7sus4',     notes: [0,5,7,10]},
        {name: '6',         notes: [0,4,7,9]},
        {name: 'm6',        notes: [0,3,7,9]},
        {name: '9',         notes: [0,2,4,10]}
    ];

    public static CHORDS_MAJOR_SCALE: string[]=[
        'major', //TODO: Replace 'major' with empty strings
        ,
        'minor',
        ,
        'minor',
        'major',
        ,
        'major',
        ,
        'minor',
        ,
        'dim'
    ];
    public static CHORDS_MAJOR_ROMAN: string[]=[
        'I','ii','iii','IV','V','vi','vii*'
    ];
    public static CHORDS_MINOR_ROMAN: string[]=[
        'I','ii*','iii','IV','V','vi','vii'
    ];

    public static CHORDS_MINOR_SCALE: string[]=[
        'minor',
        ,
        'dim',
        'major',
        ,
        'minor',
        ,
        'minor',
        'major',
        ,
        'major'
    ];
}