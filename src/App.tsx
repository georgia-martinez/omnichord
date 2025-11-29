import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Omnichord } from "./components/Omnichord";
import { colors } from "./theme/colors";

export default function App() {
    return (
        <View style={styles.container}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Omnichord />
            </GestureHandlerRootView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
