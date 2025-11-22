import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useChord } from "../hooks/useChord";
import {
    CHORD_ORDER,
    CHORD_QUALITY,
    CHORD_TYPE,
    getChordType,
} from "../synth/chords";
import { ChordButton } from "./ChordButton";

export const Omnichord = () => {
    const [activeChord, setActiveChord] = useState<CHORD_TYPE | undefined>(
        undefined
    );

    const { isPlaying, startPlaying, stopPlaying } = useChord();

    const handleChordPressed = (chordType: CHORD_TYPE) => {
        setActiveChord(chordType);
        startPlaying(chordType);
    };

    const handleStopPressed = () => {
        stopPlaying();
        setActiveChord(undefined);
    };

    return (
        <View style={styles.container}>
            {CHORD_ORDER.map((chord) => (
                <View key={chord} style={styles.chordColumn}>
                    <Text style={styles.chordName}>{chord}</Text>
                    <ChordButton
                        chordType={getChordType(chord, CHORD_QUALITY.MAJOR)}
                        onPressed={handleChordPressed}
                    />
                </View>
            ))}
            <Pressable onPress={handleStopPressed}>
                <Text>Stop</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    chordColumn: {
        flexDirection: "column",
        alignItems: "center",
        marginHorizontal: 4,
    },
    chordName: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 8,
        color: "#000",
    },
    button: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 10,
        minWidth: 200,
        alignItems: "center",
    },
    buttonPressed: {
        backgroundColor: "#0051D5",
        opacity: 0.8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});
