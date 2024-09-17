import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [text, setText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Funciones de transformación
  const handleToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalize = () => {
    const capitalizedText = text.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
    setText(capitalizedText);
  };

  const handleTitleCase = () => {
    const titleCaseText = text
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(titleCaseText);
  };

  const handleSentenceCase = () => {
    const sentenceCaseText = text
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    setText(sentenceCaseText);
  };

  const handleAlternateCase = () => {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      newText +=
        i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
    setText(newText);
  };

  const handleReverseText = () => {
    const reversedText = text.split('').reverse().join('');
    setText(reversedText);
  };

  const handleRemoveSpaces = () => {
    const newText = text.replace(/\s/g, '');
    setText(newText);
  };

  const handleRemoveExtraSpaces = () => {
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  };

  const handleRemovePunctuation = () => {
    const newText = text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
    setText(newText);
  };

  const handleRemoveNumbers = () => {
    const newText = text.replace(/[0-9]/g, '');
    setText(newText);
  };

  const handleToUnicode = () => {
    const unicodeText = Array.from(text)
      .map(
        (char) =>
          'U+' +
          char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')
      )
      .join(' ');
    setText(unicodeText);
  };

  const handleEncodeBase64 = () => {
    const encodedText = btoa(text);
    setText(encodedText);
  };

  const handleDecodeBase64 = () => {
    try {
      const decodedText = atob(text);
      setText(decodedText);
    } catch (e) {
      alert('Texto inválido para decodificar de Base64');
    }
  };

  const handleSortLines = () => {
    const sortedText = text.split('\n').sort().join('\n');
    setText(sortedText);
  };

  const handleClearText = () => {
    setText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    });
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const sentenceCount =
    text.trim() === '' ? 0 : (text.match(/[.!?]+/g) || []).length;
  const paragraphCount =
    text.trim() === '' ? 0 : text.trim().split(/\n+/).length;

  return (
    <div className="App">
      <Navbar />

      {/* Fondo estrellado */}
      <div className="starry-background"></div>

      <div className="content" style={{ marginTop: '60px' }}>
        <h1 className="title">Transforma tu Texto</h1>
        <p className="subtitle">
          Convierte tu texto utilizando diferentes opciones
        </p>

        {/* Botones */}
        <div className="buttons">
          <button className="icon-button" onClick={handleToUpperCase}>
            {/* Icono de mayúsculas */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 20h18M12 4l6 16H6l6-16z"
              />
            </svg>
            Mayúsculas
          </button>
          <button className="icon-button" onClick={handleToLowerCase}>
            {/* Icono de minúsculas */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20H9a3 3 0 01-3-3V7a3 3 0 013-3h3m0 16h3a3 3 0 003-3v-4a3 3 0 00-3-3h-3m0 10V4"
              />
            </svg>
            Minúsculas
          </button>
          <button className="icon-button" onClick={handleCapitalize}>
            {/* Icono de capitalizar */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 20h18M12 4l-6 16h12l-6-16z"
              />
            </svg>
            Capitalizar
          </button>
          <button className="icon-button" onClick={handleTitleCase}>
            {/* Icono de Title Case */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M12 6v12m6-6H6" />
            </svg>
            Title Case
          </button>
          <button className="icon-button" onClick={handleSentenceCase}>
            {/* Icono de Sentence Case */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M16 8H8v8h8V8z" />
            </svg>
            Sentence Case
          </button>
          <button className="icon-button" onClick={handleAlternateCase}>
            {/* Icono de Alternate Case */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M4 12h16M12 4v16" />
            </svg>
            aLtErNaTe CaSe
          </button>
          <button className="icon-button" onClick={handleReverseText}>
            {/* Icono de invertir texto */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Invertir Texto
          </button>
          <button className="icon-button" onClick={handleRemoveSpaces}>
            {/* Icono de remover espacios */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
            Remover Espacios
          </button>
          <button className="icon-button" onClick={handleRemoveExtraSpaces}>
            {/* Icono de remover espacios extra */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M6 12h12M6 12l6-6m-6 6l6 6" />
            </svg>
            Remover Espacios Extra
          </button>
          <button className="icon-button" onClick={handleRemovePunctuation}>
            {/* Icono de remover puntuación */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M10 15h4v1h-4z" />
            </svg>
            Remover Puntuación
          </button>
          <button className="icon-button" onClick={handleRemoveNumbers}>
            {/* Icono de remover números */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remover Números
          </button>
          <button className="icon-button" onClick={handleToUnicode}>
            {/* Icono de Unicode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M12 6v12m6-6H6" />
            </svg>
            Unicode
          </button>
          <button className="icon-button" onClick={handleEncodeBase64}>
            {/* Icono de codificar Base64 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <rect x="3" y="8" width="18" height="4" />
              <rect x="3" y="12" width="18" height="4" />
            </svg>
            Codificar Base64
          </button>
          <button className="icon-button" onClick={handleDecodeBase64}>
            {/* Icono de decodificar Base64 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <rect x="3" y="8" width="18" height="4" />
              <rect x="3" y="12" width="18" height="4" />
            </svg>
            Decodificar Base64
          </button>
          <button className="icon-button" onClick={handleSortLines}>
            {/* Icono de ordenar líneas */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Ordenar Líneas
          </button>
          <button className="icon-button" onClick={handleClearText}>
            {/* Icono de limpiar texto */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            Limpiar Texto
          </button>
        </div>

        {/* Caja de texto */}
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Escribe aquí..."
          className="text-box"
        />

        {/* Botón de copiar texto */}
        <button className="copy-button" onClick={handleCopy}>
          Copiar Texto
        </button>

        {/* Alerta emergente */}
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
                <strong className="block font-medium text-gray-900 dark:text-white">
                  ¡Texto copiado!
                </strong>
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
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        <h2 className="subtitle">Estadísticas del texto</h2>
        <p className="counter">Caracteres: {text.length}</p>
        <p className="counter">Palabras: {wordCount}</p>
        <p className="counter">Oraciones: {sentenceCount}</p>
        <p className="counter">Párrafos: {paragraphCount}</p>

        <footer className="footer">
          <p>Transforma tu texto fácilmente con nuestra herramienta.</p>
          <p>
            <a href="#">Política de privacidad</a> | <a href="#">Contacto</a> |{' '}
            <a href="#">Términos de uso</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
