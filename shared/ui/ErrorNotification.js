import { Animated, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { useEffect, useRef, useState } from "react";

export default function ErrorNotification({ isVisible, text }) {
  const [mounted, setMounted] = useState(isVisible);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-50)).current;

  // useEffect(() => {
  //   Animated.timing(opacity, {
  //     toValue: isVisible ? 1 : 0,
  //     duration: 400,
  //     useNativeDriver: true,
  //   }).start();
  // }, [isVisible, opacity]);

  useEffect(() => {
    if (isVisible) {
      setMounted(true);
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -50,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setMounted(false);
      });
    }
  }, [isVisible, translateY]);

  if (!mounted) return null;

  return (
    <Animated.View
      style={[styles.errorContainer, { transform: [{ translateY }] }]}
    >
      <Text style={styles.errorText}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.red,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    zIndex: 2,
  },
  errorText: {
    color: colors.white,
    textAlign: "center",
  },
});
