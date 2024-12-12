import React, { createContext, useContext } from "react";
import Yop from "../Yop.jpeg"; // Ruta actualizada según la ubicación real

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const user = {
        id: 208100103,
        name: "Norman Sáenz A",
        email: "saenznorman73@gmail.com",
        profileImage: Yop, // Imagen importada correctamente
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
