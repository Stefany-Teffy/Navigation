import * as React from "react";
import { Text, View } from "react-native";
import meuestilo from "../meuestilo";

const Gastronomia = () => {
  return (
    <View style={meuestilo.container}>
      <Text style={meuestilo.texto}>Gastronomia</Text>
      <View style={meuestilo.column}>
        <View style={[meuestilo.quadrado, { backgroundColor: "#484848" }]} />
        <View style={[meuestilo.quadrado, { backgroundColor: "#484848" }]} />
        <View style={[meuestilo.quadrado, { backgroundColor: "#484848" }]} />
        <View style={[meuestilo.quadrado, { backgroundColor: "#484848" }]} />
        <View style={[meuestilo.quadrado, { backgroundColor: "#484848" }]} />
      </View>
      <View style={meuestilo.footer}>
        <Text style={meuestilo.footerText}>Gastronomia</Text>
      </View>
    </View>
  );
};

export default Gastronomia;
