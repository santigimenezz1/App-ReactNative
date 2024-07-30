import { Video } from "expo-av"
import { Button, Image, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-paper"
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";


const DetalleNivelVideo = () => {
    const route = useRoute(); //  usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const { ejercicio } = route.params; 
    return (
        <View style={{height:"100%",backgroundColor: "hsl(216, 13%, 8%)", }}>
            <View style={{ display:"flex", justifyContent:"center", alignItems:"center", marginTop:30}}>
                    <View style={{width:"98%", display:"flex", alignItems:"center"}}>
                <Video
                    source={{ uri: ejercicio.videoURL }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    style={{width:"100%", height:179, borderRadius:7}}
                  />
                    </View>
                    <View style={{width:"100%",marginTop:20, display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{color:"white", fontSize:25, fontFamily: 'NunitoSans_400Regular', marginTop:10}}>{ejercicio.guia}</Text>
                    <Image
                        source={{ uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1721866391/Imagen_25-7-24_a_las_2.09_s5wff8.jpg"}}
                        width={"90%"}
                        height={215}
                        style={{marginTop:10}}
                    />
                    </View>
                    <View style={{marginTop:20, display:"flex", flexDirection:"row", alignItems:"center", gap:12}}>
                        <TouchableOpacity>
                        <FontAwesome name="arrow-left" size={28} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", width:220, height:40, borderRadius:7, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor: "hsl(215, 18%, 13%)",}}> 
                         <Text style={{color:"white", textAlign:"center",letterSpacing:1,fontFamily: 'NunitoSans_400Regular',}}>Volver a los Ejercicios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <FontAwesome name="arrow-right" size={28} color="white" />
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
        )
}
export default DetalleNivelVideo