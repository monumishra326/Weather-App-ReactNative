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
    <View style={styles.box2}>
      <TextInput
        onChangeText={disablebutton}
        style={styles.main}
        placeholder={"Enter Country Name"}
      />

      <TouchableOpacity onPress={NameList}>
        <View style={styles.box}>
          <Text style={styles.btn1}>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box2: {
    flex: 1,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 80,
    marginHorizontal: 500,
    backgroundColor: "white",

    // borderWidth: 3,
    // borderColor: "red",
    shadowColor: "#1E212D",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  main: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    padding: 10,
    fontSize: 20,
    marginTop: 40,
    paddingHorizontal: 40,
  },
  box: {
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#6750a4",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  btn1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
