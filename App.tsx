import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Svg height="100" width="100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
