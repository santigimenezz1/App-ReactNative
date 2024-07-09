import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import TarjetaNivelDetalle from './TarjetaNivelDetalle/TarjetaNivelDetalle';
import styles from './DetalleNivelStyles';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetalleNivel = () => {

    const navigation = useNavigation();
    const route = useRoute(); //  usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const { nivel } = route.params; 

    useEffect(() => {
        navigation.setOptions({ title: nivel });
    }, [navigation, nivel]);
    return (
        <ScrollView 
            style={styles.container__detalleNivel} 
            contentContainerStyle={styles.contentContainer}
        >
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Dribbling 1"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Passing 3"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Shooting 4"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Defending 5"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Goalkeeping 6"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Fitness 7"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Tactics 8"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Positioning 9"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Team Play 10"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Set Pieces 11"} tiempo={"15:35"} />
<TarjetaNivelDetalle nivel={"Warm-up 12"} tiempo={"15:35"} />

        </ScrollView>
    );
};

export default DetalleNivel;
