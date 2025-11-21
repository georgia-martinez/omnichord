import { AudioContext, GainNode, OscillatorNode } from "react-native-audio-api";
import { CHORD_TYPE, CHORDS } from "./chords";

let audioContext: AudioContext | null = null;
let oscillators: OscillatorNode[] = [];
let gainNode: GainNode | null = null;

async function initializeAudioContext() {
    if (audioContext) return audioContext;
    
    audioContext = new AudioContext();
    gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = 0.3; // Set volume to 30% to prevent clipping
    
    return audioContext;
}

export async function playChord(chordType: CHORD_TYPE) {
    try {
        const context = await initializeAudioContext();
        if (!context || !gainNode) return;
        
        // Stop any currently playing sounds
        await stopCMajorChord();
        
        // Create oscillators for each note in the chord
        const frequencies = CHORDS[chordType];
        
        oscillators = frequencies.map((frequency) => {
            const oscillator = context.createOscillator();
            oscillator.type = "sine";
            oscillator.frequency.value = frequency;
            oscillator.connect(gainNode!);
            oscillator.start();
            return oscillator;
        });
    } catch (error) {
        console.error("Error playing chord:", error);
    }
}

export async function stopCMajorChord() {
    try {
        oscillators.forEach((oscillator) => {
            try {
                oscillator.stop();
                oscillator.disconnect();
            } catch {
                // Oscillator might already be stopped
            }
        });
        oscillators = [];
    } catch (error) {
        console.error("Error stopping chord:", error);
    }
}
