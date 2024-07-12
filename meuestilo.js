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
    marginTop: 40,
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
    marginBottom: 50, // linhas de quadrados pequenos
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
});

export default meuestilo;
