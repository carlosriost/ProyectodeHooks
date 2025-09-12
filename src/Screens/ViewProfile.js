import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../Styles/styles';

const ViewProfile = ({ route, navigation }) => {
  const { perfil } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
      
      {/* Encabezado del perfil */}
      <View style={styles.profileHeader}>
        <Image
          style={[styles.profileImage, styles.avatar]}
          source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png' }}
        />
        <Text style={styles.profileName}>
          {perfil?.name} {perfil?.lastName}
        </Text>
        <Text style={styles.profession}>Perfil de Usuario</Text>
      </View>

      {/* Tarjeta de información */}
      <View style={styles.profileCard}>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Información</Text>
          <Text style={styles.infoText}>📞 Teléfono: {perfil?.phone || "No disponible"}</Text>
          <Text style={styles.infoText}>✉️ Email: {perfil?.email || "No disponible"}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.biografia}>
            {perfil?.descripcion || "El usuario no añadió una descripción."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewProfile;
