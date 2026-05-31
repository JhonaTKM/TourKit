import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function PerfilScreen({ route, navigation }) {
  const role = route.params?.role || 'influencer';

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  const isInfluencer = role === 'influencer';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Tour</Text>
        <Text style={styles.logoIcon}>🏃‍♂️</Text>
        <Text style={styles.logoText}>Kit</Text>
      </View>

      {/* Título */}
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>PERFIL</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>{isInfluencer ? '👤' : '🧔'}</Text>
          </View>
        </View>

        {/* Info del usuario */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Usuario</Text>
            <View style={styles.infoValueBox}>
              <Text style={styles.infoValue}>{isInfluencer ? 'Ginglsor' : 'LazarPUNCH'}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nombres</Text>
            <View style={styles.infoValueBox}>
              <Text style={styles.infoValue}>{isInfluencer ? 'Jose Benjamin' : 'Daniel David'}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Apellidos</Text>
            <View style={styles.infoValueBox}>
              <Text style={styles.infoValue}>{isInfluencer ? 'Flores Gomez' : 'Lorenzo Ramos'}</Text>
            </View>
          </View>
        </View>

        {isInfluencer ? (
          <>
            {/* Redes sociales */}
            <View style={styles.redesCard}>
              <Text style={styles.redesTitle}>Redes:</Text>
              <View style={styles.redesGrid}>
                <View style={styles.redBadge}>
                  <Text style={styles.redIcon}>📘</Text>
                  <Text style={styles.redText}>Facebook</Text>
                </View>
                <View style={styles.redBadge}>
                  <Text style={styles.redIcon}>🎵</Text>
                  <Text style={styles.redText}>TikTok</Text>
                </View>
                <View style={styles.redBadge}>
                  <Text style={styles.redIcon}>📷</Text>
                  <Text style={styles.redText}>Instagram</Text>
                </View>
                <View style={styles.redBadge}>
                  <Text style={styles.redIcon}>🧵</Text>
                  <Text style={styles.redText}>Threads</Text>
                </View>
              </View>
            </View>

            {/* Descripción */}
            <View style={styles.descCard}>
              <Text style={styles.descTitle}>Descripcion</Text>
              <Text style={styles.descText}>
                ¡Hola, soy Benjamin! El algo me define, es mi pasión por las
                buenas en el diseño. Nada es casual sino mi exploración más,
                cada textura, cada color y cada forma es una parte esencial de
                una historia a mis seguidores. Desde retro encima hasta
                un Passivation, mis herramientas son para alimentar y
                transformar.
              </Text>
            </View>

            {/* Favoritos */}
            <View style={styles.favoritosCard}>
              <Text style={styles.favoritosTitle}>FAVORIT@S</Text>
              <View style={styles.estrellas}>
                <Text style={styles.estrella}>⭐</Text>
                <Text style={styles.estrella}>⭐</Text>
                <Text style={styles.estrella}>⭐</Text>
                <Text style={styles.estrella}>⭐</Text>
                <Text style={styles.estrellaVacia}>☆</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            {/* Gustos (Visitor) */}
            <View style={styles.descCard}>
              <Text style={styles.descTitle}>Gustos</Text>
              <View style={styles.valueBoxSlashes}>
                <Text style={styles.descText}>
                  Música retro, camping, viajes de aventura por la sierra limeña, paseos al aire libre y deportes extremos los fines de semana.
                </Text>
                <Text style={styles.sketchSlashes}>
                  ////////////////////////////////////////////////////////////////
                </Text>
              </View>
            </View>

            {/* Descripción (Visitor) */}
            <View style={styles.descCard}>
              <Text style={styles.descTitle}>Descripcion</Text>
              <View style={styles.valueBoxSlashes}>
                <Text style={styles.descText}>
                  Me encanta descubrir nuevas rutas turísticas poco conocidas y experimentar la adrenalina de viajar junto a otros aventureros.
                </Text>
                <Text style={styles.sketchSlashes}>
                  ////////////////////////////////////////////////////////////////
                </Text>
              </View>
            </View>
          </>
        )}

        {/* Botón cerrar sesión */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>CERRAR SESIÓN</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1493',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#1a1a2e',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ff1493',
    letterSpacing: 2,
  },
  logoIcon: {
    fontSize: 28,
    marginHorizontal: 4,
  },
  titleBar: {
    backgroundColor: '#ff1493',
    paddingVertical: 12,
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#1a1a2e',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a1a2e',
    letterSpacing: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffe0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#1a1a2e',
  },
  avatarEmoji: {
    fontSize: 48,
  },
  infoCard: {
    backgroundColor: '#ffe0f0',
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  infoRow: {
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  infoValueBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ffb6d9',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  redesCard: {
    backgroundColor: '#ffe0f0',
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  redesTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  redesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  redBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff69b4',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 6,
  },
  redIcon: {
    fontSize: 14,
  },
  redText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  descCard: {
    backgroundColor: '#ffe0f0',
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  descTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  descText: {
    fontSize: 13,
    color: '#1a1a2e',
    lineHeight: 20,
    fontWeight: '400',
  },
  favoritosCard: {
    backgroundColor: '#ffe0f0',
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#1a1a2e',
    alignItems: 'center',
  },
  favoritosTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1a1a2e',
    marginBottom: 10,
    letterSpacing: 1,
  },
  estrellas: {
    flexDirection: 'row',
    gap: 6,
  },
  estrella: {
    fontSize: 28,
  },
  estrellaVacia: {
    fontSize: 28,
    color: '#ffb6d9',
  },
  logoutButton: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  valueBoxSlashes: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1a1a2e',
    borderRadius: 10,
    padding: 12,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 80,
  },
  sketchSlashes: {
    position: 'absolute',
    right: 8,
    bottom: 4,
    fontSize: 12,
    color: '#e0e0e0',
    fontWeight: '300',
    letterSpacing: -1,
    zIndex: 1,
  },
});
