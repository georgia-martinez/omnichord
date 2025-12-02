export enum CHORD_LETTER {
  C = "C",
  Cs = "Cs",
  Db = "Db",
  D = "D",
  Ds = "Ds",
  Eb = "Eb",
  E = "E",
  F = "F",
  Fs = "F#",
  Gb = "Gb",
  G = "G",
  Gs = "Gs",
  Ab = "Ab",
  A = "A",
  As = "As",
  Bb = "Bb",
  B = "B",
}

export const CHROMATIC: CHORD_LETTER[] = [
  CHORD_LETTER.C,
  CHORD_LETTER.Cs,
  CHORD_LETTER.D,
  CHORD_LETTER.Ds,
  CHORD_LETTER.E,
  CHORD_LETTER.F,
  CHORD_LETTER.Fs,
  CHORD_LETTER.G,
  CHORD_LETTER.Gs,
  CHORD_LETTER.A,
  CHORD_LETTER.As,
  CHORD_LETTER.B,
] as const;

export enum CHORD_TYPE {
  MAJOR = "MAJOR",
  MINOR = "MINOR",
  DIMINISHED = "DIMINISHED",
  DOMINANT_7 = "DOMINANT 7",
  MAJOR_7 = "MAJOR 7",
  MINOR_7 = "MINOR 7",
}

export interface Note {
  name: CHORD_LETTER;
  octave: number;
}

export interface Chord {
  root: CHORD_LETTER;
  type: CHORD_TYPE;
}

export const CHORD_INTERVALS: Record<CHORD_TYPE, number[]> = {
  [CHORD_TYPE.MAJOR]: [0, 4, 7],
  [CHORD_TYPE.MINOR]: [0, 3, 7],
  [CHORD_TYPE.DIMINISHED]: [0, 3, 6],
  [CHORD_TYPE.DOMINANT_7]: [0, 4, 7, 10],
  [CHORD_TYPE.MAJOR_7]: [0, 4, 7, 11],
  [CHORD_TYPE.MINOR_7]: [0, 3, 7, 10],
} as const;

function getNote(rootIndex: number, octave: number, interval: number): Note {
  const newIndex = rootIndex + interval;

  return {
    name: CHROMATIC[newIndex % CHROMATIC.length],
    octave: octave + Math.floor(newIndex / CHROMATIC.length),
  };
}

export function buildChord(
  root: CHORD_LETTER,
  type: keyof typeof CHORD_INTERVALS,
  rootOctave = 4
): Note[] {
  if ([CHORD_LETTER.A, CHORD_LETTER.Bb, CHORD_LETTER.B].includes(root)) {
    rootOctave = 3;
  }

  const rootIndex = CHROMATIC.indexOf(root);

  return CHORD_INTERVALS[type].map(interval =>
    getNote(rootIndex, rootOctave, interval)
  );
}

export const CHORDS: Record<CHORD_LETTER, Record<CHORD_TYPE, Note[]>> = CHROMATIC.reduce((acc, note) => {
  acc[note] = {} as Record<CHORD_TYPE, Note[]>;

  for (const q of Object.values(CHORD_TYPE)) {
    acc[note][q] = buildChord(note, q);
  }

  return acc;
}, {} as Record<CHORD_LETTER, Record<CHORD_TYPE, Note[]>>);

export const getChordQualityKey = (pressedChords: CHORD_TYPE[]) => {
  return pressedChords.slice().sort().join("-");
}

export const GET_CHORD_QUALITY: Record<string, CHORD_TYPE> = {
  [getChordQualityKey([CHORD_TYPE.MAJOR])]: CHORD_TYPE.MAJOR,
  [getChordQualityKey([CHORD_TYPE.MINOR])]: CHORD_TYPE.MINOR,
  [getChordQualityKey([CHORD_TYPE.MAJOR, CHORD_TYPE.MINOR])]: CHORD_TYPE.DIMINISHED,
  [getChordQualityKey([CHORD_TYPE.DOMINANT_7])]: CHORD_TYPE.DOMINANT_7,
  [getChordQualityKey([CHORD_TYPE.MAJOR, CHORD_TYPE.DOMINANT_7])]: CHORD_TYPE.MAJOR_7,
  [getChordQualityKey([CHORD_TYPE.MINOR, CHORD_TYPE.DOMINANT_7])]: CHORD_TYPE.MINOR_7,
} as const;

export const handleEnharmonics = (root: CHORD_LETTER) => {
  switch (root) {
    case CHORD_LETTER.Ab:
      return CHORD_LETTER.Gs;
    case CHORD_LETTER.Db:
      return CHORD_LETTER.Cs;
    case CHORD_LETTER.Bb:
      return CHORD_LETTER.As;
    case CHORD_LETTER.Eb:
      return CHORD_LETTER.Ds;
    case CHORD_LETTER.Gb:
      return CHORD_LETTER.Fs;
    default:
      return root;
   }
}

export const getChord = (root: CHORD_LETTER, quality: CHORD_TYPE) => {
  return CHORDS[handleEnharmonics(root)][quality];
}

export const NOTES: Record<CHORD_LETTER, Record<number, number>> = {
  [CHORD_LETTER.C]:   { 2: 65.41,   3: 130.81,  4: 261.63,  5: 523.25,  6: 1046.50, 7: 2093.00 },
  [CHORD_LETTER.Cs]:  { 2: 69.30,   3: 138.59,  4: 277.18,  5: 554.37,  6: 1108.73, 7: 2217.46 },
  [CHORD_LETTER.Db]:  { 2: 69.30,   3: 138.59,  4: 277.18,  5: 554.37,  6: 1108.73, 7: 2217.46 },
  [CHORD_LETTER.D]:   { 2: 73.42,   3: 146.83,  4: 293.66,  5: 587.33,  6: 1174.66, 7: 2349.32 },
  [CHORD_LETTER.Ds]:  { 2: 77.78,   3: 155.56,  4: 311.13,  5: 622.25,  6: 1244.51, 7: 2489.02 },
  [CHORD_LETTER.Eb]:  { 2: 77.78,   3: 155.56,  4: 311.13,  5: 622.25,  6: 1244.51, 7: 2489.02 },
  [CHORD_LETTER.E]:   { 2: 82.41,   3: 164.81,  4: 329.63,  5: 659.26,  6: 1318.51, 7: 2637.02 },
  [CHORD_LETTER.F]:   { 2: 87.31,   3: 174.61,  4: 349.23,  5: 698.46,  6: 1396.91, 7: 2793.83 },
  [CHORD_LETTER.Fs]:  { 2: 92.50,   3: 185.00,  4: 369.99,  5: 739.99,  6: 1479.98, 7: 2959.96 },
  [CHORD_LETTER.Gb]:  { 2: 92.50,   3: 185.00,  4: 369.99,  5: 739.99,  6: 1479.98, 7: 2959.96 },
  [CHORD_LETTER.G]:   { 2: 98.00,   3: 196.00,  4: 392.00,  5: 783.99,  6: 1567.98, 7: 3135.96 },
  [CHORD_LETTER.Gs]:  { 2: 103.83,  3: 207.65,  4: 415.30,  5: 830.61,  6: 1661.22, 7: 3322.44 },
  [CHORD_LETTER.Ab]:  { 2: 103.83,  3: 207.65,  4: 415.30,  5: 830.61,  6: 1661.22, 7: 3322.44 },
  [CHORD_LETTER.As]:  { 2: 116.54,  3: 233.08,  4: 466.16,  5: 932.33,  6: 1864.66, 7: 3729.31 },
  [CHORD_LETTER.A]:   { 2: 110.00,  3: 220.00,  4: 440.00,  5: 880.00,  6: 1760.00, 7: 3520.00 },
  [CHORD_LETTER.Bb]:  { 2: 116.54,  3: 233.08,  4: 466.16,  5: 932.33,  6: 1864.66, 7: 3729.31 },
  [CHORD_LETTER.B]:   { 2: 123.47,  3: 246.94,  4: 493.88,  5: 987.77,  6: 1975.53, 7: 3951.07 },
} as const;

export enum CHORD_QUALITY {
  MAJOR = "MAJOR",
  MINOR = "MINOR",
  DIMINISHED = "DIMINISHED",
  DOMINANT_7 = "DOMINANT 7",
}

export const CHORD_LETTER_ORDER = [
  CHORD_LETTER.Db, 
  CHORD_LETTER.Ab, 
  CHORD_LETTER.Eb, 
  CHORD_LETTER.Bb, 
  CHORD_LETTER.F, 
  CHORD_LETTER.C, 
  CHORD_LETTER.G, 
  CHORD_LETTER.D, 
  CHORD_LETTER.A, 
  CHORD_LETTER.E, 
  CHORD_LETTER.B, 
  CHORD_LETTER.Fs
] as const;

export const CHORD_TYPE_ORDER: CHORD_TYPE[] = [
  CHORD_TYPE.MAJOR,
  CHORD_TYPE.MINOR,
  CHORD_TYPE.DOMINANT_7,
] as const;

export const CHORD_TYPE_LABELS: Partial<Record<CHORD_TYPE, string>> = {
  [CHORD_TYPE.MAJOR]: "Major",
  [CHORD_TYPE.MINOR]: "Minor",
  [CHORD_TYPE.DOMINANT_7]: "7th"
} as const;