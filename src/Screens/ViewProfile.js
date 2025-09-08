import React from 'react';
import { View, Text } from 'react-native';

const ViewProfile = ({ route }) => {
    const { perfil } = route.params || {};
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ViewProfile - Funcionando</Text>
            <Text>Nombre: {perfil?.name || 'No disponible'}</Text>
            <Text>Email: {perfil?.email || 'No disponible'}</Text>
        </View>
    );
};

export default ViewProfile;