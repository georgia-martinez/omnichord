import { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { CHORD_TYPE } from "../synth/chords";
import { colors } from "../theme/colors";
import { globalStyles } from "../theme/globalStyles";
import { MultiTouchButton } from "./MultiTouchButton";

export const CHORD_BUTTON_DIMENSIONS = {
    height: 100,
    width: 60,
    gap: globalStyles.gap.md,
} as const;

interface Props {
    chordType: CHORD_TYPE;
    onPressed: (chordType: CHORD_TYPE) => void;
    onReleased: (chordType: CHORD_TYPE) => void;
}

export const ChordButton = (props: Props) => {
    const activePointers = useRef(new Set<number>());
    const [isPressed, setIsPressed] = useState(false);

    const onPressed = (pointerId: number) => {
        if (!activePointers.current.has(pointerId)) {
            activePointers.current.add(pointerId);
            setIsPressed(true);
            props.onPressed(props.chordType);
        }
    };

    const onReleased = (pointerId: number) => {
        if (activePointers.current.has(pointerId)) {
            activePointers.current.delete(pointerId);
            if (activePointers.current.size === 0) {
                setIsPressed(false);
                props.onReleased(props.chordType);
            }
        }
    };

    return (
        <MultiTouchButton
            onPress={onPressed}
            onRelease={onReleased}
            style={[styles.button, isPressed && styles.buttonPressed]}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        height: CHORD_BUTTON_DIMENSIONS.height,
        width: CHORD_BUTTON_DIMENSIONS.width,
        backgroundColor: colors.gray400,
        borderRadius: globalStyles.borderRadius.md,
        borderWidth: 1,
        borderColor: colors.black,
    },
    buttonPressed: {
        backgroundColor: colors.gray500,
    },
});
