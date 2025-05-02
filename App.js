import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [click, setClick] = useState(false);

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [result, setResult] = useState(0);

  const clickNyBlyat = () => {
    setResult(Number(num1) + Number(num2));
  };

  const reset = () => {
    setResult(0);
    setNum1("");
    setNum2("");
  };

  return (
    <View style={styles.container2}>
      <Text>Первое число</Text>
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={(text) => setNum1(text)}
        keyboardType="numeric"
        placeholder="Vvedi pervoe chislo"
      />
      <Text>Второе число</Text>
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={(text) => setNum2(text)}
        keyboardType="numeric"
        placeholder="Vvedi vtoroe chislo"
      />
      {/* <View style={styles.container2}> */}
      <Text style={styles.text2Styles}>Сумма: {result}</Text>
      {/* </View> */}
      <Pressable
        onPress={clickNyBlyat}
        style={({ pressed }) => [
          styles.btn, // базовый стиль
          click && styles.buttonOn, // дополнительный, если click = true
          pressed && styles.buttonAlt, // стиль при нажатии (feedback)
        ]}
      >
        <Text
          style={{
            borderStyle: "solid",
            borderColor: "#002bff",
            borderRadius: 10,
            color: "#fff",
            fontWeight: 700,
          }}
        >
          Магические вычисления
        </Text>
      </Pressable>
      <Pressable
        onPress={reset}
        style={({ pressed }) => [
          styles.btnC, // базовый стиль
          pressed && styles.buttonAlt, // стиль при нажатии (feedback)
        ]}
      >
        <Text
          style={{
            borderStyle: "solid",
            borderColor: "#002bff",
            borderRadius: 10,
            color: "#fff",
            fontWeight: 700,
          }}
        >
          C
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    padding: 12,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f2ff00",
    gap: 20,
  },
  container3: {
    flex: 1,
    justifyContent: "center",
  },
  textStyles: {
    padding: 16,
    textAlign: "center",
    color: "#fff",
    fontWeight: 700,
    fontFamily: "Montserrat",
    fontSize: 20,
    lineHeight: 24,
  },
  text2Styles: {
    padding: 16,
    textAlign: "center",
    color: "#000",
    fontWeight: 700,
    fontFamily: "Montserrat",
    fontSize: 20,
    lineHeight: 24,
  },
  btn: {
    position: "absolute",
    top: "95%",
    right: "5%",
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    margin: 8,
  },
  btnC: {
    position: "absolute",
    top: "95%",
    left: "5%",
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    margin: 8,
  },
  buttonAlt: {
    opacity: 0.8, // чуть полупрозрачный при нажатии
  },
});
