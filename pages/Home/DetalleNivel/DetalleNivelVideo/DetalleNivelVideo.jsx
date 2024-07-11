import { Video } from "expo-av"
import { Button, Image, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-paper"
import { FontAwesome } from '@expo/vector-icons';


const DetalleNivelVideo = () => {
    return (
        <View style={{height:"100%",backgroundColor: "black", }}>
            <View style={{ display:"flex", justifyContent:"center", alignItems:"center", marginTop:30}}>
                    <View style={{width:"98%", display:"flex", alignItems:"center"}}>
                <Video
                    source={{ uri: 'https://res.cloudinary.com/dcf9eqqgt/video/upload/v1720534151/La_mejor_canci%C3%83_n_para_dedicar_a_la_persona_que_extra%C3%83_as_pugs1p.mp4' }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    style={{width:"90%", height:179, borderWidth:2, borderColor:"white", borderRadius:7}}
                  />
                    </View>
                    <View style={{width:"100%",marginTop:20, display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{color:"white", fontSize:25, fontFamily: 'NunitoSans_400Regular', marginTop:10}}>1 - 2 - 3 - 3 - 2 - 1</Text>
                    <Image
                        source={{ uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720535893/WhatsApp_Image_2024-07-09_at_16.35.05_1_b5uu1a.jpg" }}
                        width={"80%"}
                        height={180}
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