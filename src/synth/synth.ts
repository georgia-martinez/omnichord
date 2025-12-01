import { AudioContext, BiquadFilterNode, GainNode, OscillatorNode } from "react-native-audio-api";
import { CHORD_TYPE, CHORDS, NOTES } from "./chords";

let audioContext: AudioContext | null = null;
let oscillators: OscillatorNode[] = [];
let gainNode: GainNode | null = null;
let filterNode: BiquadFilterNode | null = null;

function initializeAudioContext() {
    if (audioContext) return audioContext;
    
    audioContext = new AudioContext();
    
    filterNode = audioContext.createBiquadFilter();
    filterNode.type = "lowpass";
    filterNode.frequency.value = 2800;
    filterNode.Q.value = 1;
    
    gainNode = audioContext.createGain();
    gainNode.gain.value = 0.25;
    
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    return audioContext;
}

function createVoice(context: AudioContext, frequency: number, targetNode: GainNode | BiquadFilterNode) {
    const voiceGain = context.createGain();
    voiceGain.gain.value = 0.15;
    voiceGain.connect(targetNode);
    
    const oscillatorsForVoice: OscillatorNode[] = [];
    
    const detunes = [0, -8, 8];
    const types: ("triangle" | "sine" | "square" | "sawtooth")[] = ["triangle", "sine", "sine"];
    
    detunes.forEach((detune, i) => {
        const osc = context.createOscillator();
        osc.type = types[i];
        osc.frequency.value = frequency;
        osc.detune.value = detune;
        osc.connect(voiceGain);
        osc.start();
        oscillatorsForVoice.push(osc);
    });
    
    return { oscillators: oscillatorsForVoice, gain: voiceGain };
}

export function playChord(chordType: CHORD_TYPE) {
    try {
        const context = initializeAudioContext();
        if (!context || !filterNode) return;
        
        stopChord();
        
        const frequencies = CHORDS[chordType].map((note) => NOTES[note.name][note.octave]);
        
        frequencies.forEach((frequency) => {
            const voice = createVoice(context, frequency, filterNode!);
            oscillators.push(...voice.oscillators);
        });
    } catch (error) {
        console.error("Error playing chord:", error);
    }
}

export function stopChord() {
    try {
        oscillators.forEach((oscillator) => {
            try {
                oscillator.stop();
                oscillator.disconnect();
            } catch {}
        });
        oscillators = [];
    } catch (error) {
        console.error("Error stopping chord:", error);
    }
}

export function playNote(frequency: number, duration: number = 800) {
    try {
        const context = initializeAudioContext();
        if (!context || !filterNode) return;
        
        const noteGain = context.createGain();
        noteGain.connect(filterNode);
        
        const now = context.currentTime;
        const attackTime = 0.01;
        const releaseTime = 0.3;
        const sustainDuration = (duration / 1000) - attackTime - releaseTime;
        
        noteGain.gain.value = 0;
        noteGain.gain.linearRampToValueAtTime(0.2, now + attackTime);
        noteGain.gain.linearRampToValueAtTime(0.15, now + attackTime + 0.05);
        noteGain.gain.linearRampToValueAtTime(0.15, now + attackTime + sustainDuration);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration / 1000);
        
        const detunes = [0, -7, 7];
        const types: ("triangle" | "sine" | "square" | "sawtooth")[] = ["triangle", "sine", "sine"];
        
        detunes.forEach((detune, i) => {
            const oscillator = context.createOscillator();
            oscillator.type = types[i];
            oscillator.frequency.value = frequency;
            oscillator.detune.value = detune;
            oscillator.connect(noteGain);
            oscillator.start(now);
            oscillator.stop(now + duration / 1000);
        });
    } catch (error) {
        console.error("Error playing note:", error);
    }
}
