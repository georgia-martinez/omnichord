import { Pressable, StyleSheet, View } from "react-native";

const NUM_PLATES = 12;

interface Props {
    onPlatePressed: (plateIndex: number) => void;
}

export const Strumplate = (props: Props) => {
    return (
        <View style={styles.container}>
            {Array.from({ length: NUM_PLATES }).map((_, index) => (
                <Pressable
                    key={index}
                    style={[styles.plate, index === 0 && styles.firstPlate]}
                    onPress={() => props.onPlatePressed(NUM_PLATES - 1 - index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        border: "1px solid #000",
    },
    plate: {
        width: 100,
        height: 50,
        backgroundColor: "#a0a5a3",
        borderTopWidth: 1,
        borderBottomColor: "#000",
    },
    firstPlate: {
        borderTopWidth: 0,
    },
});
