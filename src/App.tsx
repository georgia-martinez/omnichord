import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { useChord } from "./hooks/useChord";
import { CHORD_TYPE } from "./synth/chords";

function App(): React.JSX.Element {
    const { isPlaying, startPlaying, stopPlaying } = useChord(
        CHORD_TYPE.C_MAJOR
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Pressable
                onPressIn={startPlaying}
                onPressOut={stopPlaying}
                style={({ pressed }) => [
                    styles.button,
                    (pressed || isPlaying) && styles.buttonPressed,
                ]}
            >
                <Text style={styles.buttonText}>
                    {isPlaying ? "Playing C Major..." : "Press for C Major"}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
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

export default App;
