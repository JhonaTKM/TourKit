import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function CrearExperienciaScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [hashtags, setHashtags] = useState('');

  const navigateToDetail = (isPromo = false) => {
    const exp = {
      id: Math.random(),
      nombre: nombre.toUpperCase() || 'EXPERIENCIA DE EJEMPLO',
      organizacion: 'Mi Organización',
      costo: precio ? `S/. ${parseFloat(precio).toFixed(2)}` : 'S/. 0.00',
      fecha: '15/06/2026',
      lugar: hashtags ? hashtags.split(' ')[0] || 'Lima, Perú' : 'Lima, Perú',
      aforo: '30 personas',
      descripcion: descripcion || 'Sin descripción detallada.',
      hora: '09:00 AM - 12:00 PM',
      cant: '0 / 30 Participantes',
    };

    // Navegar al tab de "Visualizacion" y de allí a la pantalla de detalle "ExperienciaCreadaDetail"
    navigation.navigate('Visualizacion', {
      screen: 'ExperienciaCreadaDetail',
      params: { exp },
    });
  };

  const handlePublicar = () => {
    console.log('Publicar:', { nombre, precio, descripcion, hashtags });
    navigateToDetail(false);
  };

  const handlePromocionar = () => {
    console.log('Promocionar:', { nombre, precio, descripcion, hashtags });
    navigateToDetail(true);
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
        <Text style={styles.titleText}>CREAR EXPERIENCIA</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Foto */}
          <TouchableOpacity style={styles.photoContainer}>
            <View style={styles.photoIcon}>
              <Text style={styles.photoEmoji}>📷</Text>
            </View>
          </TouchableOpacity>

          {/* Campo Nombre */}
          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>NOMBRE DEL EVENTO</Text>
            <View style={styles.priceRow}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Nombre"
                placeholderTextColor="#999"
                value={nombre}
                onChangeText={setNombre}
              />
              <View style={styles.priceBadge}>
                <Text style={styles.pricePrefix}>S/.</Text>
              </View>
              <TextInput
                style={[styles.input, { width: 80 }]}
                placeholder="0.00"
                placeholderTextColor="#999"
                value={precio}
                onChangeText={setPrecio}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Descripción */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>DESCRIPCION</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe tu experiencia..."
              placeholderTextColor="#999"
              value={descripcion}
              onChangeText={setDescripcion}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          {/* Hashtags */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>HASHTAGS</Text>
            <TextInput
              style={styles.input}
              placeholder="#aventura #viaje #turismo"
              placeholderTextColor="#999"
              value={hashtags}
              onChangeText={setHashtags}
            />
          </View>

          {/* Nota */}
          <View style={styles.notaContainer}>
            <Text style={styles.notaText}>
              Promocionar tu evento hará que aparezca con mayor visibilidad
              para los usuarios a la hora de buscar una nueva experiencia.
              Para que tu evento sea de los primeros en visualizarse.
            </Text>
            <Text style={styles.notaSubtext}>
              Advertencia: Se descontará el 2% del precio cuando una persona realice el pago.
            </Text>
          </View>

          {/* Botones */}
          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.publishButton} onPress={handlePublicar}>
              <Text style={styles.publishButtonText}>PUBLICAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.promoButton} onPress={handlePromocionar}>
              <Text style={styles.promoButtonText}>PROMOCIONAR</Text>
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
  photoContainer: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#ffe0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#1a1a2e',
    borderStyle: 'dashed',
  },
  photoIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffb6d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoEmoji: {
    fontSize: 28,
  },
  fieldRow: {
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceBadge: {
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  pricePrefix: {
    color: '#ff1493',
    fontWeight: '800',
    fontSize: 16,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 8,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#ffe0f0',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  textArea: {
    minHeight: 100,
    paddingTop: 12,
  },
  notaContainer: {
    backgroundColor: '#ffe0f0',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#1a1a2e',
  },
  notaText: {
    fontSize: 12,
    color: '#1a1a2e',
    lineHeight: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  notaSubtext: {
    fontSize: 11,
    color: '#c0105a',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
  },
  publishButton: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
  promoButton: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  promoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
