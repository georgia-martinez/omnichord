import { CHORD_TYPE } from "../synth/chords";
import { playChord, stopChord } from "../synth/synth";

export function useChord() {
    const startPlaying = (chordType: CHORD_TYPE) => {
        playChord(chordType);
    }

    const stopPlaying = () => {
        stopChord();
        
    }

    return {
        startPlaying,
        stopPlaying,
    };
}

