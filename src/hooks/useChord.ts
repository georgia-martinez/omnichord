import { useCallback, useState } from "react";
import { CHORD_TYPE } from "../synth/chords";
import { playChord, stopCMajorChord } from "../synth/synth";

export function useChord(chordType: CHORD_TYPE) {
    const [isPlaying, setIsPlaying] = useState(false);

    const startPlaying = useCallback(async () => {
        if (!isPlaying) {
            setIsPlaying(true);
            await playChord(chordType);
        }
    }, [isPlaying]);

    const stopPlaying = useCallback(async () => {
        if (isPlaying) {
            setIsPlaying(false);
            await stopCMajorChord();
        }
    }, [isPlaying]);

    return {
        isPlaying,
        startPlaying,
        stopPlaying,
    };
}

