// sezione centrale
//* importazione file .jsx
import Alert from './Alert';

//* importazione gestore di stato
import { useState, } from 'react';

//* importazione librerie */
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

//* importazione css
import '../styles/PostForm.css';

//* funzione che restituisce JSX
const PostForm = () => {
  
  //*creazione variabile di stato
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [showAlert, setShowAlert] = useState(false);  // Stato per mostrare/nascondere l'alert
  const [alertMessage, setAlertMessage] = useState(''); // Testo del messaggio nell'alert

  //*creazione funzione hadleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // invio dei dati al server/API con axios
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      author,
      title,
      body,
      isPublic
    })
.then((response) => {
      console.log('✅ Post creato con successo:', response.data);
      setAlertMessage('✅ Post pubblicato con successo!');
      setShowAlert(true);

      // Nascondere l'alert dopo 3 secondi
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    })
    .catch((error) => {
      console.error('Errore durante la creazione del post:', error);
      setAlertMessage('Errore durante la pubblicazione del post!');
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    });

    // Reset dei campi
    setAuthor('');
    setTitle('');
    setBody('');
    setIsPublic(false);
  };

  return (
<section>
  {/* Mostrare Alert solo quando showAlert è true */}
  {showAlert && <Alert message={alertMessage} />}

  <Form className="p-4 shadow rounded bg-light" onSubmit={handleSubmit}>
    <Row>
      <Col md={6}>
        <Form.Group controlId="author">
          <Form.Label>Autore</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Autore del post" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
      </Col>
    
      <Col md={6}>
        <Form.Group controlId="title">
          <Form.Label>Titolo</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Titolo del post" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
      </Col>
    </Row>

    <Form.Group controlId="body" className="mt-3">
      <Form.Label>Testo del post</Form.Label>
      <Form.Control 
      as="textarea" 
      rows={4} 
      placeholder="Scrivi qui il tuo post..."
      value={body} 
      onChange={(e) => setBody(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="public" className="mt-3">
      <Form.Check 
      type="switch" 
      label="Rendi pubblico"
      checked={isPublic}
      onChange={(e) => setIsPublic(e.target.checked)}
      />
    </Form.Group>

    <div className="d-flex justify-content-end mt-4">
      <Button variant="success" type="submit">
        ✏️ Pubblica Post
      </Button>
    </div>
  </Form>
</section>
  );
};

//* esportazione del componente Main
export default PostForm;