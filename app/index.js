// app/index.js

import { View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";
import LinkButton from "../shared/ui/LinkButton";
import { colors } from "../shared/theme/colors";
import { gaps } from "../shared/theme/gaps";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinkButton routeTo={"/calculator"} style={styles.btn}>
        Калькулятор
      </LinkButton>
      <LinkButton routeTo={"/login"} style={styles.btn}>
        Login
      </LinkButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    gap: gaps.g20,
    backgroundColor: colors.greenMain,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 200,
  },
});
