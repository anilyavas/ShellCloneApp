import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export function Disclaimer() {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require("../assets/1.jpg")} />
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.header}>Disclaimer</Text>
        <Text style={styles.paragraph}>
          The information provided by the Zdaly Fuel Network Optimizer app is
          based on historical data. Data on Zdaly Light is updated once daily at
          8:00 a.m. eastern time. Any prospective information is based on that
          data and should not be relied on as a estimation of future
          performance. Any future product prices are the manufacturer's
          suggested retail price (MSRP) only. Sites are independent operators
          free to set their retail price.
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>I Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtContainer: {
    height: 700,
    backgroundColor: "white",
    borderRadius: 50,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 200,
    alignSelf: "center",
  },
  background: {
    width: 500,
    height: 400,
    opacity: 0.3,
    position: "absolute",
    top: 50,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 50,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "300",
    paddingTop: 20,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#DD1D21",
    width: 200,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
});
