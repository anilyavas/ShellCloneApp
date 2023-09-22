import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export function Login() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputEmailContainer}>
        <FontAwesomeIcon style={styles.iconStyle} icon={faEnvelope} />
        <TextInput style={styles.email} value="email@email.com" />
      </View>
      <View style={styles.inputPasswordContainer}>
        <FontAwesomeIcon style={styles.iconStylePassword} icon={faLock} />
        <TextInput style={styles.password} value="******" />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonForgotPassword}>
          <Text style={styles.buttonForgotTxt}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../assets/1.jpg")}
        style={styles.stationImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  inputEmailContainer: {
    width: "100%",
    paddingHorizontal: 50,
    paddingTop: 50,
  },
  inputPasswordContainer: {
    width: "100%",
    paddingHorizontal: 50,
    paddingTop: 20,
  },
  header: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 50,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 200,
  },
  email: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  password: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconStyle: {
    position: "absolute",
    paddingLeft: 180,
    top: 50,
  },
  iconStylePassword: {
    position: "absolute",
    paddingLeft: 180,
    top: 20,
  },
  button: {
    backgroundColor: "#DD1D21",
    borderRadius: 50,
    width: 129,
    height: 59,
    justifyContent: "center",
    marginTop: 50,
  },
  buttonTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonForgotPassword: {
    position: "absolute",
    paddingTop: 130,
  },
  buttonForgotTxt: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  stationImg: {
    width: 500,
    height: 400,
    opacity: 0.3,
  },
});
