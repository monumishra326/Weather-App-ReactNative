import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { Inputs } from "./components/input";
import { NativeRouter, Route, Routes } from "react-router-native";
import { CountryList } from "./components/countryList";
import { useState } from "react";
import { Weather } from "./components/Weather";
export default function App() {
    const [name, setName] = useState();
    const [cityName, setCityName] = useState();
    const calling = (names) => {
        setName(names);
    };
    const callingcity = (CC) => {
        setCityName(CC);
    };
    console.log(cityName);
    return (
        <NativeRouter>
            <SafeAreaView style={styles.container}>
                <Routes>
                    <Route
                        path="/"
                        element={<Inputs eventer={calling} />}
                    ></Route>
                    <Route
                        path="/countrylist"
                        element={
                            <CountryList data={name} CC={callingcity} />
                        }
                    ></Route>
                    <Route
                        path="/weather"
                        element={<Weather captialName={cityName} />}
                    ></Route>
                </Routes>
                
            </SafeAreaView>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4A47A3",
        marginTop: 30,
    },
});