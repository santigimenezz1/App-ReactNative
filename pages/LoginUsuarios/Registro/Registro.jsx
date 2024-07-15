import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './RegistroStyles';

const Registro = ( {navigation} ) => {
  const [usuarioRegisto, setUsuarioRegistro] = useState({
    name:"",
    password: "",
    repeatPassword: ""
  })

  const EnviarRegistroUsuario = () => {
    console.log(usuarioRegisto)
    navigation.navigate("Crear Perfil", {usuarioRegisto})  
  }
  return (
    <View style={styles.container__inicioSesion}>
      <View style={styles.container__form}>
        <TextInput onChangeText={(text)=>setUsuarioRegistro({...usuarioRegisto, name: text})} style={styles.input} placeholderTextColor={"white"} placeholder='Email'></TextInput>
        <TextInput onChangeText={(text)=>setUsuarioRegistro({...usuarioRegisto, password: text})} style={styles.input} placeholderTextColor={"white"} placeholder='Password'></TextInput>
        <TextInput onChangeText={(text)=>setUsuarioRegistro({...usuarioRegisto, repeatPassword: text})} style={styles.input} placeholderTextColor={"white"} placeholder='Repeat password'></TextInput>

        <View style={styles.container__form}>
        <Pressable onPress={()=>EnviarRegistroUsuario()} style={styles.botonLoginUsuario}>
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
