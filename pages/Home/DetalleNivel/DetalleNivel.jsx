import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import TarjetaNivelDetalle from './TarjetaNivelDetalle/TarjetaNivelDetalle';
import styles from './DetalleNivelStyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import BotonVentana from '../../../components/BotonVentana/BotonVentana.jsx';

const DetalleNivel = () => {

    const navigation = useNavigation();
    const route = useRoute(); //  usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const { nivel, data } = route.params; 


    useEffect(() => {
        navigation.setOptions({ title: nivel });
    }, [navigation, nivel]);
    return (
        <ScrollView 
            style={styles.container__detalleNivel} 
            contentContainerStyle={styles.contentContainer}
        >
            {
                data &&
                data.data.ejercicios.map((ejercicio)=>(
            <BotonVentana ejercicio={ejercicio} nivel={ejercicio.nombre} tiempo={"15:35"} navigation={navigation} />
                ))

            }
        </ScrollView>
    );
};

export default DetalleNivel;
