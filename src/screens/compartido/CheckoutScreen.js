import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
  const { exp, role } = route.params || {
    role: 'visitante',
    exp: {
      id: 1,
      nombre: 'HUACA SAN MARCOS',
      organizacion: 'ArcheoTours',
      costo: 'S/. 45.00',
      fecha: '15/06/2026',
      lugar: 'Lima, Perú',
      aforo: '30 personas',
      descripcion: 'Exploración arqueológica guiada por las ruinas de la Huaca San Marcos.',
      hora: '09:00 AM - 12:00 PM',
      cant: '12 / 30 Participantes',
    }
  };

  const [metodo, setMetodo] = useState('tarjeta'); // 'tarjeta', 'yape', 'pagoefect'
  const [cuenta, setCuenta] = useState('');
  const [cvv, setCvv] = useState('');
  const [fechaV, setFechaV] = useState('');

  const handlePagar = () => {
    // Autocompleta con datos ficticios si se pulsa PAGAR con campos vacíos para facilitar las pruebas
    if (metodo === 'tarjeta' && (!cuenta || !cvv || !fechaV)) {
      setCuenta('4557 8812 3349 0021');
      setCvv('128');
      setFechaV('12/29');
    }

    // Navegar directamente al éxito sin bloqueos
    navigation.navigate('FelicidadesParticipar', { exp, role });
  };

  const formattedHora = exp?.hora ? exp.hora.split(' ')[0] : '09:00';

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

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Central Card */}
        <View style={styles.card}>
          {/* Top Card Info Block */}
          <View style={styles.topInfoRow}>
            {/* Circular Image */}
            <View style={styles.imageBorder}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=400'
                }}
                style={styles.image}
              />
            </View>

            {/* Side Details capsules */}
            <View style={styles.sideDetails}>
              <Text style={styles.expTitle}>{exp?.nombre || 'EXPERIENCIA'}</Text>

              <View style={styles.detailLine}>
                <Text style={styles.detailLabel}>Organizador:</Text>
                <View style={styles.detailValueBox}>
                  <Text style={styles.detailValueText} numberOfLines={1}>{exp?.organizacion || 'TourKit'}</Text>
                </View>
              </View>

              <View style={styles.detailLine}>
                <Text style={styles.detailLabel}>Cant. Participantes:</Text>
                <View style={styles.detailValueBox}>
                  <Text style={styles.detailValueText} numberOfLines={1}>30</Text>
                </View>
              </View>

              <View style={styles.detailLine}>
                <Text style={styles.detailLabel}>Lugar:</Text>
                <View style={styles.detailValueBox}>
                  <Text style={styles.detailValueText} numberOfLines={1}>{exp?.lugar || 'Por definir'}</Text>
                </View>
              </View>

              <View style={styles.detailLine}>
                <Text style={styles.detailLabel}>Hora:</Text>
                <View style={styles.detailValueBox}>
                  <Text style={styles.detailValueText} numberOfLines={1}>{formattedHora}</Text>
                </View>
              </View>

              <View style={styles.detailLine}>
                <Text style={styles.detailLabel}>Costo:</Text>
                <View style={styles.detailValueBox}>
                  <Text style={styles.detailValueText} numberOfLines={1}>{exp?.costo || 'Gratis'}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Payment Section Divider */}
          <View style={styles.divider} />

          {/* Método label */}
          <Text style={styles.sectionLabel}>Metodo</Text>

          {/* Método Tabs */}
          <View style={styles.metodosRow}>
            <TouchableOpacity
              style={[styles.metodoBtn, metodo === 'tarjeta' && styles.metodoBtnActive]}
              onPress={() => setMetodo('tarjeta')}
            >
              <Text style={[styles.metodoText, metodo === 'tarjeta' && styles.metodoTextActive]}>Tarjeta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.metodoBtn, metodo === 'yape' && styles.metodoBtnActive]}
              onPress={() => setMetodo('yape')}
            >
              <Text style={[styles.metodoText, metodo === 'yape' && styles.metodoTextActive]}>Yape</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.metodoBtn, metodo === 'pagoefect' && styles.metodoBtnActive]}
              onPress={() => setMetodo('pagoefect')}
            >
              <Text style={[styles.metodoText, metodo === 'pagoefect' && styles.metodoTextActive]}>PagoEfect.</Text>
            </TouchableOpacity>
          </View>

          {/* Condicional Form inputs */}
          {metodo === 'tarjeta' ? (
            <View style={styles.inputsSection}>
              {/* Número de Cuenta */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Numero de Cuenta</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="0000 0000 0000 0000"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  value={cuenta}
                  onChangeText={setCuenta}
                />
              </View>

              {/* CVV & Fecha */}
              <View style={styles.inputsRow}>
                <View style={[styles.inputGroup, { flex: 1, marginRight: 12 }]}>
                  <Text style={styles.inputLabel}>CVV</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="123"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    secureTextEntry
                    maxLength={4}
                    value={cvv}
                    onChangeText={setCvv}
                  />
                </View>

                <View style={[styles.inputGroup, { flex: 2 }]}>
                  <Text style={styles.inputLabel}>Fecha V.</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="MM/YY"
                    placeholderTextColor="#999"
                    value={fechaV}
                    onChangeText={setFechaV}
                  />
                </View>
              </View>
            </View>
          ) : metodo === 'yape' ? (
            <View style={styles.alternativePaymentBox}>
              <Text style={styles.altPaymentEmoji}>📱</Text>
              <Text style={styles.altPaymentTitle}>YAPE A NUESTRO NÚMERO</Text>
              <Text style={styles.altPaymentPhone}>987 654 321</Text>
              <Text style={styles.altPaymentDesc}>Yapea el monto y pulsa PAGAR para validar tu transacción.</Text>
            </View>
          ) : (
            <View style={styles.alternativePaymentBox}>
              <Text style={styles.altPaymentEmoji}>🏦</Text>
              <Text style={styles.altPaymentTitle}>CÓDIGO PAGO EFECTIVO</Text>
              <Text style={styles.altPaymentPhone}>CIP: 8439201</Text>
              <Text style={styles.altPaymentDesc}>Paga en agentes autorizados o banca móvil, luego pulsa PAGAR.</Text>
            </View>
          )}

          {/* Button PAGAR */}
          <TouchableOpacity
            style={styles.btnPagar}
            onPress={handlePagar}
          >
            <Text style={styles.btnText}>PAGAR</Text>
          </TouchableOpacity>
        </View>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 40,
  },
  card: {
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
  topInfoRow: {
    flexDirection: 'row',
  },
  imageBorder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    backgroundColor: '#ffe0f0',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  sideDetails: {
    flex: 1,
    marginLeft: 14,
  },
  expTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#000',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  detailLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  detailLabel: {
    width: 90,
    fontSize: 9,
    fontWeight: '800',
    color: '#000',
  },
  detailValueBox: {
    flex: 1,
    height: 16,
    backgroundColor: '#fff',
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 4,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  detailValueText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#000',
  },
  divider: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 14,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#000',
    marginBottom: 6,
  },
  metodosRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 14,
  },
  metodoBtn: {
    flex: 1,
    height: 32,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metodoBtnActive: {
    backgroundColor: '#1a1a2e',
  },
  metodoText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#000',
  },
  metodoTextActive: {
    color: '#fff',
  },
  inputsSection: {
    marginBottom: 12,
  },
  inputGroup: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#000',
    marginBottom: 4,
  },
  textInput: {
    height: 38,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 12,
    color: '#333',
    fontWeight: '700',
  },
  inputsRow: {
    flexDirection: 'row',
  },
  alternativePaymentBox: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
    minHeight: 124,
  },
  altPaymentEmoji: {
    fontSize: 26,
    marginBottom: 4,
  },
  altPaymentTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#000',
  },
  altPaymentPhone: {
    fontSize: 18,
    fontWeight: '900',
    color: '#ff1493',
    marginVertical: 4,
  },
  altPaymentDesc: {
    fontSize: 9,
    fontWeight: '700',
    color: '#666',
    textAlign: 'center',
  },
  btnPagar: {
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    height: 44,
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
    fontSize: 14,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 1,
  },
});
