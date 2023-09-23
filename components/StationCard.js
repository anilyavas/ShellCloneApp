import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export function StationCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ACTIVE FROM</Text>
      <View style={styles.secondsContainer}>
        <Text style={styles.seconds}>9</Text>
        <Text style={styles.textSecond}>second</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.stopSign}>STOP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.moreInfo}>MORE INFO</Text>
        <FontAwesomeIcon icon={faCircleInfo} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    margin: 20,
    shadowColor: "grey",
    elevation: 1,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    borderRadius: 20,
    backgroundColor: "white",
  },
  secondsContainer: {
    flexDirection: "row",
    paddingTop: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seconds: {
    fontWeight: "bold",
    fontSize: 40,
  },
  textSecond: {
    fontSize: 15,
    fontWeight: "bold",
    paddingRight: 200,
  },
  moreInfo: {
    fontWeight: "bold",
    fontSize: 14,
    paddingRight: 10,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 30,
    height: 27,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  stopSign: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});
