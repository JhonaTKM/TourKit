import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Tour</Text>
        <Text style={styles.logoIcon}>🏃‍♂️</Text>
        <Text style={styles.logoText}>Kit</Text>
      </View>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>Tu compañero de viaje</Text>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.welcomeTitle}>¡BIENVENIDO!</Text>
        <Text style={styles.welcomeDescription}>
          Descubre los mejores destinos y comparte tus experiencias con la comunidad.
        </Text>

        {/* Botón Iniciar Sesión */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.primaryButtonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>

        {/* Botón Registrarse */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.secondaryButtonText}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ff1493',
    letterSpacing: 3,
  },
  logoIcon: {
    fontSize: 42,
    marginHorizontal: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#ff69b4',
    fontWeight: '500',
    marginBottom: 40,
    letterSpacing: 1,
  },
  card: {
    width: '100%',
    backgroundColor: '#ff1493',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#ff1493',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1a1a2e',
    marginBottom: 15,
    letterSpacing: 2,
  },
  welcomeDescription: {
    fontSize: 14,
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  primaryButton: {
    width: '75%',
    height: 48,
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1.5,
  },
  secondaryButton: {
    width: '75%',
    height: 48,
    backgroundColor: '#ff69b4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a2e',
    letterSpacing: 1.5,
  },
});
