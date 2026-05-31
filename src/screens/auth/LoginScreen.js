import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('influencer'); // 'influencer' o 'visitante'

  const handleLogin = () => {
    // Navegar al dashboard con el rol seleccionado
    navigation.reset({
      index: 0,
      routes: [{ name: 'InfluencerHome', params: { role: rol } }],
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Tour</Text>
            <Text style={styles.logoIcon}>🏃‍♂️</Text>
            <Text style={styles.logoText}>Kit</Text>
          </View>

          {/* Card */}
          <View style={styles.card}>
            <Text style={styles.title}>INICIAR SESIÓN</Text>

            {/* Campo Usuario */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Usuario:</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu usuario"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            {/* Campo Contraseña */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contraseña:</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* Selector de Rol */}
            <View style={styles.rolContainer}>
              <TouchableOpacity
                style={[
                  styles.rolButton,
                  rol === 'influencer' && styles.rolButtonActive,
                ]}
                onPress={() => setRol('influencer')}
              >
                <Text
                  style={[
                    styles.rolButtonText,
                    rol === 'influencer' && styles.rolButtonTextActive,
                  ]}
                >
                  Influencer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.rolButton,
                  rol === 'visitante' && styles.rolButtonActive,
                ]}
                onPress={() => setRol('visitante')}
              >
                <Text
                  style={[
                    styles.rolButtonText,
                    rol === 'visitante' && styles.rolButtonTextActive,
                  ]}
                >
                  Visitante
                </Text>
              </TouchableOpacity>
            </View>

            {/* Botón Ingresar */}
            <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
              <Text style={styles.primaryButtonText}>INGRESAR</Text>
            </TouchableOpacity>

            {/* Botón Registrar */}
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.secondaryButtonText}>REGISTRAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#ff1493',
    letterSpacing: 2,
  },
  logoIcon: {
    fontSize: 32,
    marginHorizontal: 4,
  },
  card: {
    width: '100%',
    backgroundColor: '#ff1493',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#ff1493',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a1a2e',
    marginBottom: 30,
    letterSpacing: 1,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButton: {
    width: '65%',
    height: 44,
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1,
  },
  secondaryButton: {
    width: '65%',
    height: 44,
    backgroundColor: '#ff69b4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a2e',
    letterSpacing: 1,
  },
  rolContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 12,
    marginBottom: 6,
    width: '100%',
  },
  rolButton: {
    flex: 1,
    height: 42,
    backgroundColor: '#ff69b4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#1a1a2e',
  },
  rolButtonActive: {
    backgroundColor: '#1a1a2e',
  },
  rolButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  rolButtonTextActive: {
    color: '#fff',
  },
});
