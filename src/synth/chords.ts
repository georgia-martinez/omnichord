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

export enum CHORD_TYPE {
  C_MAJOR = "C MAJOR",
  C_MINOR = "C MINOR",
  C_DIMINISHED = "C DIMINISHED",
  C_DOMINANT_7 = "C DOMINANT 7",
  C_MAJOR_7 = "C MAJOR 7",
  C_MINOR_7 = "C MINOR 7",

  D_FLAT_MAJOR = "Db MAJOR",
  D_FLAT_MINOR = "Db MINOR",
  D_FLAT_DIMINISHED = "Db DIMINISHED",
  D_FLAT_DOMINANT_7 = "Db DOMINANT 7",
  D_FLAT_MAJOR_7 = "Db MAJOR 7",
  D_FLAT_MINOR_7 = "Db MINOR 7",

  D_MAJOR = "D MAJOR",
  D_MINOR = "D MINOR",
  D_DIMINISHED = "D DIMINISHED",
  D_DOMINANT_7 = "D DOMINANT 7",
  D_MAJOR_7 = "D MAJOR 7",
  D_MINOR_7 = "D MINOR 7",

  E_FLAT_MAJOR = "Eb MAJOR",
  E_FLAT_MINOR = "Eb MINOR",
  E_FLAT_DIMINISHED = "Eb DIMINISHED",
  E_FLAT_DOMINANT_7 = "Eb DOMINANT 7",
  E_FLAT_MAJOR_7 = "Eb MAJOR 7",
  E_FLAT_MINOR_7 = "Eb MINOR 7",

  E_MAJOR = "E MAJOR",
  E_MINOR = "E MINOR",
  E_DIMINISHED = "E DIMINISHED",
  E_DOMINANT_7 = "E DOMINANT 7",
  E_MAJOR_7 = "E MAJOR 7",
  E_MINOR_7 = "E MINOR 7",

  F_MAJOR = "F MAJOR",
  F_MINOR = "F MINOR",
  F_DIMINISHED = "F DIMINISHED",
  F_DOMINANT_7 = "F DOMINANT 7",
  F_MAJOR_7 = "F MAJOR 7",
  F_MINOR_7 = "F MINOR 7",

  F_SHARP_MAJOR = "F# MAJOR",
  F_SHARP_MINOR = "F# MINOR",
  F_SHARP_DIMINISHED = "F# DIMINISHED",
  F_SHARP_DOMINANT_7 = "F# DOMINANT 7",
  F_SHARP_MAJOR_7 = "F SHARP MAJOR 7",
  F_SHARP_MINOR_7 = "F SHARP MINOR 7",

  G_MAJOR = "G MAJOR",
  G_MINOR = "G MINOR",
  G_DIMINISHED = "G DIMINISHED",
  G_DOMINANT_7 = "G DOMINANT 7",
  G_MAJOR_7 = "G MAJOR 7",
  G_MINOR_7 = "G MINOR 7",

  A_FLAT_MAJOR = "Ab MAJOR",
  A_FLAT_MINOR = "Ab MINOR",
  A_FLAT_DIMINISHED = "Ab DIMINISHED",
  A_FLAT_DOMINANT_7 = "Ab DOMINANT 7",
  A_FLAT_MAJOR_7 = "Ab MAJOR 7",
  A_FLAT_MINOR_7 = "Ab MINOR 7",

  A_MINOR = "A MINOR",
  A_MAJOR = "A MAJOR",
  A_DIMINISHED = "A DIMINISHED",
  A_DOMINANT_7 = "A DOMINANT 7",
  A_MAJOR_7 = "A MAJOR 7",
  A_MINOR_7 = "A MINOR 7",

  B_FLAT_MAJOR = "Bb MAJOR",
  B_FLAT_MINOR = "Bb MINOR",
  B_FLAT_DIMINISHED = "Bb DIMINISHED",
  B_FLAT_DOMINANT_7 = "Bb DOMINANT 7",
  B_FLAT_MAJOR_7 = "Bb MAJOR 7",
  B_FLAT_MINOR_7 = "Bb MINOR 7",

  B_MINOR = "B MINOR",
  B_MAJOR = "B MAJOR",
  B_DIMINISHED = "B DIMINISHED",
  B_DOMINANT_7 = "B DOMINANT 7",
  B_MAJOR_7 = "B MAJOR 7",
  B_MINOR_7 = "B MINOR 7",
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

export interface Note {
  name: CHORD_LETTER;
  octave: number;
}

export const CHORDS: Record<CHORD_TYPE, Note[]> = {
  [CHORD_TYPE.C_MAJOR]: [{ name: CHORD_LETTER.C, octave: 4 }, { name: CHORD_LETTER.E, octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }],
  [CHORD_TYPE.C_MINOR]: [{ name: CHORD_LETTER.C, octave: 4 }, { name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }],
  [CHORD_TYPE.C_DIMINISHED]: [{ name: CHORD_LETTER.C, octave: 4 }, { name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.Gb, octave: 4 }],
  [CHORD_TYPE.C_DOMINANT_7]: [{ name: CHORD_LETTER.C, octave: 4 }, { name: CHORD_LETTER.E, octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }],
  [CHORD_TYPE.C_MAJOR_7]: [{ name: CHORD_LETTER.C, octave: 4 }, { name: CHORD_LETTER.E, octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }, { name: CHORD_LETTER.B, octave: 4 }],
  [CHORD_TYPE.C_MINOR_7]: [{ name: CHORD_LETTER.C, octave: 4 }, { name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }],

  [CHORD_TYPE.D_FLAT_MAJOR]:      [{ name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }],
  [CHORD_TYPE.D_FLAT_MINOR]:      [{ name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.E, octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }],
  [CHORD_TYPE.D_FLAT_DIMINISHED]: [{ name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.E, octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }],
  [CHORD_TYPE.D_FLAT_DOMINANT_7]: [{ name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }],
  [CHORD_TYPE.D_FLAT_MAJOR_7]: [{ name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.C,  octave: 4 }],
  [CHORD_TYPE.D_FLAT_MINOR_7]: [{ name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.E, octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.B, octave: 4 }],

  [CHORD_TYPE.D_MAJOR]:      [{ name: CHORD_LETTER.D, octave: 4 }, { name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.A, octave: 4 }],
  [CHORD_TYPE.D_MINOR]:      [{ name: CHORD_LETTER.D, octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.A, octave: 4 }],
  [CHORD_TYPE.D_DIMINISHED]: [{ name: CHORD_LETTER.D, octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }],
  [CHORD_TYPE.D_DOMINANT_7]: [{ name: CHORD_LETTER.D, octave: 4 }, { name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.A, octave: 4 }, { name: CHORD_LETTER.C, octave: 5 }],
  [CHORD_TYPE.D_MAJOR_7]: [{ name: CHORD_LETTER.D, octave: 4 }, { name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.A, octave: 4 }, { name: CHORD_LETTER.Cs, octave: 5 }],
  [CHORD_TYPE.D_MINOR_7]: [{ name: CHORD_LETTER.D, octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.A, octave: 4 }, { name: CHORD_LETTER.C, octave: 5 }],

  [CHORD_TYPE.E_FLAT_MAJOR]:      [{ name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }],
  [CHORD_TYPE.E_FLAT_MINOR]:      [{ name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.Gb, octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }],
  [CHORD_TYPE.E_FLAT_DIMINISHED]: [{ name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.Gb, octave: 4 }, { name: CHORD_LETTER.A,  octave: 4 }],
  [CHORD_TYPE.E_FLAT_DOMINANT_7]: [{ name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }, { name: CHORD_LETTER.Db, octave: 5 }],
  [CHORD_TYPE.E_FLAT_MAJOR_7]: [{ name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }, { name: CHORD_LETTER.D, octave: 5 }],
  [CHORD_TYPE.E_FLAT_MINOR_7]: [{ name: CHORD_LETTER.Eb, octave: 4 }, { name: CHORD_LETTER.Gb, octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }, { name: CHORD_LETTER.Db, octave: 5 }],

  [CHORD_TYPE.E_MAJOR]:      [{ name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.Gs, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }],
  [CHORD_TYPE.E_MINOR]:      [{ name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }],
  [CHORD_TYPE.E_DIMINISHED]: [{ name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }],
  [CHORD_TYPE.E_DOMINANT_7]: [{ name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.Gs, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.D, octave: 5 }],
  [CHORD_TYPE.E_MAJOR_7]: [{ name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.Gs, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.Ds, octave: 5 }],
  [CHORD_TYPE.E_MINOR_7]: [{ name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.D, octave: 5 }],

  [CHORD_TYPE.F_MAJOR]:      [{ name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.A,  octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }],
  [CHORD_TYPE.F_MINOR]:      [{ name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }],
  [CHORD_TYPE.F_DIMINISHED]: [{ name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }],
  [CHORD_TYPE.F_DOMINANT_7]: [{ name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.A,  octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }, { name: CHORD_LETTER.Eb, octave: 5 }],
  [CHORD_TYPE.F_MAJOR_7]: [{ name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.A,  octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }, { name: CHORD_LETTER.E, octave: 5 }],
  [CHORD_TYPE.F_MINOR_7]: [{ name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }, { name: CHORD_LETTER.Eb, octave: 5 }],

  [CHORD_TYPE.F_SHARP_MAJOR]:      [{ name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.As, octave: 4 }, { name: CHORD_LETTER.Cs, octave: 5 }],
  [CHORD_TYPE.F_SHARP_MINOR]:      [{ name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.A,  octave: 4 }, { name: CHORD_LETTER.Cs, octave: 5 }],
  [CHORD_TYPE.F_SHARP_DIMINISHED]: [{ name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.A,  octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }],
  [CHORD_TYPE.F_SHARP_DOMINANT_7]: [{ name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.As, octave: 4 }, { name: CHORD_LETTER.Cs, octave: 5 }, { name: CHORD_LETTER.E, octave: 5 }],
  [CHORD_TYPE.F_SHARP_MAJOR_7]: [{ name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.As, octave: 4 }, { name: CHORD_LETTER.Cs, octave: 5 }, { name: CHORD_LETTER.F, octave: 5 }],
  [CHORD_TYPE.F_SHARP_MINOR_7]: [{ name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.A,  octave: 4 }, { name: CHORD_LETTER.Cs, octave: 5 }, { name: CHORD_LETTER.E, octave: 5 }],

  [CHORD_TYPE.G_MAJOR]:      [{ name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.D,  octave: 5 }],
  [CHORD_TYPE.G_MINOR]:      [{ name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }, { name: CHORD_LETTER.D,  octave: 5 }],
  [CHORD_TYPE.G_DIMINISHED]: [{ name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }, { name: CHORD_LETTER.Db, octave: 5 }],
  [CHORD_TYPE.G_DOMINANT_7]: [{ name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.D,  octave: 5 }, { name: CHORD_LETTER.F, octave: 5 }],
  [CHORD_TYPE.G_MAJOR_7]: [{ name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.D,  octave: 5 }, { name: CHORD_LETTER.Fs, octave: 5 }],
  [CHORD_TYPE.G_MINOR_7]: [{ name: CHORD_LETTER.G,  octave: 4 }, { name: CHORD_LETTER.Bb, octave: 4 }, { name: CHORD_LETTER.D,  octave: 5 }, { name: CHORD_LETTER.F, octave: 5 }],

  [CHORD_TYPE.A_FLAT_MAJOR]:      [{ name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }, { name: CHORD_LETTER.Eb, octave: 5 }],
  [CHORD_TYPE.A_FLAT_MINOR]:      [{ name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.Eb, octave: 5 }],
  [CHORD_TYPE.A_FLAT_DIMINISHED]: [{ name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.D,  octave: 5 }],
  [CHORD_TYPE.A_FLAT_DOMINANT_7]: [{ name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }, { name: CHORD_LETTER.Eb, octave: 5 }, { name: CHORD_LETTER.Gb, octave: 5 }],
  [CHORD_TYPE.A_FLAT_MAJOR_7]: [{ name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.C,  octave: 5 }, { name: CHORD_LETTER.Eb, octave: 5 }, { name: CHORD_LETTER.G, octave: 5 }],
  [CHORD_TYPE.A_FLAT_MINOR_7]: [{ name: CHORD_LETTER.Ab, octave: 4 }, { name: CHORD_LETTER.B,  octave: 4 }, { name: CHORD_LETTER.Eb, octave: 5 }, { name: CHORD_LETTER.Gb, octave: 5 }],

  [CHORD_TYPE.A_MAJOR]:      [{ name: CHORD_LETTER.A,  octave: 3 }, { name: CHORD_LETTER.Cs, octave: 4 }, { name: CHORD_LETTER.E,  octave: 4 }],
  [CHORD_TYPE.A_MINOR]:      [{ name: CHORD_LETTER.A,  octave: 3 }, { name: CHORD_LETTER.C,  octave: 4 }, { name: CHORD_LETTER.E,  octave: 4 }],
  [CHORD_TYPE.A_DIMINISHED]: [{ name: CHORD_LETTER.A,  octave: 3 }, { name: CHORD_LETTER.C,  octave: 4 }, { name: CHORD_LETTER.Eb, octave: 4 }],
  [CHORD_TYPE.A_DOMINANT_7]: [{ name: CHORD_LETTER.A,  octave: 3 }, { name: CHORD_LETTER.Cs, octave: 4 }, { name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }],
  [CHORD_TYPE.A_MAJOR_7]: [{ name: CHORD_LETTER.A,  octave: 3 }, { name: CHORD_LETTER.Cs, octave: 4 }, { name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.Gs, octave: 4 }],
  [CHORD_TYPE.A_MINOR_7]: [{ name: CHORD_LETTER.A,  octave: 3 }, { name: CHORD_LETTER.C, octave: 4 }, { name: CHORD_LETTER.E,  octave: 4 }, { name: CHORD_LETTER.G, octave: 4 }],

  [CHORD_TYPE.B_FLAT_MAJOR]:      [{ name: CHORD_LETTER.Bb, octave: 3 }, { name: CHORD_LETTER.D,  octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }],
  [CHORD_TYPE.B_FLAT_MINOR]:      [{ name: CHORD_LETTER.Bb, octave: 3 }, { name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }],
  [CHORD_TYPE.B_FLAT_DIMINISHED]: [{ name: CHORD_LETTER.Bb, octave: 3 }, { name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.E,  octave: 4 }],
  [CHORD_TYPE.B_FLAT_DOMINANT_7]: [{ name: CHORD_LETTER.Bb, octave: 3 }, { name: CHORD_LETTER.D,  octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }],
  [CHORD_TYPE.B_FLAT_MAJOR_7]: [{ name: CHORD_LETTER.Bb, octave: 3 }, { name: CHORD_LETTER.D,  octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.A, octave: 4 }],
  [CHORD_TYPE.B_FLAT_MINOR_7]: [{ name: CHORD_LETTER.Bb, octave: 3 }, { name: CHORD_LETTER.Db, octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }, { name: CHORD_LETTER.Ab, octave: 4 }],

  [CHORD_TYPE.B_MAJOR]:      [{ name: CHORD_LETTER.B,  octave: 3 }, { name: CHORD_LETTER.Ds, octave: 4 }, { name: CHORD_LETTER.Fs, octave: 4 }],
  [CHORD_TYPE.B_MINOR]:      [{ name: CHORD_LETTER.B,  octave: 3 }, { name: CHORD_LETTER.D,  octave: 4 }, { name: CHORD_LETTER.Fs, octave: 4 }],
  [CHORD_TYPE.B_DIMINISHED]: [{ name: CHORD_LETTER.B,  octave: 3 }, { name: CHORD_LETTER.D,  octave: 4 }, { name: CHORD_LETTER.F,  octave: 4 }],
  [CHORD_TYPE.B_DOMINANT_7]: [{ name: CHORD_LETTER.B,  octave: 3 }, { name: CHORD_LETTER.Ds, octave: 4 }, { name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.A, octave: 4 }],
  [CHORD_TYPE.B_MAJOR_7]: [{ name: CHORD_LETTER.B,  octave: 3 }, { name: CHORD_LETTER.Ds, octave: 4 }, { name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.As, octave: 4 }],
  [CHORD_TYPE.B_MINOR_7]: [{ name: CHORD_LETTER.B,  octave: 3 }, { name: CHORD_LETTER.D, octave: 4 }, { name: CHORD_LETTER.Fs, octave: 4 }, { name: CHORD_LETTER.A, octave: 4 }],
} as const;

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

const noteToFreq = (notes: Note[]): number[] =>
  notes.map(n => NOTES[n.name][n.octave]);

export const ARPEGGIOS: Record<CHORD_TYPE, number[]> =
  Object.values(CHORD_TYPE).reduce((acc, chordType) => {
    const chordNotes = CHORDS[chordType];
    const arpeggioNotes = generateArpeggio(chordNotes);
    const frequencies = noteToFreq(arpeggioNotes);

    acc[chordType] = frequencies;
    return acc;
  }, {} as Record<CHORD_TYPE, number[]>);

export enum CHORD_QUALITY {
  MAJOR = "MAJOR",
  MINOR = "MINOR",
  DIMINISHED = "DIMINISHED",
  DOMINANT_7 = "DOMINANT 7",
}

export const CHORD_ORDER: Partial<Record<CHORD_QUALITY, CHORD_TYPE[]>> = {
  [CHORD_QUALITY.MAJOR]: [CHORD_TYPE.D_FLAT_MAJOR, CHORD_TYPE.A_FLAT_MAJOR, CHORD_TYPE.E_FLAT_MAJOR, CHORD_TYPE.B_FLAT_MAJOR, CHORD_TYPE.F_MAJOR, CHORD_TYPE.C_MAJOR, CHORD_TYPE.G_MAJOR, CHORD_TYPE.D_MAJOR, CHORD_TYPE.A_MAJOR, CHORD_TYPE.E_MAJOR, CHORD_TYPE.B_MAJOR, CHORD_TYPE.F_SHARP_MAJOR ],
  [CHORD_QUALITY.MINOR]: [CHORD_TYPE.D_FLAT_MINOR, CHORD_TYPE.A_FLAT_MINOR, CHORD_TYPE.E_FLAT_MINOR, CHORD_TYPE.B_FLAT_MINOR, CHORD_TYPE.F_MINOR, CHORD_TYPE.C_MINOR, CHORD_TYPE.G_MINOR, CHORD_TYPE.D_MINOR, CHORD_TYPE.A_MINOR, CHORD_TYPE.E_MINOR, CHORD_TYPE.B_MINOR, CHORD_TYPE.F_SHARP_MINOR ],
  [CHORD_QUALITY.DOMINANT_7]: [CHORD_TYPE.D_FLAT_DOMINANT_7, CHORD_TYPE.A_FLAT_DOMINANT_7, CHORD_TYPE.E_FLAT_DOMINANT_7, CHORD_TYPE.B_FLAT_DOMINANT_7, CHORD_TYPE.F_DOMINANT_7, CHORD_TYPE.C_DOMINANT_7, CHORD_TYPE.G_DOMINANT_7, CHORD_TYPE.D_DOMINANT_7, CHORD_TYPE.A_DOMINANT_7, CHORD_TYPE.E_DOMINANT_7, CHORD_TYPE.B_DOMINANT_7, CHORD_TYPE.F_SHARP_DOMINANT_7 ],
} as const;

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

export const CHORD_LABELS: Partial<Record<CHORD_QUALITY, string>> = {
  [CHORD_QUALITY.MAJOR]: "Major",
  [CHORD_QUALITY.MINOR]: "Minor",
  [CHORD_QUALITY.DOMINANT_7]: "7th"
} as const;

export const getChordKey = (pressedChords: CHORD_TYPE[]) => {
  return pressedChords.slice().sort().join("-");
}

export const CHORD_LOOKUP: Record<string, CHORD_TYPE> = {
  [getChordKey([CHORD_TYPE.C_MAJOR])]: CHORD_TYPE.C_MAJOR,
  [getChordKey([CHORD_TYPE.C_MINOR])]: CHORD_TYPE.C_MINOR,
  [getChordKey([CHORD_TYPE.C_DOMINANT_7])]: CHORD_TYPE.C_DOMINANT_7,
  [getChordKey([CHORD_TYPE.C_MAJOR, CHORD_TYPE.C_MINOR])]: CHORD_TYPE.C_DIMINISHED,
  [getChordKey([CHORD_TYPE.C_MAJOR, CHORD_TYPE.C_DOMINANT_7])]: CHORD_TYPE.C_MAJOR_7,
  [getChordKey([CHORD_TYPE.C_MINOR, CHORD_TYPE.C_DOMINANT_7])]: CHORD_TYPE.C_MINOR_7,

  [getChordKey([CHORD_TYPE.D_FLAT_MAJOR])]: CHORD_TYPE.D_FLAT_MAJOR,
  [getChordKey([CHORD_TYPE.D_FLAT_MINOR])]: CHORD_TYPE.D_FLAT_MINOR,
  [getChordKey([CHORD_TYPE.D_FLAT_DOMINANT_7])]: CHORD_TYPE.D_FLAT_DOMINANT_7,
  [getChordKey([CHORD_TYPE.D_FLAT_MAJOR, CHORD_TYPE.D_FLAT_MINOR])]: CHORD_TYPE.D_FLAT_DIMINISHED,
  [getChordKey([CHORD_TYPE.D_FLAT_MAJOR, CHORD_TYPE.D_FLAT_DOMINANT_7])]: CHORD_TYPE.D_FLAT_MAJOR_7,
  [getChordKey([CHORD_TYPE.D_FLAT_MINOR, CHORD_TYPE.D_FLAT_DOMINANT_7])]: CHORD_TYPE.D_FLAT_MINOR_7,

  [getChordKey([CHORD_TYPE.D_MAJOR])]: CHORD_TYPE.D_MAJOR,
  [getChordKey([CHORD_TYPE.D_MINOR])]: CHORD_TYPE.D_MINOR,
  [getChordKey([CHORD_TYPE.D_DOMINANT_7])]: CHORD_TYPE.D_DOMINANT_7,
  [getChordKey([CHORD_TYPE.D_MAJOR, CHORD_TYPE.D_MINOR])]: CHORD_TYPE.D_DIMINISHED,
  [getChordKey([CHORD_TYPE.D_MAJOR, CHORD_TYPE.D_DOMINANT_7])]: CHORD_TYPE.D_MAJOR_7,
  [getChordKey([CHORD_TYPE.D_MINOR, CHORD_TYPE.D_DOMINANT_7])]: CHORD_TYPE.D_MINOR_7,

  [getChordKey([CHORD_TYPE.E_FLAT_MAJOR])]: CHORD_TYPE.E_FLAT_MAJOR,
  [getChordKey([CHORD_TYPE.E_FLAT_MINOR])]: CHORD_TYPE.E_FLAT_MINOR,
  [getChordKey([CHORD_TYPE.E_FLAT_DOMINANT_7])]: CHORD_TYPE.E_FLAT_DOMINANT_7,
  [getChordKey([CHORD_TYPE.E_FLAT_MAJOR, CHORD_TYPE.E_FLAT_MINOR])]: CHORD_TYPE.E_FLAT_DIMINISHED,
  [getChordKey([CHORD_TYPE.E_FLAT_MAJOR, CHORD_TYPE.E_FLAT_DOMINANT_7])]: CHORD_TYPE.E_FLAT_MAJOR_7,
  [getChordKey([CHORD_TYPE.E_FLAT_MINOR, CHORD_TYPE.E_FLAT_DOMINANT_7])]: CHORD_TYPE.E_FLAT_MINOR_7,

  [getChordKey([CHORD_TYPE.E_MAJOR])]: CHORD_TYPE.E_MAJOR,
  [getChordKey([CHORD_TYPE.E_MINOR])]: CHORD_TYPE.E_MINOR,
  [getChordKey([CHORD_TYPE.E_DOMINANT_7])]: CHORD_TYPE.E_DOMINANT_7,
  [getChordKey([CHORD_TYPE.E_MAJOR, CHORD_TYPE.E_MINOR])]: CHORD_TYPE.E_DIMINISHED,
  [getChordKey([CHORD_TYPE.E_MAJOR, CHORD_TYPE.E_DOMINANT_7])]: CHORD_TYPE.E_MAJOR_7,
  [getChordKey([CHORD_TYPE.E_MINOR, CHORD_TYPE.E_DOMINANT_7])]: CHORD_TYPE.E_MINOR_7,

  [getChordKey([CHORD_TYPE.F_MAJOR])]: CHORD_TYPE.F_MAJOR,
  [getChordKey([CHORD_TYPE.F_MINOR])]: CHORD_TYPE.F_MINOR,
  [getChordKey([CHORD_TYPE.F_DOMINANT_7])]: CHORD_TYPE.F_DOMINANT_7,
  [getChordKey([CHORD_TYPE.F_MAJOR, CHORD_TYPE.F_MINOR])]: CHORD_TYPE.F_DIMINISHED,
  [getChordKey([CHORD_TYPE.F_MAJOR, CHORD_TYPE.F_DOMINANT_7])]: CHORD_TYPE.F_MAJOR_7,
  [getChordKey([CHORD_TYPE.F_MINOR, CHORD_TYPE.F_DOMINANT_7])]: CHORD_TYPE.F_MINOR_7,

  [getChordKey([CHORD_TYPE.F_SHARP_MAJOR])]: CHORD_TYPE.F_SHARP_MAJOR,
  [getChordKey([CHORD_TYPE.F_SHARP_MINOR])]: CHORD_TYPE.F_SHARP_MINOR,
  [getChordKey([CHORD_TYPE.F_SHARP_DOMINANT_7])]: CHORD_TYPE.F_SHARP_DOMINANT_7,
  [getChordKey([CHORD_TYPE.F_SHARP_MAJOR, CHORD_TYPE.F_SHARP_MINOR])]: CHORD_TYPE.F_SHARP_DIMINISHED,
  [getChordKey([CHORD_TYPE.F_SHARP_MAJOR, CHORD_TYPE.F_SHARP_DOMINANT_7])]: CHORD_TYPE.F_SHARP_MAJOR_7,
  [getChordKey([CHORD_TYPE.F_SHARP_MINOR, CHORD_TYPE.F_SHARP_DOMINANT_7])]: CHORD_TYPE.F_SHARP_MINOR_7,

  [getChordKey([CHORD_TYPE.G_MAJOR])]: CHORD_TYPE.G_MAJOR,
  [getChordKey([CHORD_TYPE.G_MINOR])]: CHORD_TYPE.G_MINOR,
  [getChordKey([CHORD_TYPE.G_DOMINANT_7])]: CHORD_TYPE.G_DOMINANT_7,
  [getChordKey([CHORD_TYPE.G_MAJOR, CHORD_TYPE.G_MINOR])]: CHORD_TYPE.G_DIMINISHED,
  [getChordKey([CHORD_TYPE.G_MAJOR, CHORD_TYPE.G_DOMINANT_7])]: CHORD_TYPE.G_MAJOR_7,
  [getChordKey([CHORD_TYPE.G_MINOR, CHORD_TYPE.G_DOMINANT_7])]: CHORD_TYPE.G_MINOR_7,

  [getChordKey([CHORD_TYPE.A_FLAT_MAJOR])]: CHORD_TYPE.A_FLAT_MAJOR,
  [getChordKey([CHORD_TYPE.A_FLAT_MINOR])]: CHORD_TYPE.A_FLAT_MINOR,
  [getChordKey([CHORD_TYPE.A_FLAT_DOMINANT_7])]: CHORD_TYPE.A_FLAT_DOMINANT_7,
  [getChordKey([CHORD_TYPE.A_FLAT_MAJOR, CHORD_TYPE.A_FLAT_MINOR])]: CHORD_TYPE.A_FLAT_DIMINISHED,
  [getChordKey([CHORD_TYPE.A_FLAT_MAJOR, CHORD_TYPE.A_FLAT_DOMINANT_7])]: CHORD_TYPE.A_FLAT_MAJOR_7,
  [getChordKey([CHORD_TYPE.A_FLAT_MINOR, CHORD_TYPE.A_FLAT_DOMINANT_7])]: CHORD_TYPE.A_FLAT_MINOR_7,

  [getChordKey([CHORD_TYPE.A_MAJOR])]: CHORD_TYPE.A_MAJOR,
  [getChordKey([CHORD_TYPE.A_MINOR])]: CHORD_TYPE.A_MINOR,
  [getChordKey([CHORD_TYPE.A_DOMINANT_7])]: CHORD_TYPE.A_DOMINANT_7,
  [getChordKey([CHORD_TYPE.A_MAJOR, CHORD_TYPE.A_MINOR])]: CHORD_TYPE.A_DIMINISHED,
  [getChordKey([CHORD_TYPE.A_MAJOR, CHORD_TYPE.A_DOMINANT_7])]: CHORD_TYPE.A_MAJOR_7,
  [getChordKey([CHORD_TYPE.A_MINOR, CHORD_TYPE.A_DOMINANT_7])]: CHORD_TYPE.A_MINOR_7,

  [getChordKey([CHORD_TYPE.B_FLAT_MAJOR])]: CHORD_TYPE.B_FLAT_MAJOR,
  [getChordKey([CHORD_TYPE.B_FLAT_MINOR])]: CHORD_TYPE.B_FLAT_MINOR,
  [getChordKey([CHORD_TYPE.B_FLAT_DOMINANT_7])]: CHORD_TYPE.B_FLAT_DOMINANT_7,
  [getChordKey([CHORD_TYPE.B_FLAT_MAJOR, CHORD_TYPE.B_FLAT_MINOR])]: CHORD_TYPE.B_FLAT_DIMINISHED,
  [getChordKey([CHORD_TYPE.B_FLAT_MAJOR, CHORD_TYPE.B_FLAT_DOMINANT_7])]: CHORD_TYPE.B_FLAT_MAJOR_7,
  [getChordKey([CHORD_TYPE.B_FLAT_MINOR, CHORD_TYPE.B_FLAT_DOMINANT_7])]: CHORD_TYPE.B_FLAT_MINOR_7,

  [getChordKey([CHORD_TYPE.B_MAJOR])]: CHORD_TYPE.B_MAJOR,
  [getChordKey([CHORD_TYPE.B_MINOR])]: CHORD_TYPE.B_MINOR,
  [getChordKey([CHORD_TYPE.B_DOMINANT_7])]: CHORD_TYPE.B_DOMINANT_7,
  [getChordKey([CHORD_TYPE.B_MAJOR, CHORD_TYPE.B_MINOR])]: CHORD_TYPE.B_DIMINISHED,
  [getChordKey([CHORD_TYPE.B_MAJOR, CHORD_TYPE.B_DOMINANT_7])]: CHORD_TYPE.B_MAJOR_7,
  [getChordKey([CHORD_TYPE.B_MINOR, CHORD_TYPE.B_DOMINANT_7])]: CHORD_TYPE.B_MINOR_7,
};
