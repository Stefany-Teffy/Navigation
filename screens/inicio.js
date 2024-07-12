import * as React from "react";
import { Text, View, Image } from "react-native";
import meuestilo from "../meuestilo";

const Inicio = () => {
  return (
    <View style={meuestilo.container}>
      <Text style={meuestilo.titulo}>Petrópolis | RJ</Text>
      <Image
        source={require("../assets/brasao.png")}
        style={meuestilo.brasao}
      />
      <View style={meuestilo.miniHistoriaContainer}>
        <Text style={meuestilo.miniHistoria}>
          Petrópolis, conhecida como a "Cidade Imperial", foi fundada em 1843
          pelo imperador Dom Pedro II. Destaque-se por sua rica e bem preservada
          arquitetura histórica, além de ser um popular destino turístico. A
          cidade representa um marco significativo na história do Brasil.
        </Text>
      </View>
    </View>
  );
};

export default Inicio;
