import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container__detalleNivel: {
        backgroundColor: "hsl(210, 16%, 7%)",
    },
    contentContainer: {
        paddingTop: 20, // Espacio en la parte superior
        paddingBottom: 20, // Espacio en la parte inferior
        paddingHorizontal: 10, // Mantener el padding horizontal
        display: "flex",
        gap: 8,
    }
});

export default styles;
