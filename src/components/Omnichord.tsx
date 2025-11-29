import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useChord } from "../hooks/useChord";
import { useStrumplate } from "../hooks/useStrumplate";
import {
    CHORD_LETTER_ORDER,
    CHORD_QUALITY_LABELS,
    CHORD_QUALITY_ORDER,
    CHORD_TYPE,
    getChordType,
} from "../synth/chords";
import { colors } from "../theme/colors";
import { globalStyles } from "../theme/globalStyles";
import { CHORD_BUTTON_DIMENSIONS, ChordButton } from "./ChordButton";
import { LabeledButton } from "./LabeledButton";
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
                <View
                    style={[styles.controlsContainer, styles.sectionContainer]}
                >
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
                        {CHORD_QUALITY_ORDER.map((quality) => (
                            <View key={quality} style={styles.chordRow}>
                                <View style={styles.chordQualityCell}>
                                    <Text style={globalStyles.text}>
                                        {CHORD_QUALITY_LABELS[quality]}
                                    </Text>
                                </View>
                                {CHORD_LETTER_ORDER.map((letter) => (
                                    <ChordButton
                                        key={`${letter}-${quality}`}
                                        chordType={getChordType(
                                            letter,
                                            quality
                                        )}
                                        onPressed={handleChordPressed}
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
