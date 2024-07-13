import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
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
          tabBarStyle: { backgroundColor: "#BABAB8" },
          headerStyle: { backgroundColor: "#BABAB8" },
        }}>
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarActiveTintColor: "#1D154E",
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="IBGE"
          component={IBGE}
          options={{
            headerStyle: { backgroundColor: "#1D154E" },
            tabBarStyle: { backgroundColor: "#1D154E" },
            headerTintColor: "#BABAB8",
            tabBarActiveTintColor: "#BABAB8",
            tabBarInactiveTintColor: "#283C70",
            tabBarIcon: ({ color }) => (
              <Icon name="stats-chart" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Turismo"
          component={Turismo}
          options={{
            tabBarActiveTintColor: "#1D154E",
            tabBarIcon: ({ color }) => (
              <Icon name="map" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Gastronomia"
          component={Gastronomia}
          options={{
            headerStyle: { backgroundColor: "#1D154E" },
            tabBarStyle: { backgroundColor: "#1D154E" },
            headerTintColor: "#BABAB8",
            tabBarActiveTintColor: "#BABAB8",
            tabBarInactiveTintColor: "#283C70",
            tabBarIcon: ({ color }) => (
              <Icon name="pizza" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
