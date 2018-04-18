export class Chord {
    name: string; // a name includes the chord quality (major/minor/aug/dim), interval (5,7), and other additional things (add2, sus4, etc)
    notes: number[]; // an array of numbers representing the number of semitones from the root that makes up the chord.
}
