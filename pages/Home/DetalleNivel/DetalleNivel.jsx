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
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />
<TarjetaNivelDetalle nivel={"Step overs 2"} tiempo={"15:35"} navigation={navigation} />



        </ScrollView>
    );
};

export default DetalleNivel;
