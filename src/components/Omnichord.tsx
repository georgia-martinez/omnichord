import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useChord } from "../hooks/useChord";
import { useStrumplate } from "../hooks/useStrumplate";
import {
    Chord,
    CHORD_LETTER_ORDER,
    CHORD_TYPE,
    CHORD_TYPE_LABELS,
    CHORD_TYPE_ORDER,
    GET_CHORD_QUALITY,
    getChordQualityKey,
} from "../synth/chords";
import { colors } from "../theme/colors";
import { globalStyles } from "../theme/globalStyles";
import { CHORD_BUTTON_DIMENSIONS, ChordButton } from "./ChordButton";
import { LabeledButton } from "./LabeledButton";
import { Strumplate } from "./Strumplate";

export const Omnichord = () => {
    const [activeChord, setActiveChord] = useState<Chord | undefined>(
        undefined
    );

    const [pressedChords, setPressedButtons] = useState<Chord[]>([]);

    const { startPlaying, stopPlaying } = useChord();
    const { playPlate } = useStrumplate(activeChord);

    useEffect(() => {
        const chordTypes: CHORD_TYPE[] = pressedChords.map(
            (chord) => chord.type
        );

        const chordQualityKey = getChordQualityKey(chordTypes);

        if (chordQualityKey in GET_CHORD_QUALITY) {
            const chordQuality = GET_CHORD_QUALITY[chordQualityKey];

            const newChord = {
                root: pressedChords[0].root,
                type: chordQuality,
            };
            startPlaying(newChord);
            setActiveChord(newChord);
        }

        if (pressedChords.length === 0) {
            setActiveChord(undefined);
            stopPlaying();
        }
    }, [pressedChords]);

    const chordsEqual = (a: Chord, b: Chord) =>
        a.root === b.root && a.type === b.type;

    const handleChordPressed = (chord: Chord) => {
        setPressedButtons((prev) => {
            if (prev.some((c) => chordsEqual(c, chord))) return prev;
            return [...prev, chord];
        });
    };

    const handleChordReleased = (chord: Chord) => {
        setPressedButtons((prev) => prev.filter((c) => !chordsEqual(c, chord)));
    };

    const handlePlatePressed = (plateIndex: number) => {
        playPlate(plateIndex);
    };

    const handleStopPressed = () => {
        stopPlaying();
        setActiveChord(undefined);
    };

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View
                    style={[styles.controlsContainer, styles.sectionContainer]}
                >
                    {/* TODO:  This should only do stuff if sustain is on...? */}
                    <LabeledButton
                        label="Stop"
                        onPressIn={handleStopPressed}
                        color={colors.red100}
                        pressedColor={colors.red200}
                    />
                </View>
                <View style={styles.sectionContainer}>
                    <View style={styles.chordLetterContainer}>
                        {CHORD_LETTER_ORDER.map((letter) => (
                            <View key={letter} style={styles.chordLetterCell}>
                                <Text style={globalStyles.text}>{letter}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.chordButtonContainer}>
                        {CHORD_TYPE_ORDER.map((quality, index) => (
                            <View
                                key={quality}
                                style={[
                                    styles.chordRow,
                                    { marginLeft: index * 20 },
                                ]}
                            >
                                <View style={styles.chordQualityCell}>
                                    <Text style={globalStyles.text}>
                                        {CHORD_TYPE_LABELS[quality]}
                                    </Text>
                                </View>
                                {CHORD_LETTER_ORDER.map((letter) => (
                                    <ChordButton
                                        key={`${letter}-${quality}`}
                                        chord={{ root: letter, type: quality }}
                                        onPressed={handleChordPressed}
                                        onReleased={handleChordReleased}
                                    />
                                ))}
                            </View>
                        ))}
                    </View>
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
        paddingVertical: 30,
        paddingHorizontal: 15,
        backgroundColor: colors.background,
        gap: globalStyles.gap.md,
    },
    container2: {
        flex: 1,
        gap: globalStyles.gap.md,
    },
    controlsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    sectionContainer: {
        borderWidth: 1,
        borderRadius: globalStyles.borderRadius.md,
        padding: 20,
    },
    chordButtonContainer: {
        gap: CHORD_BUTTON_DIMENSIONS.gap,
    },
    chordLetterContainer: {
        flexDirection: "row",
        marginLeft:
            CHORD_BUTTON_DIMENSIONS.width * 1.35 + CHORD_BUTTON_DIMENSIONS.gap,
    },
    chordLetterCell: {
        ...globalStyles.text,
        width: CHORD_BUTTON_DIMENSIONS.width + CHORD_BUTTON_DIMENSIONS.gap,
        marginBottom: CHORD_BUTTON_DIMENSIONS.gap,
    },
    chordQualityCell: {
        height: CHORD_BUTTON_DIMENSIONS.height,
        width: CHORD_BUTTON_DIMENSIONS.width,
        justifyContent: "center",
        alignItems: "center",
    },
    chordRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: globalStyles.gap.md,
    },
});
