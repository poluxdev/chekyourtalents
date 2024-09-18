import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import Uno from './components/1';
import Dos from './components/2';
import Tres from './components/3';
import Cuatro from './components/4';
import Cinco from './components/5';
import Seis from './components/6';
import Siete from './components/7';
import Ocho from './components/8';
import Nueve from './components/9';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [anioNacimiento, setAnioNacimiento] = useState('');
  const [numeroReducido, setNumeroReducido] = useState(null);

  const manejarCambioAnio = (e) => {
    setAnioNacimiento(e.target.value);
    const numero = reducirAnio(e.target.value);
    setNumeroReducido(numero);
  };

  const reducirAnio = (anio) => {
    if (!anio) return null;
    let suma = anio.split('').reduce((acc, num) => acc + parseInt(num), 0);
    while (suma > 9) {
      suma = suma.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }
    return suma;
  };

  const renderSignificado = () => {
    switch (numeroReducido) {
      case 1: return <Uno anio={anioNacimiento} />;
      case 2: return <Dos anio={anioNacimiento} />;
      case 3: return <Tres anio={anioNacimiento} />;
      case 4: return <Cuatro anio={anioNacimiento} />;
      case 5: return <Cinco anio={anioNacimiento} />;
      case 6: return <Seis anio={anioNacimiento} />;
      case 7: return <Siete anio={anioNacimiento} />;
      case 8: return <Ocho anio={anioNacimiento} />;
      case 9: return <Nueve anio={anioNacimiento} />;
      default: return <p>Introduce un año válido</p>;
    }
  };

  return (
    <div className="App container mt-4">
      <h1 className="text-center mb-4">Descubre tu Talento por Año de Nacimiento</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Año de Nacimiento"
            value={anioNacimiento}
            onChange={manejarCambioAnio}
          />
          <button
            className="btn btn-primary btn-block"
            onClick={() => setNumeroReducido(reducirAnio(anioNacimiento))}
          >
            Revelar Significado
          </button>
        </div>
      </div>
      <motion.div
        className="significado-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: numeroReducido ? 1 : 0, scale: numeroReducido ? 1 : 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {renderSignificado()}
      </motion.div>
    </div>
  );
}

export default App;
