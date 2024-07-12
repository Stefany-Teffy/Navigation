import * as React from "react";
import { Text, View } from "react-native";
import meuestilo from "../meuestilo";

const Turismo = () => {
  return (
    <View style={meuestilo.container}>
      <Text style={meuestilo.texto}>Mapa Turístico</Text>
      <View style={meuestilo.mapa} />
      <View style={meuestilo.footer}>
        <Text style={meuestilo.footerText}>Turismo</Text>
      </View>
    </View>
  );
};

export default Turismo;
