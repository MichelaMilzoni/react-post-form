// sezione centrale
//* importazione card
import ComicList from "./ComicList";

//* importazione css
import '../styles/Main.css';

//* funzione che restituisce JSX
const Main = ({ handleError }) => {
  const simulateError = () => {
    handleError("Errore nel caricamento dei dati!");
  };

  return (
    <main>

    </main>
  );
};

//* esportazione del componente Main
export default Main;