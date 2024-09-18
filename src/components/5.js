import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Cinco({ anio }) {
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
      <h2 className="card-title">Talento asociado al número 5</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Adaptabilidad y Flexibilidad:</strong> Tienes una habilidad natural para adaptarte a los cambios y a nuevas situaciones. Eres flexible y te sientes cómodo manejando situaciones imprevistas.</li>
        <li><strong>Curiosidad e Inquietud:</strong> Eres muy curioso y tienes un deseo constante de aprender y explorar. Tu inquietud te lleva a buscar nuevas experiencias y conocimientos.</li>
        <li><strong>Comunicación y Sociabilidad:</strong> Eres un excelente comunicador y disfrutas interactuar con diferentes personas. Tu sociabilidad y habilidad para conectar con los demás son notables.</li>
        <li><strong>Espíritu Aventurero:</strong> Tienes un fuerte deseo de experimentar la vida de manera emocionante. Te atraen las aventuras y disfrutas de la libertad que te brinda el explorar lo desconocido.</li>
        <li><strong>Ingenio y Creatividad:</strong> Tu ingenio y creatividad te permiten encontrar soluciones originales a los problemas. Te destacas en encontrar nuevas formas de abordar desafíos.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 5 como su número de año de nacimiento, posee talentos relacionados con la adaptabilidad, la curiosidad y la comunicación. Estas personas están naturalmente inclinadas a explorar nuevas experiencias y a abordar la vida con un espíritu aventurero.</p>
    </motion.div>
  );
}

export default Cinco;
