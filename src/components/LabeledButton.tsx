import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { globalStyles } from "../theme/globalStyles";

interface Props {
    label: string;
    onPressIn: () => void;
    color?: string;
    pressedColor?: string;
    height?: number;
    width?: number;
}

export const LabeledButton = (props: Props) => {
    const { height = 50, width = height } = props;

    return (
        <View style={styles.container}>
            <Pressable
                onPressIn={props.onPressIn}
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? props.pressedColor ??
                              props.color ??
                              colors.gray400
                            : props.color ?? colors.gray400,
                        height,
                        width,
                    },
                ]}
            />
            <Text style={globalStyles.text}>{props.label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: globalStyles.gap.sm,
    },
    button: {
        borderWidth: 1,
        borderRadius: globalStyles.borderRadius.md,
        borderColor: colors.black,
    },
});
