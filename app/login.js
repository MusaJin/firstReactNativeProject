import {
  Alert,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import { colors } from "../shared/theme/colors";
import KubButton from "../shared/ui/KubButton";
import { router } from "expo-router";
import { useState } from "react";
import KubInput from "../shared/ui/KubInput";
import ErrorNotification from "../shared/ui/ErrorNotification";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [alertVis, setAlertVis] = useState(false);
  const handleVisiblePassword = () => {
    setIsVisible(!isVisible);
    // console.log(isVisible);
  };

  const eyeIcon = !isVisible
    ? require("../shared/assets/images/eyeOpen.png")
    : require("../shared/assets/images/eyeClose.png");

  const alert = () => {
    // Alert
    // Alert.alert("ERROR", "You made error, user! As usual.", [
    //   {
    //     text: "Ok",
    //     onPress: () => {
    //       console.log("Sasasasaaas");
    //     },
    //     style: "cancel",
    //   },
    // ]);
    if (Platform.OS === "android") {
      // ToastAndroid.showWithGravity(
      //   "ERROR AAAAAAAAAAAAAAAAAAAAA",
      //   ToastAndroid.SHORT,
      //   ToastAndroid.BOTTOM
      // );
      setAlertVis(true);
      setTimeout(() => {
        setAlertVis(false);
      }, 3000);
    }
  };
  return (
    <>
      <ErrorNotification text={"Error"} isVisible={alertVis} />
      <View style={styles.mainContainer}>
        <Image
          source={require("../shared/assets/images/user.png")}
          style={styles.image}
        />
        <View style={styles.inputsContainer}>
          <KubInput keyboardType={"email-address"} placeholder={"Email"} />
          <View>
            <KubInput placeholder={"Пароль"} secureTextEntry={isVisible} />
            <Pressable
              style={styles.eyeImageContainer}
              onPress={handleVisiblePassword}
            >
              <Image source={eyeIcon} style={styles.eyeImage} />
            </Pressable>
          </View>
          <KubButton style={styles.kubStyles} onPress={alert}>
            Войти
          </KubButton>
        </View>
        <Text style={styles.title}>Восстановить пароль</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 50,
    flex: 1,
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.greenMain,
  },
  inputsContainer: {
    width: "100%",
    gap: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  eyeImageContainer: {
    position: "absolute",
    right: 15,
    top: 18,
  },
  eyeImage: {
    width: 25,
    height: 25,
    tintColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.white,
    textAlign: "center",
  },
  kubStyles: {
    height: 60,
  },
});
