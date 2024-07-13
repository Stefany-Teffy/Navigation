import * as React from "react";
import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import meuestilo from "../meuestilo";

const pontosTuristicos = [
  {
    nome: "Centro de Congressos e Convenções Palácio Quitandinha: ",
    descricao:
      "O Palácio Quitandinha é um imponente edifício histórico que combina arquitetura de estilo art déco com modernas instalações para eventos, oferecendo uma vista deslumbrante e uma rica história cultural.",
    coordenadas: { latitude: -22.5271904, longitude: -43.2152119 },
    imagem: require("../assets/palacio.png"),
  },
  {
    nome: "Santuário Vale do Amor: ",
    descricao:
      "O Santuário Vale do Amor é um local de serenidade e espiritualidade, onde os visitantes podem desfrutar de uma atmosfera tranquila e contemplativa em meio à natureza exuberante de Petrópolis.",
    coordenadas: { latitude: -22.4525773, longitude: -43.2435728 },
    imagem: require("../assets/santuario.png"),
  },
  {
    nome: "Parque Nacional da Serra dos Órgãos: ",
    descricao:
      "O Parque Nacional da Serra dos Órgãos é conhecido por suas impressionantes formações rochosas e trilhas desafiadoras, proporcionando aos aventureiros e amantes da natureza uma experiência inesquecível de contato com a biodiversidade e paisagens deslumbrantes.",
    coordenadas: { latitude: -22.4682057, longitude: -43.0663485 },
    imagem: require("../assets/parque.png"),
  },
  {
    nome: "Casa Stefan Zweig: ",
    descricao:
      "A Casa Stefan Zweig é um charmoso museu dedicado ao famoso escritor austríaco, oferecendo uma visão íntima de sua vida e obra, além de preservar a beleza e a história da residência onde ele passou seus últimos anos.",
    coordenadas: { latitude: -22.5205419, longitude: -43.1901975 },
    imagem: require("../assets/xadrez.png"),
  },
];

const Turismo = () => {
  const [localSelecionado, setLocalSelecionado] = useState(null);

  const handleMarkerPress = (ponto) => {
    setLocalSelecionado(ponto);
  };

  const fecharDetalhes = () => {
    setLocalSelecionado(null);
  };

  return (
    <View style={meuestilo.turismoContainer}>
      <MapView
        style={meuestilo.turismoMapa}
        initialRegion={{
          latitude: -22.4837521,
          longitude: -43.2653596,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {pontosTuristicos.map((ponto, index) => (
          <Marker
            key={index}
            coordinate={ponto.coordenadas}
            title={ponto.nome}
            description={ponto.descricao}
            onPress={() => handleMarkerPress(ponto)}
          />
        ))}
      </MapView>
      {localSelecionado && (
        <View style={meuestilo.turismoImagemContainer}>
          <Image
            source={localSelecionado.imagem}
            style={meuestilo.turismoImagemDetalhe}
          />
          <TouchableOpacity
            onPress={fecharDetalhes}
            style={meuestilo.turismoBotaoFechar}>
            <Text style={meuestilo.turismoTextoBotaoFechar}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      {localSelecionado && (
        <View style={meuestilo.turismoDescricaoContainer}>
          <Text style={meuestilo.turismoTituloDetalhe}>
            {localSelecionado.nome}
          </Text>
          <Text style={meuestilo.turismoDescricaoDetalhe}>
            {localSelecionado.descricao}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Turismo;
