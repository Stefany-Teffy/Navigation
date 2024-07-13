import * as React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import meuestilo from "../meuestilo";

const dadosIBGE = [
  {
    id: 1,
    icone: "people",
    titulo: "População Residente\n",
    texto: "População Residente\n\n278.881 pessoas",
  },
  {
    id: 2,
    icone: "earth",
    titulo: "Área Territorial\n",
    texto: "Área Territorial\n\n791,144 km²",
  },
  {
    id: 3,
    icone: "analytics",
    titulo: "Densidade Demográfica\n",
    texto: "Densidade Demográfica\n\n352,50 hab/km²",
  },
  {
    id: 4,
    icone: "school",
    titulo: "Escolarização\n",
    texto: "Escolarização\n\n97,4%",
  },
  {
    id: 5,
    icone: "medal",
    titulo: "IDHM\n",
    texto: "IDHM\n\n 0,74",
  },
  { id: 6, icone: "cash", titulo: "PIB\n", texto: "PIB\n\nR$ 51.003,60" },
];

const IBGE = () => {
  const [selecionado, setSelecionado] = useState(dadosIBGE[0]);

  return (
    <View style={meuestilo.ibgeContainer}>
      <View style={meuestilo.quadradoGrande}>
        <Image
          source={require("../assets/detalhe.png")}
          style={meuestilo.cantoPreto}
        />
        <Image
          source={require("../assets/passaro.png")}
          style={meuestilo.passaro}
        />
        <Icon name={selecionado.icone} size={50} color="#fff" />
        <Text style={meuestilo.textoQuadradoGrande}>{selecionado.texto}</Text>
      </View>
      <View style={meuestilo.quadradosMenoresContainer}>
        <View style={meuestilo.linhaQuadrados}>
          {dadosIBGE.slice(0, 3).map((item) => (
            <TouchableOpacity
              key={item.id}
              style={meuestilo.quadradoMenor}
              onPress={() => setSelecionado(item)}>
              <Icon name={item.icone} size={30} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>
        <View style={meuestilo.linhaQuadrados}>
          {dadosIBGE.slice(3, 6).map((item) => (
            <TouchableOpacity
              key={item.id}
              style={meuestilo.quadradoMenor}
              onPress={() => setSelecionado(item)}>
              <Icon name={item.icone} size={30} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default IBGE;
