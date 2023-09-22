import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { StationItem } from "../components/StationItem";

export function Station() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Image style={styles.background} source={require("../assets/1.jpg")} />
        <Text style={styles.header}>Select Station</Text>
      </View>
      <View style={styles.stationsContainer}>
        <View style={styles.searhBarContainer}>
          <TextInput style={styles.searchBar}>
            <Text style={styles.searchText}>Search by ID,Name,City</Text>
          </TextInput>
        </View>
        <View style={styles.stationInfoContainer}>
          <StationItem />
          <StationItem />
          <StationItem />
          <StationItem />
          <StationItem />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
  },
  stationsContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 50,
    width: "100%",
    height: 200,
  },
  searhBarContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#F0F4F5",
    borderRadius: 50,
    width: 360,
    height: 60,
  },
  stationInfoContainer: {
    flex: 1,
  },

  gasPumpIcon: {},
  searchText: {
    fontSize: 19,
    fontWeight: "bold",
    opacity: 0.5,
  },
  background: {
    width: 500,
    height: 400,
    opacity: 0.3,
    position: "absolute",
    top: 50,
  },
  header: {
    textAlign: "center",
    paddingTop: 200,
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 100,
  },
});
