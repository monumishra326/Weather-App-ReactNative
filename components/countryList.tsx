import { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigate } from "react-router-native";
import axios from "axios";

export const CountryList = ({ data, CC }) => {
  const navigate = useNavigate();
  const [countryName, setCountryName] = useState(data);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    countrylist();
  }, []);
  const countrylist = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.data;
      setCountryList(data);
    } catch (error) {
      console.error(error);
    }
  };
  const Weatherdetails = (e) => {
    CC(e.capital[0]);
    navigate("/weather");
    console.log(e.capital[0]);
  };
  return (
    <ScrollView>
      <View style={styles.box1}>
        <Text style={{ fontSize: 40, fontFamily: "serif", fontWeight: "bold" }}>
          Country Details
        </Text>

        <View style={styles.box}>
          {countryList.map((e, i) => {
            const image = e.flags.png;

            return (
              <View
                key={i}
                style={{
                  flex: 2,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Text>Capital: {e.capital}</Text>

                <Text>Population: {e.population}</Text>
                <Text>Lat: {e.latlng}</Text>
                <View>
                  <Text>Flag : </Text>
                  <Image
                    source={{
                      uri: `${image}`,
                    }}
                    style={{ width: 50, height: 50 }}
                  />
                </View>

                <TouchableOpacity onPress={() => Weatherdetails(e)}>
                  <View style={styles.weather}>
                    <Text style={styles.button}>Captial Weather</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <TouchableOpacity onPress={() => navigate("/")}>
          <View style={styles.wrapper}>
            <Text style={styles.button}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "70%",
    marginVertical: 80,
    marginHorizontal: 800,
    backgroundColor: "lightgrey",
    textAlign: "center",

    // borderWidth: 3,
    // borderColor: "red",
    flexDirection: "column",
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

  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#6750a4",
    padding: 10,
    borderRadius: 60,
    marginBottom: 40,
    marginHorizontal: 50,
    paddingHorizontal: 50,
  },
  button: {
    color: "white",
    fontWeight: "bold",
  },

  weather: {
    marginVertical: 20,
    backgroundColor: "#6750a4",
    width: 130,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
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
});
