import { useEffect, useState } from "react";
import axios from "axios";
import {
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
} from "react-native";
import { Link, useNavigate } from "react-router-native";

export const Inputs = ({ eventer }) => {
    const [country, setCountry] = useState();
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();
    const NameList = () => {
        if (country === undefined || country === "") {
            setDisable(true);
            Alert.alert("Please type country name here");
        } else {
            console.log("hello");
            eventer(country);
            navigate("/countrylist");
        }
    };
    console.log(country);
    const disablebutton = (e) => {
        setCountry(e);
        setDisable(false);
    };
    return (
        <>
            <TextInput
                onChangeText={disablebutton}
                style={styles.main}
                placeholder={"Enter Country Name"}
            />

            <TouchableOpacity onPress={NameList}>
                <View style={styles.box}>
                    <Text style={styles.button}>Click me</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    main: {
    
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "darkgrey",
        padding: 12,
        fontSize: 30,
        marginTop: 20,
        color:"black"
    },
    box: {
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "black",
        padding: 12,
        borderRadius: 50,
        borderWidth: 2,
        borderColor:"white"
    },
    button: {
        color: "white",
        fontWeight: "bold",
        fontSize:20,
        
        
    },
});