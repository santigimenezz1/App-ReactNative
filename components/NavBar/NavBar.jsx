import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NavBarStyles';
import SelectorIdioma from '../SelectorIdioma/SelectorIdioma.jsx';

const NavBar = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container__navBar}>
                <View style={styles.container__navBar__titulo}>
                    <Image
                        source={{ uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720109354/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/futbol-americano_shzkr2.png" }}
                        width={25}
                        height={25}
                    />
                    <Text style={styles.container__navBar__titulo__text}>EJERCICIOS</Text>
                </View>
                <View style={styles.container__navBar__menu}>
                    <Image
                        source={{ uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720483415/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/mundo_u3lsbt.png" }}
                        width={30}
                        height={30}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavBar;
