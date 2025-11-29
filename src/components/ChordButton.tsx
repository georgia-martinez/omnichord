import { Pressable, StyleSheet } from "react-native";
import { CHORD_TYPE } from "../synth/chords";

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
        height: 50,
        width: 30,
        backgroundColor: "#a0a5a3",
        borderRadius: 2,
    },
});
