import { Pressable } from "react-native";
import { CHORD_TYPE } from "../synth/chords";

interface Props {
    chordType: CHORD_TYPE;
    onPressed: (chordType: CHORD_TYPE) => void;
}

export const ChordButton = (props: Props) => {
    const onPressed = () => {
        props.onPressed(props.chordType);
    };

    return (
        <Pressable
            onPress={onPressed}
            style={{
                height: 50,
                width: 30,
                backgroundColor: "#007AFF",
                borderRadius: 2,
            }}
        />
    );
};
