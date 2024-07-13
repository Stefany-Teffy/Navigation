import { StyleSheet } from "react-native";

const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D154E",
    alignItems: "center",
    paddingTop: 50,
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 50,
  },
  brasao: {
    width: 280,
    height: 300,
    marginBottom: 35,
  },
  miniHistoriaContainer: {
    backgroundColor: "rgba(217, 217, 217, 0.42)",
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  miniHistoria: {
    fontSize: 16,
    color: "#fff",
    textAlign: "justify",
    lineHeight: 22,
  },
  // Estilos para a tela IBGE
  ibgeContainer: {
    flex: 1,
    backgroundColor: "#BABAB8",
    alignItems: "center",
    paddingTop: 20,
  },
  quadradoGrande: {
    backgroundColor: "#1A2A55",
    width: "90%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 80,
    marginTop: 65,
    position: "relative",
  },
  cantoPreto: {
    position: "absolute",
    top: -42,
    right: 0,
    width: 90,
    height: 90,
  },
  passaro: {
    position: "absolute",
    top: 185,
    left: -37,
    width: 120,
    height: 120,
  },
  textoQuadradoGrande: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  quadradosMenoresContainer: {
    width: "100%",
    alignItems: "center",
  },
  linhaQuadrados: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 40,
  },
  quadradoMenor: {
    backgroundColor: "#1A2A55",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  icone: {
    color: "#fff",
  },
  // Estilos para a tela de Turismo
  turismoContainer: {
    flex: 1,
    backgroundColor: "#1D154E",
    alignItems: "center",
    paddingTop: 0,
    padding: 0,
  },
  turismoMapa: {
    width: "90%",
    height: "50%",
    marginTop: 50,
  },
  turismoImagemContainer: {
    position: "absolute",
    width: "90%",
    height: "50%",
    marginTop: 50,
  },
  turismoImagemDetalhe: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  turismoBotaoFechar: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
  },
  turismoTextoBotaoFechar: {
    color: "#000",
    fontWeight: "bold",
  },
  turismoDescricaoContainer: {
    width: "90%",
    height: "30%",
    marginTop: 60,
    padding: 12,
    backgroundColor: "rgba(217, 217, 217, 0.42)",
    borderRadius: 10,
    alignItems: "justify",
  },
  turismoTituloDetalhe: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 17,
    textAlign: "justify",
  },
  turismoDescricaoDetalhe: {
    fontSize: 14,
    color: "#fff",
    textAlign: "justify",
    lineHeight: 22,
  },
});

export default meuestilo;
