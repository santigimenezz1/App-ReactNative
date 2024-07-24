import React, { useContext, useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from "react-native";
import NavBar from "../../components/NavBar/NavBar";
import TarjetaCalentamiento from "../../components/TarjetaCalentamiento/TarjetaCalentamiento";
import TarjetaNivel from "../../components/TarjetaNivel/TarjetaNivel.jsx";
import styles from '../Home/Home.js'; // Asegúrate de usar el archivo de estilos correcto
import TarjetaIngresoCodigo from './TarjetaIngesoCodigo/TarjetaingresoCodigo.jsx';
import TarjetaConsejos from '../../components/TarjetaConsejos/TarjetaConsejos.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
import { CartContext } from '../../Context/Context.jsx';
import BotonVentana from '../../components/BotonVentana/BotonVentana.jsx';
import SelectorIdioma from '../../components/SelectorIdioma/SelectorIdioma.jsx';

const Home = ({ navigation }) => {
  const [niveles, setNiveles] = useState([]);
  const {closed, setClosed, userRegistro} = useContext(CartContext)


  useEffect(() => {
    const obtenerNiveles = async () => {
      try {
        const nivelesCollection = collection(db, "niveles");
        const querySnapshot = await getDocs(nivelesCollection);
        let arreglo = [];
        querySnapshot.forEach((doc) => {
          arreglo = [...arreglo, { id: doc.id, data: doc.data() }];
        });
        setNiveles(arreglo);
      } catch (error) {
        console.error("Error obteniendo documentos: ", error);
      }
    };
    obtenerNiveles();
  }, []);


  return (
    <View style={styles.home}>
      <NavBar />
      <ScrollView style={styles.home__main} contentContainerStyle={styles.home__contentContainer}>
        {
          !closed &&
        <TarjetaIngresoCodigo />
        }
        <Text style={styles.home__introText}>Encontraras el código único en el folleto que viene con el producto</Text>
        <Text style={styles.home__sectionTitle}>Imprescindibles</Text>
        {niveles.length > 0 &&
          niveles.filter((nivel) => nivel.data.nombre === "Calentamiento/Enfriamiento")
            .map((nivel) => (
              <TarjetaCalentamiento 
                key={nivel.id}
                data={nivel} 
                navigation={navigation} 
                nivel={nivel.data.nombre} 
                tiempo={nivel.data.tiempoTotal} 
              />
            ))
        }
        <Text style={styles.home__sectionTitle}>Ejercicios</Text>
        {niveles.length > 0 &&
          niveles.filter((nivel) => nivel.data.nombre !== "Calentamiento/Enfriamiento")
            .map((nivel) => (
              <TarjetaNivel 
                key={nivel.id}
                data={nivel} 
                navigation={navigation} 
                nivel={nivel.data.nombre} 
                tiempo={nivel.data.tiempoTotal} 
              />
            ))
        }
        <View style={styles.home__tipsContainer}>
          <TarjetaConsejos />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
