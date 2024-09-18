import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Seis({ anio }) {
  const controls = useAnimation();

  React.useEffect(() => {
    if (anio) {
      // Si hay un año, el componente será completamente visible
      controls.start({ opacity: 1, scale: 1 });
    } else {
      // Si no hay un año, el componente se desvanecerá y reducirá de tamaño
      controls.start({ opacity: 0, scale: 0.9 });
    }
  }, [anio, controls]);

  return (
    <motion.div
      className="card p-4 mt-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={controls}
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      <h2 className="card-title">Talento asociado al número 6</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Responsabilidad y Cuidado:</strong> Tienes una fuerte inclinación a cuidar y proteger a los demás. Eres responsable y te dedicas a garantizar el bienestar de tus seres queridos.</li>
        <li><strong>Habilidad para Resolver Conflictos:</strong> Tienes una habilidad natural para mediar y resolver conflictos en tu entorno. Tu capacidad para encontrar soluciones justas y equilibradas es una de tus fortalezas.</li>
        <li><strong>Compasión y Empatía:</strong> Eres muy compasivo y empático, lo que te permite entender y apoyar a los demás en momentos de necesidad. Tu capacidad para conectar emocionalmente es notable.</li>
        <li><strong>Sentido del Hogar:</strong> Valorás profundamente la estabilidad y la armonía en el hogar. Te sientes realizado cuando puedes crear un entorno cálido y acogedor para tu familia.</li>
        <li><strong>Creatividad en el Cuidado:</strong> Tienes una creatividad especial cuando se trata de cuidar y apoyar a los demás. Te destacas en encontrar maneras únicas de mostrar tu amor y cuidado.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 6 como su número de año de nacimiento, posee talentos relacionados con la responsabilidad, el cuidado y la resolución de conflictos. Estas personas están naturalmente inclinadas a apoyar a los demás y a crear un entorno armonioso y seguro.</p>
    </motion.div>
  );
}

export default Seis;
