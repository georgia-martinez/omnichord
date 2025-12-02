import { Chord, CHORD_LETTER, CHORD_TYPE, CHORDS, CHROMATIC, handleEnharmonics, Note, NOTES } from "./chords";

const noteToFreq = (notes: Note[]): number[] =>
  notes.map(n => NOTES[n.name][n.octave]);

const generateArpeggio = (notes: Note[]) => {
  const result: Note[] = [];

  const repetitions = 12 / notes.length;
  const startingOctave = 3;

  for (let i = 0; i < repetitions; i++) {
    const octaveShift = i;

    const shifted = notes.map(n => ({
      name: n.name,
      octave: startingOctave + (n.octave - notes[0].octave) + octaveShift,
    }));

    result.push(...shifted);
  }

  return result;
};

export const getArpeggio = (chord: Chord): number[] => {
  const chordNotes = CHORDS[handleEnharmonics(chord.root)][chord.type];
  const arpeggioNotes = generateArpeggio(chordNotes);
  const frequencies = noteToFreq(arpeggioNotes);
  return frequencies;
}

export const ARPEGGIOS: Record<CHORD_LETTER, Record<CHORD_TYPE, number[]>> =
  CHROMATIC.reduce((acc, root) => {
    acc[root] = {} as Record<CHORD_TYPE, number[]>;

    for (const type of Object.values(CHORD_TYPE)) {
      const chordNotes = CHORDS[root][type];
      const arpeggioNotes = generateArpeggio(chordNotes);
      const frequencies = noteToFreq(arpeggioNotes);

      acc[root][type] = frequencies;
    }

    return acc;
  }, {} as Record<CHORD_LETTER, Record<CHORD_TYPE, number[]>>);