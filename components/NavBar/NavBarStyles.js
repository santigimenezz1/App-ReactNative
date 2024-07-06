import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container__navBar:{
        width:"100%",
        padding:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    container__navBar__titulo:{
     display:"flex",
     flexDirection:"row",
     width:"50%",
     gap:10,
     alignItems:"center",
    },
    container__navBar__titulo__text:{
        color:"white",
        fontSize:25
    }
})

export default styles