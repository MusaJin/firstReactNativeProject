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
          startColor="rgba(0, 0, 0, 0.2)" // ваша тёмная тень
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
            startColor="rgb(209, 209, 209)" // ваш светлый цвет
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
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#c9c9c9",
    justifyContent: "center",
    alignItems: "center",
  },
  innerPressed: {
    backgroundColor: "#c9c9c9",
  },
  icon: {
    fontSize: 20,
    color: "#aaa",
  },
});
