import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../shared/theme/colors";
import KubButton from "../shared/ui/KubButton";
import { router } from "expo-router";

export default function LoginPage() {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../shared/assets/images/user.png")}
        style={styles.image}
      />
      <View style={styles.inputsContainer}>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={colors.gray}
          style={styles.input}
        />
        <TextInput
          // keyboardType="visible-password"
          placeholder="Пароль"
          secureTextEntry={true}
          placeholderTextColor={colors.gray}
          style={styles.input}
        />
        <KubButton
          style={styles.kubStyles}
          onPress={() => {
            router.push("/");
          }}
        >
          Войти
        </KubButton>
      </View>
      <Text style={styles.title}>Восстановить пароль</Text>
      {/* <Text style={styles.title}>LOGIN SCREEN</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 50,
    flex: 1,
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.greenMain,
  },
  inputsContainer: {
    width: "100%",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.white,
  },
  input: {
    // paddingVertical: 20,
    height: 60,
    paddingHorizontal: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#466e65",
    color: colors.white,
  },

  kubStyles: {
    height: 60,
  },
});
