import React from "react";
import { Stack } from "expo-router";
import ThemeProvider from "./context/theme-context";
import { Platform, StatusBar } from "react-native";

export default function _layout() {
  return (
    <ThemeProvider>
      {Platform.OS === "android" ? (
        <StatusBar
          barStyle="light-content"
          backgroundColor="#transparent"
          translucent={false}
        />
      ) : (
        <StatusBar barStyle="dark-content" />
      )}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(routes)/onboarding/index" />
      </Stack>
    </ThemeProvider>
  );
}
