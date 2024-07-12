import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; // Importando o Icon
import Inicio from "./screens/inicio";
import IBGE from "./screens/ibge";
import Turismo from "./screens/turismo";
import Gastronomia from "./screens/gastronomia";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#1D154E",
          headerTintColor: "#1D154E",
          tabBarStyle: { backgroundColor: "#BABAB8" },
          headerStyle: { backgroundColor: "#BABAB8" },
        }}>
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarIcon: () => <Icon name="home" size={25} color="#1D154E" />,
          }}
        />
        <Tab.Screen
          name="IBGE"
          component={IBGE}
          options={{
            tabBarIcon: () => (
              <Icon name="stats-chart" size={25} color="#1D154E" />
            ),
          }}
        />
        <Tab.Screen
          name="Turismo"
          component={Turismo}
          options={{
            tabBarIcon: () => <Icon name="map" size={25} color="#1D154E" />,
          }}
        />
        <Tab.Screen
          name="Gastronomia"
          component={Gastronomia}
          options={{
            tabBarIcon: () => <Icon name="pizza" size={25} color="#1D154E" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
