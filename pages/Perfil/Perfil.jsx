import { Text, View } from "react-native"
import TarjetaPerfil from "../../components/TarjetaPerfil/TarjetaPerfil.jsx"

const Perfil = () => {
    return (
        <View style={{width:"100%", height:"100%",backgroundColor:"hsl(216, 13%, 8%)", padding:20, marginTop:100}}>
            <TarjetaPerfil />
        </View>
    )
}

export default Perfil