import { useState } from "react";
import { handleError } from "./utils/errorHandler"; // 👈 Importa il gestore degli errori

//* importazione dei componenti

import Main from './components/Main';
import Alert from "./components/Alert";

function App() {
    return (
        <>
            {/* Gestione degli errori */}
            <Alert />
            <Main />
        </>
    );
}

export default App;