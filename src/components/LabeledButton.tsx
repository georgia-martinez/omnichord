import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

interface Props {
    label: string;
    onPressIn: () => void;
    color?: string;
    height?: number;
    width?: number;
}

export const LabeledButton = (props: Props) => {
    const { height = 50, width = height } = props;

    return (
        <View style={styles.container}>
            <Pressable
                onPressIn={props.onPressIn}
                style={[
                    styles.button,
                    {
                        backgroundColor: props.color ?? colors.gray400,
                        height,
                        width,
                    },
                ]}
            />
            <Text style={styles.label}>{props.label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    button: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: colors.black,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.black,
    },
});
