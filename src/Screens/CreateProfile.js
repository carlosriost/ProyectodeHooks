import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Alert, Image} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper'; // ✅ Button de Paper
import styles from '../Styles/styles';

const CreateProfile = ({navigation}) => { // ✅ Corregido: {navigation}
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [descripcion, setDescripcion] = useState(''); // ✅ Corregido: descripcion
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const isValid = name.trim() !== '' && 
        lastName.trim() !== '' && 
        phone.trim() !== '' && 
        email.trim() !== '' && 
        descripcion.trim() !== ''; // ✅ Variable correcta
        setFormValid(isValid);
    }, [name, lastName, phone, email, descripcion]); // ✅ Agregada descripcion

    const handleSaveProfile = () => {
        if (!formValid) {
            Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'Ok'}]);
            return;
        }

        const profileUser = {
            name,
            lastName,
            phone,
            email,
            descripcion, // ✅ Variable correcta
        };
        navigation.navigate('ViewProfile', {perfil: profileUser}); // ✅ navigation, no navigator
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.headerContainer}>
                    <Image
                        source={{uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png'}}
                        style={styles.profileImage}
                    />
                    <Text style={styles.title}>Crear Perfil</Text>
                </View>
                <Card style={styles.card}>
                    <Card.Content>
                        <TextInput
                            label="Digite su Nombre"
                            value={name}
                            onChangeText={setName} // ✅ Corregido: onChangeText
                            style={styles.input}
                            left={<TextInput.Icon icon="account" />} // ✅ Corregido: icon
                            mode="outlined"
                        />
                        <TextInput
                            label="Digite su Apellido"
                            value={lastName}
                            onChangeText={setLastName} // ✅ Corregido
                            style={styles.input}
                            left={<TextInput.Icon icon="account" />}
                            mode="outlined"
                        />
                        <TextInput
                            label="Digite su Teléfono"
                            value={phone}    
                            onChangeText={setPhone} // ✅ Corregido
                            style={styles.input}
                            left={<TextInput.Icon icon="phone" />}
                            mode="outlined"
                            keyboardType="phone-pad"
                        />
                        <TextInput
                            label="Digite su Email"
                            value={email}
                            onChangeText={setEmail} // ✅ Corregido
                            style={styles.input}
                            left={<TextInput.Icon icon="email" />}
                            mode="outlined"
                            keyboardType="email-address"
                        />
                        <TextInput
                            label="Digite su Descripción"
                            value={descripcion} // ✅ Variable correcta
                            onChangeText={setDescripcion} // ✅ Corregido
                            style={styles.input}
                            left={<TextInput.Icon icon="text" />}
                            mode="outlined"
                            multiline={true}
                            numberOfLines={3}
                        />
                        <Button
                            mode="contained"
                            onPress={handleSaveProfile}
                            style={styles.button}
                            disabled={!formValid}
                        >
                            Guardar Perfil
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};

export default CreateProfile;