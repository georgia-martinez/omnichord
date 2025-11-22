import { useState } from "react";
import { CHORD_TYPE } from "../synth/chords";
import { playChord, stopChord } from "../synth/synth";

export function useChord() {
    const [isPlaying, setIsPlaying] = useState(false);

    const startPlaying = (chordType: CHORD_TYPE) => {
            setIsPlaying(true);
            playChord(chordType);
    }

    const stopPlaying = () => {
        if (isPlaying) {
            setIsPlaying(false);
            stopChord();
        }
    }

    return {
        isPlaying,
        startPlaying,
        stopPlaying,
    };
}

