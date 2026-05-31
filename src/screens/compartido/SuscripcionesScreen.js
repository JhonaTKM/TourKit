import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

const paquetes = [
  {
    id: 1,
    nombre: 'Paquete BASICO',
    precio: '$50',
    beneficios: [
      'Publicación de hasta 5 experiencias',
      'Visibilidad estándar en el catálogo',
      'Soporte por correo electrónico',
    ],
  },
  {
    id: 2,
    nombre: 'Paquete PREMIUM',
    precio: '$150',
    beneficios: [
      'Publicación de hasta 15 experiencias',
      'Visibilidad destacada en el catálogo',
      'Estadísticas básicas de visualización',
      'Soporte prioritario',
    ],
  },
  {
    id: 3,
    nombre: 'Paquete VIP',
    precio: '$500',
    beneficios: [
      'Publicaciones ilimitadas',
      'Máxima visibilidad y promoción',
      'Estadísticas avanzadas y analítica',
      'Soporte 24/7 dedicado',
      'Badge VIP en tu perfil',
    ],
  },
];

export default function SuscripcionesScreen() {
  const handleComprar = (paquete) => {
    console.log('Comprar:', paquete.nombre);
  };

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
        <Text style={styles.titleText}>SUSCRIPCIONES</Text>
      </View>

      {/* Lista de paquetes */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {paquetes.map((paq) => (
          <View key={paq.id} style={styles.card}>
            <Text style={styles.cardNombre}>{paq.nombre}</Text>

            <View style={styles.separator} />

            {paq.beneficios.map((beneficio, index) => (
              <View key={index} style={styles.beneficioRow}>
                <Text style={styles.beneficioBullet}>•</Text>
                <Text style={styles.beneficioText}>{beneficio}</Text>
              </View>
            ))}

            <View style={styles.separator} />

            <View style={styles.cardFooter}>
              <Text style={styles.cardPrecio}>{paq.precio}</Text>
              <TouchableOpacity
                style={styles.comprarButton}
                onPress={() => handleComprar(paq)}
              >
                <Text style={styles.comprarButtonText}>COMPRAR</Text>
              </TouchableOpacity>
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
    padding: 18,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  cardNombre: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1a1a2e',
    letterSpacing: 1,
    marginBottom: 8,
  },
  separator: {
    height: 2,
    backgroundColor: '#ff69b4',
    marginVertical: 10,
    borderRadius: 1,
  },
  beneficioRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
    paddingLeft: 4,
  },
  beneficioBullet: {
    fontSize: 14,
    color: '#1a1a2e',
    marginRight: 8,
    fontWeight: '700',
  },
  beneficioText: {
    fontSize: 13,
    color: '#1a1a2e',
    fontWeight: '500',
    flex: 1,
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrecio: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1a1a2e',
  },
  comprarButton: {
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  comprarButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
