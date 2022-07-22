import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";

export const Weather = ({ captialName }) => {
  const [weather, setWeather] = useState({
    location: {
      country: "",
      temperature: "",
      weather_descriptions: "",
      weather_icons: "",
    },
    current: {
      country: "",
      id_day: "",
      temperature: "",
      weather_descriptions: "",
      image: "",
      is_day: "",
      weather_icons: "",
    },
    request: {
      language: "",
      query: "",
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    weatherdetail();
  }, []);
  const weatherdetail = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=bd8a663f3cf8c87ebdfb421a119e36df&query=${captialName}`
      );
      const data = await response.data;
      console.log(data);

      setWeather(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <View style={styles.box1}>
      <View>
        <Text style={styles.header}>Weather</Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "space-between",
          flexDirection: "column",
          marginTop: 20,
        }}
      >
        <Text style={styles.text}> Country : {weather.location.country}</Text>
        <Text style={styles.text}>City : {weather?.request?.query}</Text>
        <Text style={styles.text}>
          Temperature : {weather?.current?.temperature}
        </Text>
        <Text style={styles.text}>
          Description : {weather?.current?.weather_descriptions}
        </Text>
        <Text style={styles.text}>Day : {weather?.current?.is_day}</Text>
        <View>
          <Image
            source={{
              uri: `${weather.current.weather_icons}`,
            }}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigate("/countrylist");
        }}
      >
        <View style={styles.wrapper}>
          <Text style={styles.button}>Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 80,
    marginHorizontal: 300,
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
    fontFamily: "serif",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    fontFamily: "serif",
  },

  weather: {
    marginVertical: 20,
  },
  wrapper: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#6750a4",
    padding: 10,
    borderRadius: 60,
    marginBottom: 40,

    paddingHorizontal: 50,
  },

  button: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
