import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface Props {
    onPress: (pointerId: number) => void;
    onRelease?: (pointerId: number) => void;
    style?: any;
    children?: React.ReactNode;
}

export const MultiTouchButton = ({
    onPress,
    onRelease,
    style,
    children,
}: Props) => {
    const gesture = Gesture.Native()
        .onTouchesDown((e) => {
            for (const touch of e.changedTouches) {
                onPress(touch.id);
            }
        })
        .onTouchesUp((e) => {
            if (!onRelease) return;
            for (const touch of e.changedTouches) {
                onRelease(touch.id);
            }
        });

    return (
        <GestureDetector gesture={gesture}>
            <View style={[styles.button, style]}>{children}</View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
});
