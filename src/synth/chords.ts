export enum CHORD_LETTER {
  C = "C",
  Db = "Db",
  D = "D",
  Eb = "Eb",
  E = "E",
  F = "F",
  Fs = "F#",
  G = "G",
  Gs = "G#",
  A = "A",
  Bb = "Bb",
  B = "B",
}

export enum CHORD_QUALITY {
  MAJOR = "MAJOR",
  // Future: MINOR, DIMINISHED, AUGMENTED, etc.
}

export enum CHORD_TYPE {
  C_MAJOR = "C MAJOR",
  D_FLAT_MAJOR = "Db MAJOR",
  D_MAJOR = "D MAJOR",
  E_FLAT_MAJOR = "Eb MAJOR",
  E_MAJOR = "E MAJOR",
  F_MAJOR = "F MAJOR",
  F_SHARP_MAJOR = "F# MAJOR",
  G_MAJOR = "G MAJOR",
  G_SHARP_MAJOR = "G# MAJOR",
  A_MAJOR = "A MAJOR",
  B_FLAT_MAJOR = "Bb MAJOR",
  B_MAJOR = "B MAJOR",
}

// Mapping from CHORD_LETTER to CHORD_TYPE for each quality
// This structure allows easy extension to other qualities later
export const CHORD_LETTER_TO_TYPE: Record<CHORD_QUALITY, Record<CHORD_LETTER, CHORD_TYPE>> = {
  [CHORD_QUALITY.MAJOR]: {
    [CHORD_LETTER.C]: CHORD_TYPE.C_MAJOR,
    [CHORD_LETTER.Db]: CHORD_TYPE.D_FLAT_MAJOR,
    [CHORD_LETTER.D]: CHORD_TYPE.D_MAJOR,
    [CHORD_LETTER.Eb]: CHORD_TYPE.E_FLAT_MAJOR,
    [CHORD_LETTER.E]: CHORD_TYPE.E_MAJOR,
    [CHORD_LETTER.F]: CHORD_TYPE.F_MAJOR,
    [CHORD_LETTER.Fs]: CHORD_TYPE.F_SHARP_MAJOR,
    [CHORD_LETTER.G]: CHORD_TYPE.G_MAJOR,
    [CHORD_LETTER.Gs]: CHORD_TYPE.G_SHARP_MAJOR,
    [CHORD_LETTER.A]: CHORD_TYPE.A_MAJOR,
    [CHORD_LETTER.Bb]: CHORD_TYPE.B_FLAT_MAJOR,
    [CHORD_LETTER.B]: CHORD_TYPE.B_MAJOR,
  },
  // Future: Add other qualities here
  // [CHORD_QUALITY.MINOR]: { ... },
  // [CHORD_QUALITY.DIMINISHED]: { ... },
};

// Helper function to get CHORD_TYPE from CHORD_LETTER and quality
export function getChordType(
  letter: CHORD_LETTER,
  quality: CHORD_QUALITY = CHORD_QUALITY.MAJOR
): CHORD_TYPE {
  return CHORD_LETTER_TO_TYPE[quality][letter];
}

export const FREQS: Record<string, number> = {
  C4: 261.63,
  Cs4: 277.18,
  D4: 293.66,
  Ds4: 311.13,
  E4: 329.63,
  F4: 349.23,
  Fs4: 369.99,
  G4: 392.0,
  Gs4: 415.30,
  A4: 440.0,
  As4: 466.16,
  B4: 493.88,
  C5: 523.25,
  Cs5: 554.37,
  D5: 587.33,
  Ds5: 622.25,
  E5: 659.26,
  F5: 698.46,
  Fs5: 739.99,
  G5: 783.99,
  Gs5: 830.61,
  A5: 880.0,
  As5: 932.33,
  B5: 987.77,
};

export const CHORDS = {
  [CHORD_TYPE.C_MAJOR]:      [FREQS.C4, FREQS.E4, FREQS.G4],
  [CHORD_TYPE.D_FLAT_MAJOR]: [FREQS.Cs4, FREQS.F4, FREQS.Gs4],
  [CHORD_TYPE.D_MAJOR]:      [FREQS.D4, FREQS.Fs4, FREQS.A4],
  [CHORD_TYPE.E_FLAT_MAJOR]: [FREQS.Ds4, FREQS.G4, FREQS.As4],
  [CHORD_TYPE.E_MAJOR]:      [FREQS.E4, FREQS.Gs4, FREQS.B4],
  [CHORD_TYPE.F_MAJOR]:      [FREQS.F4, FREQS.A4, FREQS.C4],
  [CHORD_TYPE.F_SHARP_MAJOR]: [FREQS.Fs4, FREQS.As4, FREQS.Cs4],
  [CHORD_TYPE.G_MAJOR]:      [FREQS.G4, FREQS.B4, FREQS.D4],
  [CHORD_TYPE.G_SHARP_MAJOR]: [FREQS.Gs4, FREQS.C5, FREQS.Ds4],
  [CHORD_TYPE.A_MAJOR]:      [FREQS.A4, FREQS.Cs4, FREQS.E4],
  [CHORD_TYPE.B_FLAT_MAJOR]: [FREQS.As4, FREQS.D4, FREQS.F4],
  [CHORD_TYPE.B_MAJOR]:      [FREQS.B4, FREQS.Ds4, FREQS.Fs4]
};

// Order of chords - easily reorderable by changing this array
export const CHORD_ORDER = [
  CHORD_LETTER.Db, 
  CHORD_LETTER.Gs, 
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
];
