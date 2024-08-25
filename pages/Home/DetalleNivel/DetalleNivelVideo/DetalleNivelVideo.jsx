import { Video } from "expo-av";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useRef, useEffect } from "react";
import { Swing } from "react-native-animated-spinkit";
import { FontAwesome } from "@expo/vector-icons";

const DetalleNivelVideo = () => {
    const route = useRoute(); // Usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const { ejercicio } = route.params; 
    const navigation = useNavigation();
    const [typeVideo, setTypeVideo] = useState("trailer");
    const [isLoading, setIsLoading] = useState(true); // Estado para manejar el texto de cargando
    const [isPosterVisible, setIsPosterVisible] = useState(true); // Estado para manejar la visibilidad de la previsualización
    const [videoDuration, setVideoDuration] = useState(0); // Estado para almacenar la duración del video en milisegundos

    const videoRef = useRef(null);

    useEffect(() => {
        // Actualiza el título de la cabecera con el nombre del ejercicio
        navigation.setOptions({ title: ejercicio.nombre });
    }, [navigation, ejercicio.nombre]);

    const handleVideoLoad = (data) => {
        setIsLoading(false);
        setIsPosterVisible(false); // Oculta la imagen de previsualización cuando el video está listo

        setVideoDuration(data.durationMillis); // Guarda la duración del video en el estado

        videoRef.current?.playAsync(); // Reproduce automáticamente el video cuando está listo
    };

    const handleChangeVideo = (videoType) => {
        setIsPosterVisible(true); // Mostrar la imagen de previsualización
        setIsLoading(true); // Mostrar el indicador de carga
        setTypeVideo(videoType); // Cambiar el tipo de video
        videoRef.current?.stopAsync(); // Detener el video actual antes de cambiar

        // Cargar y reproducir automáticamente el nuevo video
        setTimeout(() => {
            videoRef.current?.loadAsync(
                { uri: videoType === "ejercicio" ? ejercicio.videoURL : ejercicio.videoTrailerURL },
                {},
                false
            ).then(() => {
                videoRef.current?.playAsync(); // Autoplay el video
            });
        }, 0);
    };

    const formatDuration = (millis) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = Math.floor((millis % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds} min`;
    };
    


    return (
        <View style={{ height: "100%", backgroundColor: "hsl(216, 13%, 8%)" }}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                <View style={{display:"flex", width:"90%", marginBottom:10, flexDirection:"row-reverse", justifyContent:"space-between"}}>
                    <View>
                        <View style={{display:"flex", flexDirection:"row", gap:5}}>
                            {ejercicio.estrellas.completas.map(() => (
                                <FontAwesome name="star" size={24} color="hsl(199, 76%, 28%)" />                
                            ))}
                            {ejercicio.estrellas.vacias.map(() => (
                                <FontAwesome name="star-o" size={24} color="hsl(199, 76%, 28%)" />                
                            ))}
                        </View>
                    </View>
                    <Text style={{color:"white", textAlign:"start", letterSpacing:2, margin:2}}>
                        {formatDuration(videoDuration)}
                    </Text>
                </View>
                <View style={{ width: "98%", display: "flex", alignItems: "center", position: "relative" }}>
                    {isLoading && (
                        <Swing style={{ position: "absolute", top: "40%", zIndex: 2 }} size={48} color="hsl(199, 76%, 28%)" />
                    )}
                    {isPosterVisible && (
                        <Image 
                            source={{ uri: ejercicio.videoPosterURL }} 
                            style={{ width: "100%", height: 179, borderRadius: 7, position: 'absolute', zIndex: 1 }} 
                        />
                    )}
                    <Video
                        ref={videoRef} // Asigna la referencia al componente Video
                        source={{ uri: typeVideo === "ejercicio" ? ejercicio.videoURL : ejercicio.videoTrailerURL }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        style={{ width: "100%", height: 179, borderRadius: 7 }}
                        onLoadStart={() => setIsLoading(true)}  // Inicia la carga
                        onLoad={handleVideoLoad}                // Termina la carga y obtiene la duración
                    />
                </View>
                <View style={{width:"85%", borderWidth:3, borderColor:"hsl(199, 76%, 28%)", marginTop:20}}>
                    <Image source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1724578005/WhatsApp_Image_2024-08-25_at_11.20.17_1_hxzmy3.jpg", width:"100%", height:150, }} />
                </View>
                <View style={{ width: "100%", marginTop: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
                </View>
                <View style={{ marginTop: 40, display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
                    <View style={{ display: "flex", gap: 12, width:"90%", justifyContent: "center", flexDirection:"row" }}>
                        <TouchableOpacity 
                            style={{ borderWidth: 2, borderColor: "white", width: "45%", height: 40, borderRadius: 14, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "hsl(199, 76%, 28%)" }}
                            onPress={() => handleChangeVideo("tutorial")}
                        >
                            <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Tutorial</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{ borderWidth: 2, borderColor: "white", width: "45%", height: 40, borderRadius: 14, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "hsl(199, 76%, 28%)" }}
                            onPress={() => handleChangeVideo("ejercicio")}
                        >
                            <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Entrenamiento</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DetalleNivelVideo;
