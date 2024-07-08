import React from 'react';
import { Button, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import NavBar from "../../components/NavBar/NavBar";
import TarjetaCalentamiento from "../../components/TarjetaCalentamiento/TarjetaCalentamiento";
import TarjetaNivel from "../../components/TarjetaNivel/TarjetaNivel.jsx";
import styles from "../../pages/Home/Home.js";
import { RFValue } from "react-native-responsive-fontsize";
import TarjetaIngresoCodigo from './TarjetaIngesoCodigo/TarjetaingresoCodigo.jsx';


const Home = ( {navigation} ) => {

  return (
    <View style={styles.container__home}>
      <NavBar />
      <ScrollView style={styles.main}>
      <TarjetaIngresoCodigo />
      <Text style={{fontSize: RFValue(20), color:"white",marginTop:30 }} >Encontraras el código unico en el folleto que viene con el producto</Text>
        <Text style={{fontSize: RFValue(20), color:"white" }}>Imprescindibles</Text>
        <TarjetaCalentamiento navigation={navigation}/>
        <Text style={{fontSize: RFValue(20), color:"white",marginTop:30 }}>Ejercicios</Text>
        <TarjetaNivel nivel={"Nivel 1"} tiempo={"30:25"} navigation={navigation} />
        <TarjetaNivel nivel={"Nivel 2"} tiempo={"41:35"} navigation={navigation}/>
        <TarjetaNivel nivel={"Nivel 3"} tiempo={"52:06"} navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

export default Home;
