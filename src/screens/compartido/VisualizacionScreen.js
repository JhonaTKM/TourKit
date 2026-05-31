import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

const experienciasCreadas = [
  {
    id: 1,
    nombre: 'EXPERIENCIA ZOMBIE',
    organizacion: 'HorrorFest',
    costo: 'S/. 95.00',
    fecha: '31/10/2026',
    lugar: 'Cust. Miraflores',
    aforo: '50 personas',
  },
  {
    id: 2,
    nombre: 'FORMULA KART',
    organizacion: 'SpeedZone',
    costo: 'S/. 120.00',
    fecha: '10/07/2026',
    lugar: 'Lurín, Lima',
    aforo: '15 personas',
  },
];

const experienciasParticipando = [
  {
    id: 3,
    nombre: 'HUACA SAN MARCOS',
    organizacion: 'ArcheoTours',
    costo: 'S/. 45.00',
    fecha: '15/06/2026',
    lugar: 'Lima, Perú',
    aforo: '30 personas',
  },
];

export default function VisualizacionScreen({ route, navigation }) {
  const role = route.params?.role || 'influencer';
  const [busqueda, setBusqueda] = useState('');
  const [tabActivo, setTabActivo] = useState('creadas');

  const experiencias = tabActivo === 'creadas' ? experienciasCreadas : experienciasParticipando;

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
        <Text style={styles.titleText}>VISUALIZACION</Text>
      </View>

      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar experiencias..."
            placeholderTextColor="#999"
            value={busqueda}
            onChangeText={setBusqueda}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Text style={styles.searchEmoji}>🔍</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>☰</Text>
          <Text style={styles.filterText}>FILTRAR</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, tabActivo === 'creadas' && styles.tabActive]}
          onPress={() => setTabActivo('creadas')}
        >
          <Text style={[styles.tabText, tabActivo === 'creadas' && styles.tabTextActive]}>
            CREADAS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tabActivo === 'participando' && styles.tabActive]}
          onPress={() => setTabActivo('participando')}
        >
          <Text style={[styles.tabText, tabActivo === 'participando' && styles.tabTextActive]}>
            PARTICIPANDO
          </Text>
        </TouchableOpacity>
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
            onPress={() => {
              if (tabActivo === 'creadas') {
                navigation.navigate('ExperienciaCreadaDetail', { exp, role });
              } else {
                navigation.navigate('ExperienciaParticipandoDetail', { exp, role });
              }
            }}
            activeOpacity={0.8}
          >
            <View style={styles.cardImagePlaceholder}>
              <Text style={styles.cardImageEmoji}>
                {tabActivo === 'creadas' ? '🏛️' : '🧟'}
              </Text>
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#ffe0f0',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
    borderWidth: 2,
    borderColor: '#1a1a2e',
    marginRight: 10,
  },
  searchIcon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#ffe0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  searchEmoji: {
    fontSize: 18,
  },
  filterButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
    gap: 6,
  },
  filterIcon: {
    fontSize: 14,
    color: '#ff1493',
    fontWeight: '800',
  },
  filterText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 12,
    gap: 10,
  },
  tab: {
    flex: 1,
    backgroundColor: '#ff69b4',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  tabActive: {
    backgroundColor: '#1a1a2e',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1a1a2e',
    letterSpacing: 1,
  },
  tabTextActive: {
    color: '#fff',
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
