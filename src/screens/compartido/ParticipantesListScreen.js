import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const participantesMock = [
  'PERSONA 01',
  'PERSONA 02',
  'PERSONA 03',
  'PERSONA 04',
  'PERSONA 05',
  'PERSONA 06',
  'PERSONA 07',
  'PERSONA 08',
  'PERSONA 09',
  'PERSONA 10',
  'PERSONA 11',
  'PERSONA 12',
];

export default function ParticipantesListScreen({ route, navigation }) {
  const { exp } = route.params || { exp: { nombre: 'HUACA SAN MARCOS' } };

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
        <Text style={styles.ribbonText}>EXPERIENCIA COMPRADA</Text>
      </View>

      {/* Main Body */}
      <View style={styles.mainContainer}>
        <View style={styles.card}>
          {/* Título de Experiencia */}
          <Text style={styles.expTitle}>{exp.nombre}</Text>

          {/* Lista de Personas Scrollable */}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {participantesMock.map((persona, index) => (
              <View key={index} style={styles.personaBadge}>
                <Text style={styles.personaText}>{persona}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Botón Volver */}
          <TouchableOpacity
            style={styles.btnVolver}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnText}>VOLVER</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },
  card: {
    flex: 1,
    backgroundColor: '#ff1493',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  expTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#ff1493',
    borderRadius: 10,
    marginBottom: 10,
  },
  scrollContent: {
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  personaBadge: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    height: 38,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  personaText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#000',
    letterSpacing: 0.5,
  },
  btnVolver: {
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3,
  },
  btnText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 1,
  },
});
