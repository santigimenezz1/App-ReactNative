import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './RegistroStyles';

const Registro = ( {navigation} ) => {
  return (
    <View style={styles.container__inicioSesion}>
      <View style={styles.container__form}>
        <TextInput style={styles.input} placeholderTextColor={"white"} placeholder='Email'></TextInput>
        <TextInput style={styles.input} placeholderTextColor={"white"} placeholder='Contraseña'></TextInput>
        <TextInput style={styles.input} placeholderTextColor={"white"} placeholder='Repetir contraseña'></TextInput>

        <View style={styles.container__form}>
        <Pressable onPress={()=>navigation.navigate("Crear Perfil")} style={styles.botonLoginUsuario}>
            <Text style={styles.botonText}>
                Registrar
            </Text>
        </Pressable>
        <Pressable  style={styles.botonLoginGoogle}>
            <Image width={30} height={30} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720772208/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cromo_doubjp.png"}}></Image>
            <Text style={styles.botonText}>
                Continunar usando google
            </Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Registro;
