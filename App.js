import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import NeuButton from "./ui/NeuButton";

export default function App() {
  const [click, setClick] = useState(false);
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "00", "0"];

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");

  const [allString, setAllString] = useState("");
  const [result, setResult] = useState(0);

  const setNum = (num) => {
    if (operation === "") {
      setNum1((prev) => prev + num);
    } else {
      setNum2((prev) => prev + num);
    }
  };

  const clickNyBlyat = () => {
    if (operation === "+") {
      setResult(Number(num1) + Number(num2));
    } else if (operation === "-") {
      setResult(Number(num1) - Number(num2));
    } else if (operation === "⛧") {
      setResult(Number(num1) * Number(num2));
    } else if (operation === "/") {
      setResult(Number(num1) / Number(num2));
    } else {
      setResult(Number(num1));
    }
    // setNum1("");
    // setNum2("");
    // setOperation("");
    setClick(true);
  };

  const reset = () => {
    setResult(0);
    setNum1("");
    setNum2("");
    setOperation("");
    setAllString("");
    setClick(false);
  };

  useEffect(() => {
    setAllString(
      num1 + operation + num2 + `${click ? "=" + String(result) : ""}`
    );
  }, [num1, num2, operation, click]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textStyles}>あなたが嫌い​です</Text>
        <TextInput
          style={styles.input}
          value={allString}
          showSoftInputOnFocus={false}
          // onChangeText={(text) => setNum1(text)}
          // keyboardType="numeric"
          // placeholder="Vvedi pervoe chislo"
        />
      </View>
      {/* <Text style={styles.textStyles}>{operation}</Text>
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={(text) => setNum2(text)}
        keyboardType="numeric"
        placeholder="Vvedi vtoroe chislo"
      /> */}
      {/* <Text style={styles.text2Styles}>Сумма: {result}</Text> */}
      <View style={styles.buttonsWrapper}>
        <View style={styles.numbersWrapper}>
          {numbers.map((num) => (
            <NeuButton
              key={num}
              onPress={() => {
                setNum(num);
              }}
              style={styles.btn}
            >
              {num}
            </NeuButton>
          ))}
          <NeuButton style={styles.btn} onPress={clickNyBlyat}>
            =
          </NeuButton>
        </View>
        <View style={styles.operationsWrapper}>
          <NeuButton
            style={styles.btn}
            onPress={() => {
              setOperation("+");
            }}
          >
            +
          </NeuButton>
          <NeuButton
            style={styles.btn}
            onPress={() => {
              setOperation("-");
            }}
          >
            -
          </NeuButton>
          <NeuButton
            style={styles.btn}
            onPress={() => {
              setOperation("⛧");
            }}
          >
            <View style={{ transform: [{ rotate: "360deg" }] }}>
              <Text style={{ fontSize: 30, color: "#aaa" }}>⛧</Text>
            </View>
          </NeuButton>
          <NeuButton
            style={styles.btn}
            onPress={() => {
              setOperation("/");
            }}
          >
            /
          </NeuButton>
          <NeuButton style={styles.btn} onPress={reset}>
            C
          </NeuButton>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    // borderWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000",
    // borderRadius: 10,
    // paddingVertical: 10,
    fontSize: 20,
  },
  container: {
    padding: 20,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#c9c9c9",
  },
  container2: {
    height: "50%",
    paddingBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textStyles: {
    textAlign: "center",
    color: "#000",
    fontWeight: 700,
    fontFamily: "Montserrat",
    fontSize: 24,
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
  buttonsWrapper: {
    paddingTop: 10,
    // flex: 1,
    height: "50%",
    paddingRight: "10%",
    width: "100%",
    gap: 20,
    // flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  numbersWrapper: {
    // flex: 1,
    width: "75%",
    flexWrap: "wrap",
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  operationsWrapper: {
    // flex: 1,
    gap: 20,
    width: "10%",
  },
  btn: {
    // flexBasis: 70,
    width: "25%",
    // margin: 12,
  },
  buttonAlt: {
    // opacity: 0.8, // чуть полупрозрачный при нажатии
    shadowColor: "#c9c9c9",
  },
});
