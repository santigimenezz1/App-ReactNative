import { Video } from "expo-av";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { useState, useRef } from "react";
import { Swing } from "react-native-animated-spinkit";

const DetalleNivelVideo = () => {
    const route = useRoute(); // Usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const { ejercicio } = route.params; 
    const [typeVideo, setTypeVideo] = useState("ejercicio");
    const [isLoading, setIsLoading] = useState(true); // Estado para manejar el texto de cargando
    const [isPosterVisible, setIsPosterVisible] = useState(true); // Estado para manejar la visibilidad de la previsualización

    const videoRef = useRef(null);

    const handleVideoLoad = () => {
        setIsLoading(false);
        setIsPosterVisible(false); // Oculta la imagen de previsualización cuando el video está listo
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
        }, 100);
    };

    return (
        <View style={{ height: "100%", backgroundColor: "hsl(216, 13%, 8%)" }}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                <View style={{ width: "98%", display: "flex", alignItems: "center", position: "relative" }}>
                    {isLoading && (
                        <Swing style={{ position: "absolute", top: "40%", zIndex: 2 }} size={48} color="white" />
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
                        onLoad={handleVideoLoad}                // Termina la carga y reproduce automáticamente
                    />
                </View>
                <View style={{ width: "100%", marginTop: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
                </View>
                <View style={{ marginTop: 20, display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
                    <View style={{ display: "flex", gap: 10 }}>
                        <TouchableOpacity 
                            style={{ borderWidth: 1, borderColor: "white", width: 220, height: 40, borderRadius: 7, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "hsl(215, 18%, 13%)" }}
                            onPress={() => handleChangeVideo("tutorial")}
                        >
                            <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Tutorial</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{ borderWidth: 1, borderColor: "white", width: 220, height: 40, borderRadius: 7, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "hsl(215, 18%, 13%)" }}
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
