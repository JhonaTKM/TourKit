import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const experiencias = [
  {
    id: 1,
    nombre: 'HUACA SAN MARCOS',
    organizacion: 'ArcheoTours',
    costo: 'S/. 45.00',
    fecha: '15/06/2026',
    lugar: 'Lima, Perú',
    aforo: '30 personas',
    color: '#ffe0f0',
  },
  {
    id: 2,
    nombre: 'COSTA VERDE',
    organizacion: 'SeaVibes',
    costo: 'S/. 60.00',
    fecha: '22/06/2026',
    lugar: 'Miraflores, Lima',
    aforo: '25 personas',
    color: '#ffe0f0',
  },
  {
    id: 3,
    nombre: 'CHOSICA',
    organizacion: 'MontañaViva',
    costo: 'S/. 80.00',
    fecha: '01/07/2026',
    lugar: 'Chosica, Lima',
    aforo: '20 personas',
    color: '#ffe0f0',
  },
  {
    id: 4,
    nombre: 'FORMULA KART',
    organizacion: 'SpeedZone',
    costo: 'S/. 120.00',
    fecha: '10/07/2026',
    lugar: 'Lurín, Lima',
    aforo: '15 personas',
    color: '#ffe0f0',
  },
];

export default function MenuScreen({ route, navigation }) {
  const role = route.params?.role || 'influencer';

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
        <Text style={styles.titleText}>MENU</Text>
      </View>

      {/* Lista de experiencias */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {experiencias.map((exp) => (
          <TouchableOpacity
            key={exp.id}
            style={styles.card}
            onPress={() => navigation.navigate('ExperienciaParticipandoDetail', { exp, role })}
            activeOpacity={0.8}
          >
            <View style={styles.cardImagePlaceholder}>
              <Text style={styles.cardImageEmoji}>🏞️</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>{exp.nombre}</Text>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Organización:</Text>
                <View style={styles.cardValueBadge}>
                  <Text style={styles.cardValue}>{exp.organizacion}</Text>
                </View>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Costo:</Text>
                <View style={styles.cardValueBadge}>
                  <Text style={styles.cardValue}>{exp.costo}</Text>
                </View>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Fecha:</Text>
                <View style={styles.cardValueBadge}>
                  <Text style={styles.cardValue}>{exp.fecha}</Text>
                </View>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Lugar:</Text>
                <View style={styles.cardValueBadge}>
                  <Text style={styles.cardValue}>{exp.lugar}</Text>
                </View>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Aforo:</Text>
                <View style={styles.cardValueBadge}>
                  <Text style={styles.cardValue}>{exp.aforo}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffe0f0',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  cardImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#ffb6d9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#1a1a2e',
  },
  cardImageEmoji: {
    fontSize: 36,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1a1a2e',
    marginBottom: 6,
    letterSpacing: 1,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1a1a2e',
    marginRight: 6,
  },
  cardValueBadge: {
    backgroundColor: '#ff69b4',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  cardValue: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
  },
});
