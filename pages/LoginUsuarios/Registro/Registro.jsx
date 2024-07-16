// pages/LoginUsuarios/Registro.jsx
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './RegistroStyles';
import { CartContext } from '../../../Context/Context';

const Registro = ({ navigation }) => {
  const { userRegistro, setUserRegistro } = useContext(CartContext);

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const EnviarRegistroUsuario = () => {
    setUserRegistro(
      {
        ...userRegistro,
        email: data.email,
        password: data.password,
      }
    )
    navigation.navigate("Crear Perfil");
  };


  return (
    <View style={styles.container__inicioSesion}>
      <View style={styles.container__form}>
        <TextInput onChangeText={(text) => setData({ ...data, email: text })} style={styles.input} placeholderTextColor={"white"} placeholder='Email' />
        <TextInput onChangeText={(text) => setData({ ...data, password: text })} style={styles.input} placeholderTextColor={"white"} placeholder='Password' />
        <TextInput  style={styles.input} placeholderTextColor={"white"} placeholder='Repeat password' />

        <View style={styles.container__form}>
          <Pressable onPress={() => EnviarRegistroUsuario()} style={styles.botonLoginUsuario}>
            <Text style={styles.botonText}>
              Registrar
            </Text>
          </Pressable>
          <Pressable style={styles.botonLoginGoogle}>
            <Image width={30} height={30} source={{ uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720772208/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cromo_doubjp.png" }} />
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
