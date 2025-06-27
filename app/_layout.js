import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Host } from "react-native-portalize";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../shared/theme/colors";
import { StatusBar } from "react-native";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.greenMain }}>
      <SafeAreaProvider>
        <StatusBar />
        <Host>
          <Stack
            screenOptions={{
              headerShown: false,
              headerStyle: { backgroundColor: colors.greenMain },
              headerTintColor: colors.white,
              headerTitleStyle: { fontWeight: "bold" },
              // contentStyle: { backgroundColor: "#184a3f" },
            }}
          >
            <Stack.Screen name="index" options={{ title: "Главная" }} />
            <Stack.Screen
              name="calculator"
              options={{ title: "Калькулятор" }}
            />
            <Stack.Screen name="login" options={{ title: "Логин" }} />
            {/* 
        Все файлы в /app автоматически становятся экранами. 
        Порядок и иконки определяются по имени файла и папкам.
      */}
          </Stack>
        </Host>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
