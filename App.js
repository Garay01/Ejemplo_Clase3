import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760__340.jpg",
        }}
        style={{ width: 200, height: 100 }}
      />
      <Text style={[styles.text, styles.coral]}>
        Bryan Walberto Garay Alvarado
      </Text>
      <Text style={styles.text}>GA181935</Text>
      <Text style={styles.parr}>Ingeniería en Ciencias de la Computación</Text>
      <Text style={styles.parr}>Lenguaje favorito: Javascript</Text>
      <Text style={styles.parr}>Hobbies: Speedcube, fútbol</Text>
      <StatusBar style="auto" />
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
  text: {
    fontWeight: "bold",
    fontSize: "1.5em",
  },
  parr: {
    fontWeight: "bold",
    fontSize: "1em",
  },
  coral: {
    color: "coral",
  },
});
