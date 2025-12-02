import { Chord } from "../synth/chords";
import { playChord, stopChord } from "../synth/synth";

export function useChord() {
    const startPlaying = (chord: Chord) => {
        playChord(chord);
    }

    const stopPlaying = () => {
        stopChord();
        
    }

    return {
        startPlaying,
        stopPlaying,
    };
}

