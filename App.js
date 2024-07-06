import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import styles from './AppStyles.js'
import NavBar from './components/NavBar/NavBar.jsx';
import TarjetaCalentamiento from './components/TarjetaCalentamiento/TarjetaCalentamiento.jsx';
import TarjetaNivel from './components/TarjetaNivel/TarjetaNivel.jsx';
import Footer from './components/Footer/Footer.jsx';



export default function App() {
  return (
    <View style={{display:"flex", alignItems:"center", backgroundColor:"hsl(216, 13%, 8%)", height:"100%"}}>
      <NavBar/>
      <View style={{ width:380, marginTop:35 }}>
        <Text style={{fontSize:25, color:"white" }}>Imprescindibles</Text>
      </View>
      <TarjetaCalentamiento />
      <View style={{width:380, marginTop:35 }}>
        <Text style={{fontSize:25, color:"white" }}>Ejercicios</Text>
      </View>
      <TarjetaNivel nivel={"Nivel 1"} tiempo={"30:25"} />
      <TarjetaNivel nivel={"Nivel 2"} tiempo={"41:35"} />
      <TarjetaNivel nivel={"Nivel 3"} tiempo={"52:06"} />
      <Footer/>
       </View>

  );
}
