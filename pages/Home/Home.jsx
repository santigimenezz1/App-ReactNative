import React from 'react';
import { Button, ScrollView, Text, View } from "react-native";
import NavBar from "../../components/NavBar/NavBar";
import TarjetaCalentamiento from "../../components/TarjetaCalentamiento/TarjetaCalentamiento";
import TarjetaNivel from "../../components/TarjetaNivel/TarjetaNivel.jsx";
import styles from "../../pages/Home/Home.js";
import { RFValue } from "react-native-responsive-fontsize";



const Home = () => {
  return (
    <View style={styles.container__home}>
      <NavBar />
      <ScrollView style={styles.main}>
        <Text style={{fontSize: RFValue(20), color:"white" }}>Imprescindibles</Text>
        <TarjetaCalentamiento />
        <Text style={{fontSize: RFValue(20), color:"white",marginTop:30 }}>Ejercicios</Text>
        <TarjetaNivel nivel={"Nivel 1"} tiempo={"30:25"} />
        <TarjetaNivel nivel={"Nivel 2"} tiempo={"41:35"} />
        <TarjetaNivel nivel={"Nivel 3"} tiempo={"52:06"} />
      </ScrollView>
    </View>
  );
}

export default Home;
