// Context/Context.jsx
import { createContext, useState } from "react";

export const CartContext = createContext(); // Se crea el contexto global

// Creamos el componente que va a utilizar el contexto global
const GlobalContext = ({ children }) => {
    const [userRegistro, setUserRegistro] = useState({
      email: "",
      password: "",
      nombre: "",
      pais: "",
      numeroCamiseta: "",
      posicion: "",
      clubFavorito: "",
      imagenPerfil: "",
      codigoAcceso: "BLC2831",
      access: false
    });
    const [usuarioOn, setUsuarioOn] = useState(false)
    const [closed, setClosed] = useState(false)
    const [userOnline, setUserOnline] = useState({
        email: ""
    })

    const data = {
        userRegistro,
        setUserRegistro,
        usuarioOn,
        setUsuarioOn,
        closed,
        setClosed,
        userOnline, setUserOnline
    };

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    );
}

export default GlobalContext;
