import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useChord } from "../hooks/useChord";
import { useStrumplate } from "../hooks/useStrumplate";
import {
    CHORD_ORDER,
    CHORD_QUALITY,
    CHORD_TYPE,
    getChordType,
} from "../synth/chords";
import { colors } from "../theme/colors";
import { ChordButton } from "./ChordButton";
import { Strumplate } from "./Strumplate";

export const Omnichord = () => {
    const [activeChord, setActiveChord] = useState<CHORD_TYPE | undefined>(
        undefined
    );

    const { isPlaying, startPlaying, stopPlaying } = useChord();
    const { playPlate } = useStrumplate(activeChord);

    const handleChordPressed = (chordType: CHORD_TYPE) => {
        setActiveChord(chordType);
        startPlaying(chordType);
    };

    const handleStopPressed = () => {
        stopPlaying();
        setActiveChord(undefined);
    };

    const handlePlatePressed = (plateIndex: number) => {
        playPlate(plateIndex);
    };

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Pressable onPressIn={handleStopPressed}>
                    <Text>Stop</Text>
                </Pressable>
                <View style={styles.chordContainer}>
                    {CHORD_ORDER.map((chord) => (
                        <View key={chord} style={styles.chordColumn}>
                            <Text style={styles.chordName}>{chord}</Text>
                            <ChordButton
                                chordType={getChordType(
                                    chord,
                                    CHORD_QUALITY.MAJOR
                                )}
                                onPressed={handleChordPressed}
                            />
                        </View>
                    ))}
                </View>
            </View>
            <Strumplate onPlatePressed={handlePlatePressed} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 22,
        backgroundColor: colors.background,
    },
    container2: {
        flex: 1,
    },
    chordContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
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
        color: colors.black,
    },
});
