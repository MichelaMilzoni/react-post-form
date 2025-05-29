//* file js per gestire gli errori


//# ALERT
export const handleError = (setErrorMessage, msg, timeout = 3000) => {
  setErrorMessage(msg); // Imposta il messaggio d'errore
  setTimeout(() => setErrorMessage(""), timeout); // Dopo X secondi, nasconde l'alert
};

// setErrorMessage cambia lo stato del messaggio d’errore.
// timeout è il tempo di durata dell'alert (di default 3 secondi).
// Dopo timeout millisecondi, setErrorMessage("") fa sparire l'alert.