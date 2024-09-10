import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar'; // Importar el componente Navbar correctamente


function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('¡Texto copiado!');
  };

  return (
    <div className="App">
      {/* Fondo estrellado */}
      <div className="starry-background"></div>

      <div className="content">
        <h1 className="title">Texto a MAYÚSCULAS</h1>
        <p className="subtitle">Convierte tu texto a mayúsculas instantáneamente</p>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Escribe aquí..."
          className="text-box"
        />
        <div className="buttons">
          <button className="copy-button" onClick={handleCopy}>
            Copiar Texto
          </button>
        </div>
        <footer className="footer">
          <p>Transforma tu texto fácilmente con nuestra herramienta.</p>
          <p>
            <a href="#">Política de privacidad</a> | <a href="#">Contacto</a> | <a href="#">Términos de uso</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
