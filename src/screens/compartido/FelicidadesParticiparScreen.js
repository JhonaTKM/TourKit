import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default function FelicidadesParticiparScreen({ route, navigation }) {
  const { exp, role } = route.params || {
    role: 'influencer',
    exp: {
      id: 2,
      nombre: 'EXPERIENCIA ZOMBIE',
      organizacion: 'HorrorFest',
      costo: 'S/. 95.00',
      fecha: '31/10/2026',
      lugar: 'Cust. Miraflores',
      aforo: '50 personas',
      hora: '07:00 PM - 10:00 PM',
      cant: '19 / 50 Participantes',
    }
  };

  const handleUnirseGrupo = () => {
    Alert.alert(
      'Grupo Unido 🏃‍♂️💨',
      '¡Felicidades! Te has unido exitosamente al grupo exclusivo de esta experiencia en TourKit. ¡Prepárate para la aventura!',
      [{ text: 'OK', onPress: () => navigation.popToTop() }]
    );
  };

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
        <Text style={styles.ribbonText}>
          {role === 'visitante' ? 'EXPERIENCIA COMPRADA' : 'EXPERIENCIA PARTICIPANDO'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Central Card */}
        <View style={styles.card}>
          {/* Top Info Block (Image and side fields) */}
          <View style={styles.topInfoRow}>
            {/* Circular Image */}
            <View style={styles.imageBorder}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400'
                }}
                style={styles.image}
              />
            </View>

            {/* Side Details */}
            <View style={styles.sideDetails}>
              <Text style={styles.expTitle}>{exp.nombre}</Text>

              {/* Cantidad */}
              <View style={styles.miniFieldContainer}>
                <Text style={styles.miniLabel}>Cant.</Text>
                <View style={styles.miniValueBox}>
                  <Text style={styles.miniValueText} numberOfLines={1}>
                    {exp.cant || '19 / 50'}
                  </Text>
                  <Text style={styles.sketchSlashes}>///////</Text>
                </View>
              </View>

              {/* Hora */}
              <View style={styles.miniFieldContainer}>
                <Text style={styles.miniLabel}>Hora</Text>
                <View style={styles.miniValueBox}>
                  <Text style={styles.miniValueText} numberOfLines={1}>
                    {exp.hora || '07:00 PM'}
                  </Text>
                  <Text style={styles.sketchSlashes}>///////</Text>
                </View>
              </View>

              {/* Precio */}
              <View style={styles.miniFieldContainer}>
                <Text style={styles.miniLabel}>Precio</Text>
                <View style={styles.miniValueBox}>
                  <Text style={styles.miniValueText} numberOfLines={1}>
                    {exp.costo}
                  </Text>
                  <Text style={styles.sketchSlashes}>///////</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Stacked Details Fields */}
          
          {/* Organizador */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Organizador</Text>
            <View style={styles.valueBox}>
              <Text style={styles.valueText}>{exp.organizacion}</Text>
              <Text style={styles.sketchSlashesLong}>
                ///////////////////////////////////////////////
              </Text>
            </View>
          </View>

          {/* Lugar */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Lugar</Text>
            <View style={styles.valueBox}>
              <Text style={styles.valueText}>{exp.lugar}</Text>
              <Text style={styles.sketchSlashesLong}>
                ///////////////////////////////////////////////
              </Text>
            </View>
          </View>

          {/* White Box: FELICIDADES POR PARTICIPAR */}
          <View style={styles.felicidadesBoxContainer}>
            <View style={styles.felicidadesBox}>
              <Text style={styles.felicidadesText}>FELICIDADES</Text>
              <Text style={styles.felicidadesTextSub}>POR</Text>
              <Text style={styles.felicidadesText}>PARTICIPAR</Text>
            </View>
          </View>

          {/* Button UNIRSE AL GRUPO */}
          <TouchableOpacity
            style={styles.btnUnirseGrupo}
            onPress={handleUnirseGrupo}
          >
            <Text style={styles.btnText}>UNIRSE AL GRUPO</Text>
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
    marginBottom: 20,
  },
  imageBorder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    backgroundColor: '#ffe0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  sideDetails: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
  },
  expTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#000',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  miniFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  miniLabel: {
    width: 40,
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  miniValueBox: {
    flex: 1,
    height: 24,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 6,
    paddingHorizontal: 6,
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  miniValueText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#000',
    zIndex: 2,
  },
  sketchSlashes: {
    position: 'absolute',
    right: 4,
    bottom: 2,
    fontSize: 10,
    color: '#ccc',
    fontWeight: '300',
    zIndex: 1,
  },
  fieldContainer: {
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#000',
    marginBottom: 4,
  },
  valueBox: {
    height: 38,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  valueText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
    zIndex: 2,
  },
  sketchSlashesLong: {
    position: 'absolute',
    right: 8,
    bottom: 6,
    fontSize: 12,
    color: '#e0e0e0',
    fontWeight: '300',
    letterSpacing: -1,
    zIndex: 1,
  },
  felicidadesBoxContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  felicidadesBox: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 8,
    width: '100%',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  felicidadesText: {
    fontSize: 26,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 2,
  },
  felicidadesTextSub: {
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
    marginVertical: 4,
    letterSpacing: 1.5,
  },
  btnUnirseGrupo: {
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
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
