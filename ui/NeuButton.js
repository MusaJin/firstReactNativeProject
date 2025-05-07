import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function NeuButton({ onPress, children, style }) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      {({ pressed }) => (
        // 1) Тёмная тень справа и снизу
        <Shadow
          safeRender={true}
          sides={["bottom", "right"]}
          offset={[4, 3]} // смещение как в CSS: 4px 3px
          distance={10} // соответствие blur-radius: 4px
          startColor="rgba(0, 0, 0, 0.3)" // ваша тёмная тень
          endColor="rgba(0, 0, 0, 0)" // плавно уходит в прозрачность
          style={styles.wrapper}
          disabled={pressed ? true : false}
        >
          {/* 2) Светлая тень сверху и слева */}
          <Shadow
            safeRender={true}
            sides={["top", "left"]}
            offset={[-2, -3]} // -2px -3px
            distance={10} // blur-radius: 4px
            startColor="rgb(26, 78, 66)"
            // startColor="rgb(209, 209, 209)" // ваш светлый цвет
            endColor="rgba(245, 244, 244, 0)" // плавная прозрачность
            style={styles.wrapper}
            disabled={pressed ? true : false}
          >
            <View style={[styles.inner, pressed && styles.innerPressed]}>
              <Text style={styles.icon}>{children}</Text>
            </View>
          </Shadow>
        </Shadow>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 50,
  },
  inner: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#184a3f",
    justifyContent: "center",
    alignItems: "center",
  },
  innerPressed: {
    backgroundColor: "#184a3f",
  },
  icon: {
    fontSize: 20,
    color: "#fff",
  },
});
