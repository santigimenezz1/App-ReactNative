import React, { useEffect, useState } from 'react';
import { Button, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import NavBar from "../../components/NavBar/NavBar";
import TarjetaCalentamiento from "../../components/TarjetaCalentamiento/TarjetaCalentamiento";
import TarjetaNivel from "../../components/TarjetaNivel/TarjetaNivel.jsx";
import styles from "../../pages/Home/Home.js";
import { RFValue } from "react-native-responsive-fontsize";
import TarjetaIngresoCodigo from './TarjetaIngesoCodigo/TarjetaingresoCodigo.jsx';
import TarjetaConsejos from '../../components/TarjetaConsejos/TarjetaConsejos.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';


const Home = ( {navigation} ) => {
  const [niveles, setNiveles] = useState([])

 //CUANDO RENDERIZA LA APP HACE LA PETICION Y TRAE TODOS LOS DATOS DE LA COLECCION NIVELES
  useEffect(()=>{
    const obtenerNiveles = async () => {
      try { //AQUI ME TRAIGO LA COLECCION CON TODOS LOS DOCUMENTOS
        const nivelesCollection = collection(db, "niveles");
        const querySnapshot = await getDocs(nivelesCollection);
        let arreglo = []
        // Iterar sobre los documentos y actualizar el estado niveles
        querySnapshot.forEach((doc) => {
          arreglo = [...arreglo, { id: doc.id, data: doc.data() }]
        });
        setNiveles(arreglo)
      } catch (error) {
        console.error("Error obteniendo documentos: ", error);
      }
    }
    obtenerNiveles()
  },[])

  return (
    <View style={styles.container__home}>
      <NavBar />
      <ScrollView style={styles.main} contentContainerStyle={styles.contentContainer}>
      <TarjetaIngresoCodigo />
      <Text style={{fontSize: RFValue(18), color:"white",marginTop:30, marginBottom:40, textAlign:"center",fontFamily: 'NunitoSans_400Regular', letterSpacing:0.7 }} >Encontraras el código unico en el folleto que viene con el producto</Text>
        <Text style={{fontSize: RFValue(20), color:"white", fontFamily: 'NunitoSans_400Regular', }}>Imprescindibles</Text>
        {
            niveles.length > 0 &&
            niveles.filter((nivel)=>nivel.data.nombre === "Calentamiento/Enfriamiento")
            .map((nivel)=>(
              <TarjetaCalentamiento data={nivel} navigation={navigation} nivel={nivel.data.nombre} tiempo={nivel.data.tiempoTotal}/>
              ))
           }
        <Text style={{fontSize: RFValue(20), color:"white",marginTop:30, fontFamily: 'NunitoSans_400Regular' }}>Ejercicios</Text>
           {
            niveles.length > 0 &&
            niveles.filter((nivel)=>nivel.data.nombre !== "Calentamiento/Enfriamiento")
            .map((nivel)=>(
              <TarjetaNivel data={nivel} navigation={navigation} nivel={nivel.data.nombre} tiempo={nivel.data.tiempoTotal} />
            ))
           }
        <View style={{marginTop:30}}>
        <TarjetaConsejos />
        <Pressable onPress={()=>obtenerNiveles(db)}>
           <Text style={{color:"white"}}>probandooo</Text>
        </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
