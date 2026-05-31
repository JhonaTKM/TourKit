import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function ExperienciaCreadaDetailScreen({ route, navigation }) {
  const { exp } = route.params || {
    exp: {
      id: 1,
      nombre: 'HUACA SAN MARCOS',
      organizacion: 'ArcheoTours',
      costo: 'S/. 45.00',
      fecha: '15/06/2026',
      lugar: 'Lima, Perú',
      aforo: '30 personas',
      descripcion: 'Exploración arqueológica guiada por las ruinas de la Huaca San Marcos, conociendo la historia precolombina de la cultura Lima y Ychsma en la costa central peruana.',
      hora: '09:00 AM - 12:00 PM',
      cant: '12 / 30 Participantes',
    }
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
        <Text style={styles.ribbonText}>EXPERIENCIA CREADA</Text>
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
                  uri: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=400'
                }}
                style={styles.image}
                defaultSource={null}
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
                    {exp.cant || '12 / 30'}
                  </Text>
                  <Text style={styles.sketchSlashes}>///////</Text>
                </View>
              </View>

              {/* Hora */}
              <View style={styles.miniFieldContainer}>
                <Text style={styles.miniLabel}>Hora</Text>
                <View style={styles.miniValueBox}>
                  <Text style={styles.miniValueText} numberOfLines={1}>
                    {exp.hora || '09:00 AM'}
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

          {/* Descripcion */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Descripcion</Text>
            <View style={styles.descBox}>
              <Text style={styles.descText}>
                {exp.descripcion || 'Sin descripción detallada.'}
              </Text>
            </View>
          </View>

          {/* Button PARTICIPANTES */}
          <TouchableOpacity
            style={styles.btnParticipantes}
            onPress={() => navigation.navigate('ParticipantesList', { exp })}
          >
            <Text style={styles.btnText}>PARTICIPANTES</Text>
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
  descBox: {
    minHeight: 80,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
  },
  descText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    lineHeight: 16,
  },
  btnParticipantes: {
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
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
