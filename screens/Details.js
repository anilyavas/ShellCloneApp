import { View, Text, Image, StyleSheet } from "react-native";
import { StationCard } from "../components/StationCard";

export function Details() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Image style={styles.background} source={require("../assets/1.jpg")} />
        <Text style={styles.header}>Select Station</Text>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.subHeader}>Station Subscribed</Text>
        <StationCard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
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
  subHeader: {
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 20,
  },
  informationContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    height: "100%",
  },
});
