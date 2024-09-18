import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Tres({ anio }) {
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
      <h2 className="card-title">Talento asociado al número 3</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Creatividad y Expresión:</strong> Tienes una habilidad natural para la creatividad y la autoexpresión. Te destacas en actividades artísticas como la escritura, la actuación, la música y otras formas de arte.</li>
        <li><strong>Optimismo y Entusiasmo:</strong> Tu actitud positiva y entusiasta te permite abordar la vida con alegría. Tienes una visión optimista y contagias tu energía a quienes te rodean.</li>
        <li><strong>Comunicación:</strong> Eres un excelente comunicador, capaz de expresar tus ideas de manera clara y persuasiva. Tu habilidad para conectarte con los demás a través de la comunicación es una de tus fortalezas clave.</li>
        <li><strong>Carisma:</strong> Tu presencia es magnética y atrayente. Tienes una capacidad especial para atraer y mantener la atención de los demás, lo que te ayuda en situaciones sociales y profesionales.</li>
        <li><strong>Capacidad para Inspirar:</strong> Tienes un talento para inspirar y motivar a otros. Tu entusiasmo y pasión pueden elevar a las personas a alcanzar sus propios objetivos y sueños.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 3 como su número de año de nacimiento, posee talentos relacionados con la creatividad, la comunicación y el optimismo. Estas personas están naturalmente inclinadas a expresarse de manera artística y a inspirar a quienes las rodean con su energía positiva.</p>
    </motion.div>
  );
}

export default Tres;
