import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [text, setText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Ocultar alerta después de 3 segundos
    });
  };

  return (
    <div className="App">
      <Navbar />

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

        {/* Alerta emergente con Tailwind CSS */}
        {showAlert && (
          <div
            role="alert"
            className="fixed top-16 left-1/2 transform -translate-x-1/2 rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-900 max-w-xs"
          >
            <div className="flex items-start gap-4">
              <span className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              <div className="flex-1">
                <strong className="block font-medium text-gray-900 dark:text-white">¡Texto copiado!</strong>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
                  Tu texto ha sido copiado al portapapeles.
                </p>
              </div>

              <button
                onClick={() => setShowAlert(false)}
                className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <span className="sr-only">Cerrar alerta</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <h2 className="subtitle">Contador de caracteres</h2>
        <p className="counter">{text.length}</p>
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
