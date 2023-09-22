import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet } from "react-native";

export function StationItem() {
  return (
    <View style={styles.gasPumpInformationContainer}>
      <FontAwesomeIcon
        icon={faGasPump}
        color="red"
        style={styles.icon}
        size="50"
      />
      <View>
        <Text style={styles.pumpNumber}>1041700</Text>
        <Text style={styles.location}>ISLAND_LAKE_BP</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    marginLeft: 30,
  },
  gasPumpInformationContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  pumpNumber: {
    fontSize: 22,
    paddingLeft: 30,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  location: {
    color: "#ADB7C6",
    fontSize: 18,
    paddingLeft: 30,
  },
});
