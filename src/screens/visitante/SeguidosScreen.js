import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const influencersMock = [
  {
    id: '1',
    nombre: 'Jose Benjamin',
    apellido: 'Flores Gomez',
    estado: 'Activo',
    favoritos: '4 Estrellas',
    experiencia: '12 Años',
    emoji: '🧔',
  },
  {
    id: '2',
    nombre: 'Daniel David',
    apellido: 'Lorenzo Ramos',
    estado: 'Activo',
    favoritos: '5 Estrellas',
    experiencia: '10 Años',
    emoji: '🧑',
  },
  {
    id: '3',
    nombre: 'Maria Fernanda',
    apellido: 'Perez Diaz',
    estado: 'Activo',
    favoritos: '5 Estrellas',
    experiencia: '15 Años',
    emoji: '👩',
  },
];

export default function SeguidosScreen() {
  const [busqueda, setBusqueda] = useState('');

  const filteredInfluencers = influencersMock.filter(inf => 
    inf.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    inf.apellido.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Header TourKit */}
      <View style={styles.headerContainer}>
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>Tour</Text>
          <Text style={styles.logoIcon}>🏃‍♂️</Text>
          <Text style={styles.logoText}>Kit</Text>
        </View>
        <View style={styles.headerUnderline} />
      </View>

      {/* Subheader Ribbon */}
      <View style={styles.ribbon}>
        <Text style={styles.ribbonText}>SEGUIDOS</Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar influencers..."
            placeholderTextColor="#999"
            value={busqueda}
            onChangeText={setBusqueda}
          />
          <View style={styles.searchIcon}>
            <Text style={styles.searchEmoji}>🔍</Text>
          </View>
        </View>
      </View>

      {/* Influencers List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredInfluencers.map((inf) => (
          <View key={inf.id} style={styles.card}>
            {/* Circular Avatar */}
            <View style={styles.avatarBorder}>
              <View style={styles.avatarBg}>
                <Text style={styles.avatarEmoji}>{inf.emoji}</Text>
              </View>
            </View>

            {/* Info Side */}
            <View style={styles.infoSide}>
              <Text style={styles.infTitle}>INFLUENCER 0{inf.id}</Text>

              {/* Nombre */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Nombre:</Text>
                <View style={styles.valueBox}>
                  <Text style={styles.valueText} numberOfLines={1}>
                    {inf.nombre}
                  </Text>
                </View>
              </View>

              {/* Apellido */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Apellido:</Text>
                <View style={styles.valueBox}>
                  <Text style={styles.valueText} numberOfLines={1}>
                    {inf.apellido}
                  </Text>
                </View>
              </View>

              {/* Estado */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Estado:</Text>
                <View style={styles.valueBox}>
                  <Text style={styles.valueText} numberOfLines={1}>
                    {inf.estado}
                  </Text>
                </View>
              </View>

              {/* Favoritos */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Favoritos:</Text>
                <View style={styles.valueBox}>
                  <Text style={styles.valueText} numberOfLines={1}>
                    {inf.favoritos}
                  </Text>
                </View>
              </View>

              {/* Experiencia */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>N° Experiencia:</Text>
                <View style={styles.valueBox}>
                  <Text style={styles.valueText} numberOfLines={1}>
                    {inf.experiencia}
                  </Text>
                </View>
              </View>
            </View>
          </View>
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
  headerContainer: {
    paddingTop: 50,
    backgroundColor: '#ff1493',
    alignItems: 'center',
    paddingBottom: 4,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 34,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 2,
  },
  logoIcon: {
    fontSize: 30,
    marginHorizontal: 4,
  },
  headerUnderline: {
    width: '90%',
    height: 4,
    backgroundColor: '#000',
    marginTop: 4,
  },
  ribbon: {
    backgroundColor: '#ff1493',
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 4,
  },
  ribbonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
    letterSpacing: 1.5,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 38,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
    marginRight: 8,
  },
  searchIcon: {
    width: 38,
    height: 38,
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchEmoji: {
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    marginTop: 15,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#ff1493',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 20,
    padding: 14,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  avatarBorder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2.5,
    borderColor: '#000',
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarBg: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffb6d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 44,
  },
  infoSide: {
    flex: 1,
    marginLeft: 14,
  },
  infTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#000',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailLabel: {
    width: 90,
    fontSize: 11,
    fontWeight: '800',
    color: '#000',
  },
  valueBox: {
    flex: 1,
    height: 20,
    backgroundColor: '#fff',
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 4,
    paddingHorizontal: 6,
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#000',
  },
});
