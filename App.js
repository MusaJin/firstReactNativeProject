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
        <Text style={styles.textStyles}>私は自分を嫌</Text>
        <TextInput
          style={styles.input}
          value={allString}
          showSoftInputOnFocus={false}
        />
      </View>
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
              <Text style={{ fontSize: 30, color: "#fff" }}>⛧</Text>
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
    paddingHorizontal: 30,
    fontSize: 24,
    color: "#fff",
  },
  container: {
    // padding: 20,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#184a3f",
  },
  container2: {
    height: "50%",
    paddingBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textStyles: {
    textAlign: "center",
    color: "#fff",
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
    // flex: 1,
    height: "40%",
    // paddingRight: "10%",
    width: "100%",
    gap: 20,
    // flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    // justifyContent: "flex-start",
    // backgroundColor:'black'
  },
  numbersWrapper: {
    flex: 3,
    // width: "75%",
    flexWrap: "wrap",
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  operationsWrapper: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    // width: "10%",
  },
  btn: {
    // flexBasis: 70,
    width: "25%",
    // margin: 12,
  },
  buttonAlt: {
    // opacity: 0.8, // чуть полупрозрачный при нажатии
    shadowColor: "#184a3f",
  },
});
