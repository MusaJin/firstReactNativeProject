import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

export default function KubButton({ onPress, children, style }) {
  return (
    <Pressable onPress={onPress ? onPress : null}>
      {({ pressed }) => (
        <View style={[styles.button, style]}>
          <Text style={[styles.buttonTitle]}>{children}</Text>
        </View>
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
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  buttonPress: {
    color: colors.greenMain,
    backgroundColor: colors.white,
  },
  buttonTitle: {
    color: colors.greenMain,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
  },
});
