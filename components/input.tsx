import { useEffect, useState } from "react";
import axios from "axios";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Button,
  ImageBackgroundBase,
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
          <Text style={styles.btn1}>Click me</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    padding: 10,
    fontSize: 20,
    marginTop: 40,
  },
  box: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#6750a4",
    padding: 10,
    borderRadius: 60,
  },
  btn1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
