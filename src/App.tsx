import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChordButton } from "./components/ChordButton";
import { CHORD_ORDER, CHORD_QUALITY, getChordType } from "./synth/chords";

export default function App() {
    return (
        <View style={styles.container}>
            {CHORD_ORDER.map((chord) => (
                <View key={chord} style={styles.chordColumn}>
                    <Text style={styles.chordName}>{chord}</Text>
                    <ChordButton
                        chordType={getChordType(chord, CHORD_QUALITY.MAJOR)}
                    />
                </View>
            ))}
        </View>
    );
}

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
