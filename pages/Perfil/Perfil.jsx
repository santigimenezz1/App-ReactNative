import { Pressable, Text, View } from "react-native"
import TarjetaPerfil from "../../components/TarjetaPerfil/TarjetaPerfil.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/Context.jsx"
import { Query, addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../firebaseConfig.js"
import BotonVentana from "../../components/BotonVentana/BotonVentana.jsx"


const Perfil = () => {
  const {setUsuarioOn, userRegistro, closed, setClosed,} = useContext(CartContext)
  const [userPerfil, setUserPerfil] = useState()
  

  useEffect(() => {
    const fetchUserByEmail = async (email) => {
      const userCollectionRef = collection(db, "usuarios");
      const q = query(userCollectionRef, where("email", "==", userRegistro.email));
      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          // Obtener el primer documento que cumple con la consulta (suponiendo que el email es único)
          const userDoc = querySnapshot.docs[0];
          console.log('Usuario encontrado:', userDoc.id, userDoc.data());
          // Aquí puedes hacer lo que necesites con los datos del usuario encontrado
          setUserPerfil(userDoc.data())
        } else {
          console.log('No se encontró ningún usuario con el email especificado.');
        }
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };
    // Llama a la función para buscar un usuario por email específico
    fetchUserByEmail("test3@gmail.com"); // Reemplaza con el email que deseas buscar
  }, []);  // El segundo argumento [] asegura que este efecto se ejecute solo un

    return (
        <View style={{width:"100%", height:"100%",backgroundColor:"hsl(216, 13%, 8%)", padding:20}}>
                  <NavBar />
                  <View style={{marginTop:20}}>
            <TarjetaPerfil userRegistro={userRegistro} />
                  </View>
                  <View style={{marginTop:10, width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <Pressable onPress={()=>setUsuarioOn(false)} style={{borderWidth:1, backgroundColor:"red", borderColor:"red", width:150, borderRadius:4, height:35, display:"flex", justifyContent:"center", alignItems:"center"}} >
                    <Text style={{color:"white", fontFamily:"NunitoSans_700Bold", letterSpacing:1}}>Cerrar sesión</Text>
                  </Pressable>
                  </View>
        </View>
    )
}
export default Perfil