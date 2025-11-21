import { Pressable } from "react-native";
import { useChord } from "../hooks/useChord";
import { CHORD_TYPE } from "../synth/chords";

interface Props {
    chordType: CHORD_TYPE;
}

export const ChordButton = (props: Props) => {
    const { isPlaying, startPlaying, stopPlaying } = useChord(props.chordType);

    return (
        <Pressable
            onPressIn={startPlaying}
            onPressOut={stopPlaying}
            style={({ pressed }) => [
                {
                    height: 50,
                    width: 30,
                    backgroundColor:
                        pressed || isPlaying ? "#0051D5" : "#007AFF",
                    borderRadius: 2,
                },
            ]}
        />
    );
};
