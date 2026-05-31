import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/compartido/MenuScreen';
import CrearExperienciaScreen from '../screens/influencer/CrearExperienciaScreen';
import VisualizacionScreen from '../screens/compartido/VisualizacionScreen';
import SuscripcionesScreen from '../screens/compartido/SuscripcionesScreen';
import PerfilScreen from '../screens/compartido/PerfilScreen';

// Nueva pantalla para visitantes
import SeguidosScreen from '../screens/visitante/SeguidosScreen';

// Nuevas pantallas de detalle
import ExperienciaCreadaDetailScreen from '../screens/compartido/ExperienciaCreadaDetailScreen';
import ParticipantesListScreen from '../screens/compartido/ParticipantesListScreen';
import ExperienciaParticipandoDetailScreen from '../screens/compartido/ExperienciaParticipandoDetailScreen';
import FelicidadesParticiparScreen from '../screens/compartido/FelicidadesParticiparScreen';
import CheckoutScreen from '../screens/compartido/CheckoutScreen';

const Tab = createBottomTabNavigator();

// Stack para la sección "Menu"
const MenuStack = createNativeStackNavigator();
function MenuStackScreen({ route }) {
  const role = route.params?.role || 'influencer';
  return (
    <MenuStack.Navigator screenOptions={{ headerShown: false }}>
      <MenuStack.Screen name="MenuMain" component={MenuScreen} initialParams={{ role }} />
      <MenuStack.Screen name="ExperienciaParticipandoDetail" component={ExperienciaParticipandoDetailScreen} />
      <MenuStack.Screen name="Checkout" component={CheckoutScreen} />
      <MenuStack.Screen name="FelicidadesParticipar" component={FelicidadesParticiparScreen} />
    </MenuStack.Navigator>
  );
}

// Stack para la sección "Visualizacion"
const VisualizacionStack = createNativeStackNavigator();
function VisualizacionStackScreen({ route }) {
  const role = route.params?.role || 'influencer';
  return (
    <VisualizacionStack.Navigator screenOptions={{ headerShown: false }}>
      <VisualizacionStack.Screen name="VisualizacionMain" component={VisualizacionScreen} initialParams={{ role }} />
      <VisualizacionStack.Screen name="ExperienciaCreadaDetail" component={ExperienciaCreadaDetailScreen} />
      <VisualizacionStack.Screen name="ParticipantesList" component={ParticipantesListScreen} />
      <VisualizacionStack.Screen name="ExperienciaParticipandoDetail" component={ExperienciaParticipandoDetailScreen} />
      <VisualizacionStack.Screen name="Checkout" component={CheckoutScreen} />
      <VisualizacionStack.Screen name="FelicidadesParticipar" component={FelicidadesParticiparScreen} />
    </VisualizacionStack.Navigator>
  );
}

function TabIcon({ emoji, focused }) {
  return (
    <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
      <Text style={[styles.iconText, focused && styles.iconTextActive]}>
        {emoji}
      </Text>
    </View>
  );
}

export default function InfluencerTabs({ route }) {
  const role = route.params?.role || 'influencer';
  const isInfluencer = role === 'influencer';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ff1493',
        tabBarInactiveTintColor: '#888',
      }}
    >
      {/* 1. Suscripciones (Para Ambos, Icono Ribbon 🎗️) */}
      <Tab.Screen
        name="Suscripciones"
        component={SuscripcionesScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon emoji="🎗️" focused={focused} />,
        }}
      />

      {/* Condicional según el Rol */}
      {isInfluencer ? (
        <>
          {/* 2. Menu (Para Influencer, Icono Home 🏠) */}
          <Tab.Screen
            name="Menu"
            component={MenuStackScreen}
            initialParams={{ role }}
            options={{
              tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
            }}
          />

          {/* 3. CrearExperiencia (Para Influencer, Icono Plus ➕) */}
          <Tab.Screen
            name="CrearExperiencia"
            component={CrearExperienciaScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabIcon emoji="➕" focused={focused} />,
            }}
          />
        </>
      ) : (
        <>
          {/* 2. Seguidos (Para Visitante, Icono List/Bullet ☰) */}
          <Tab.Screen
            name="Seguidos"
            component={SeguidosScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabIcon emoji="☰" focused={focused} />,
            }}
          />

          {/* 3. Menu (Para Visitante, Icono Home 🏠) */}
          <Tab.Screen
            name="Menu"
            component={MenuStackScreen}
            initialParams={{ role }}
            options={{
              tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
            }}
          />
        </>
      )}

      {/* 4. Visualizacion (Para Ambos, Icono Eye 👁️) */}
      <Tab.Screen
        name="Visualizacion"
        component={VisualizacionStackScreen}
        initialParams={{ role }}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon emoji="👁️" focused={focused} />,
        }}
      />

      {/* 5. Perfil (Para Ambos, Icono User 👤, se le pasa el rol por initialParams) */}
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        initialParams={{ role }}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon emoji="👤" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1a1a2e',
    borderTopWidth: 2,
    borderTopColor: '#ff1493',
    height: 65,
    paddingBottom: 8,
    paddingTop: 8,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerActive: {
    backgroundColor: '#ff1493',
  },
  iconText: {
    fontSize: 22,
  },
  iconTextActive: {
    fontSize: 24,
  },
});
