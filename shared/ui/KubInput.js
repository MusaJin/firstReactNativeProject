import { StyleSheet, TextInput } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonst";
import { borders } from "../theme/borders";

export default function KubInput({
  placeholder,
  keyboardType,
  secureTextEntry,
}) {
  return (
    <TextInput
      keyboardType={keyboardType ? keyboardType : "default"}
      placeholder={placeholder}
      placeholderTextColor={colors.gray}
      secureTextEntry={secureTextEntry ? secureTextEntry : false}
      style={styles.input}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    // paddingVertical: 20,
    height: 60,
    paddingHorizontal: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: borders.br10,
    fontSize: fonts.fs16,
    backgroundColor: colors.greenSecondary,
    color: colors.white,
  },
});
