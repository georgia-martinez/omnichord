import { useCallback } from "react";
import { getArpeggio } from "../synth/arpeggios";
import { Chord } from "../synth/chords";
import { playNote } from "../synth/synth";

export function useStrumplate(activeChord?: Chord) {
    const playPlate = useCallback((plateIndex: number) => {
        if (!activeChord) return;
        
        const arpeggio = getArpeggio(activeChord);
        if (!arpeggio || plateIndex >= arpeggio.length) return;
        
        const frequency = arpeggio[plateIndex];
        playNote(frequency);
    }, [activeChord]);

    return {
        playPlate,
    };
}

