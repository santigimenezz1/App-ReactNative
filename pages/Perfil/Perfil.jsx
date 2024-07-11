import { Pressable, Text, View } from "react-native"
import TarjetaPerfil from "../../components/TarjetaPerfil/TarjetaPerfil.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"

const Perfil = () => {
    return (
        <View style={{width:"100%", height:"100%",backgroundColor:"hsl(216, 13%, 8%)", padding:20}}>
                  <NavBar />
                  <View style={{marginTop:20}}>
            <TarjetaPerfil />
                  </View>
                  <View style={{marginTop:10, width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <Pressable style={{borderWidth:1, backgroundColor:"red", borderColor:"red", width:150, borderRadius:4, height:35, display:"flex", justifyContent:"center", alignItems:"center"}} >
                    <Text style={{color:"white", fontFamily:"NunitoSans_700Bold", letterSpacing:1}}>Cerrar sesión</Text>
                  </Pressable>
                  </View>
        </View>
    )
}
export default Perfil