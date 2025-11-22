import { useCallback } from "react";
import { ARPEGGIOS, CHORD_TYPE } from "../synth/chords";
import { playNote } from "../synth/synth";

export function useStrumplate(activeChord?: CHORD_TYPE) {
    const playPlate = useCallback((plateIndex: number) => {
        if (!activeChord) return;
        
        const arpeggio = ARPEGGIOS[activeChord];
        if (!arpeggio || plateIndex >= arpeggio.length) return;
        
        const frequency = arpeggio[plateIndex];
        playNote(frequency);
    }, [activeChord]);

    return {
        playPlate,
    };
}

