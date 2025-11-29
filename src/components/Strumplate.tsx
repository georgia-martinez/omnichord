import { useRef } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { colors } from "../theme/colors";

const NUM_PLATES = 12;

interface Props {
    onPlatePressed: (index: number) => void;
}

export const Strumplate = ({ onPlatePressed }: Props) => {
    const lastTriggered = useRef<number | null>(null);
    const containerHeight = useRef(0);

    const getPlateIndex = (y: number) => {
        if (containerHeight.current === 0) return null;
        const plateHeight = containerHeight.current / NUM_PLATES;
        let idx = Math.floor(y / plateHeight);
        if (idx < 0) idx = 0;
        if (idx >= NUM_PLATES) idx = NUM_PLATES - 1;
        return NUM_PLATES - 1 - idx;
    };

    const triggerPlate = (y: number) => {
        const idx = getPlateIndex(y);
        if (idx === null || idx === lastTriggered.current) return;
        lastTriggered.current = idx;
        onPlatePressed(idx);
    };

    const pan = Gesture.Pan()
        .minDistance(0)
        .onTouchesDown((e) => {
            triggerPlate(e.changedTouches[0].y);
        })
        .onUpdate((e) => {
            triggerPlate(e.y);
        })
        .onEnd(() => {
            lastTriggered.current = null;
        });

    return (
        <GestureDetector gesture={pan}>
            <View
                style={styles.container}
                onLayout={(e: LayoutChangeEvent) => {
                    containerHeight.current = e.nativeEvent.layout.height;
                }}
            >
                {Array.from({ length: NUM_PLATES }).map((_, index) => (
                    <View
                        key={index}
                        style={[styles.plate, index === 0 && styles.firstPlate]}
                    />
                ))}
            </View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: 150,
    },
    plate: {
        flex: 1,
        backgroundColor: colors.beige,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.black,
    },
    firstPlate: {
        borderTopWidth: 1,
    },
});
