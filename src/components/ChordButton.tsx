import { Pressable, StyleSheet } from "react-native";
import { CHORD_TYPE } from "../synth/chords";
import { colors } from "../theme/colors";
import { globalStyles } from "../theme/globalStyles";

export const CHORD_BUTTON_DIMENSIONS = {
    height: 100,
    width: 60,
    gap: globalStyles.gap.md,
} as const;

interface Props {
    chordType: CHORD_TYPE;
    onPressed: (chordType: CHORD_TYPE) => void;
}

export const ChordButton = (props: Props) => {
    const onPressed = () => {
        props.onPressed(props.chordType);
    };

    return <Pressable onPressIn={onPressed} style={styles.button} />;
};

const styles = StyleSheet.create({
    button: {
        height: CHORD_BUTTON_DIMENSIONS.height,
        width: CHORD_BUTTON_DIMENSIONS.width,
        backgroundColor: colors.gray400,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: colors.black,
    },
});
