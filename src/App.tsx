import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Omnichord } from "./components/Omnichord";

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Omnichord />
        </GestureHandlerRootView>
    );
}
