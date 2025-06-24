import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { useRef } from "react";
import { router } from "expo-router";

export default function LinkButton({ onPress, children, routeTo, style }) {
  const anim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      routeTo ? router.push(routeTo) : null;
    });
  };

  // Интерполяция фона: от прозрачного к белому
  const backgroundColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", colors.white],
  });

  // Интерполяция цвета текста: от белого к зелёному
  const textColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.white, colors.greenMain],
  });

  return (
    <Pressable
      onPress={onPress ? onPress : null}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {({ pressed }) => (
        <Animated.View style={[styles.button, { backgroundColor }, style]}>
          <Animated.Text style={[styles.buttonTitle, { color: textColor }]}>
            {children}
          </Animated.Text>
        </Animated.View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
  },
  buttonPress: {
    color: colors.greenMain,
    backgroundColor: colors.white,
  },
  buttonTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
});
