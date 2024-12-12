import React from "react";
import { UserProvider } from "./Context/UserContext";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import "./App.css"; // Importar los estilos

const App = () => {
    return (
        <UserProvider>
            <Header />
            <Profile />
        </UserProvider>
    );
};

export default App;
