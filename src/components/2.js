import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Dos({ anio }) {
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
      <h2 className="card-title">Talento asociado al número 2</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Colaboración y Cooperación:</strong> Tienes una habilidad natural para trabajar en equipo y colaborar con los demás. Te sientes cómodo en entornos grupales y valoras la armonía y el consenso.</li>
        <li><strong>Empatía y Sensibilidad:</strong> Eres muy sensible a las emociones de los demás y tienes una gran capacidad para entender y apoyar a los demás. Tu empatía te permite conectar profundamente con las personas.</li>
        <li><strong>Diplomacia y Tacto:</strong> Posees una habilidad especial para mediar en conflictos y encontrar soluciones que beneficien a todas las partes. Tu tacto y diplomacia son esenciales para mantener relaciones armoniosas.</li>
        <li><strong>Intuición:</strong> Tu intuición es fuerte y te ayuda a tomar decisiones basadas en tu comprensión de las personas y las situaciones. Sueles confiar en tu instinto para guiarte en la vida.</li>
        <li><strong>Apoyo y Servicio:</strong> Tienes una inclinación natural para servir y apoyar a los demás. Disfrutas ayudando y te sientes realizado cuando puedes hacer una diferencia positiva en la vida de las personas.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 2 como su número de año de nacimiento, posee talentos relacionados con la colaboración, la empatía y la diplomacia. Estas personas están naturalmente inclinadas a trabajar en equipo, apoyar a los demás y mantener la armonía en sus relaciones.</p>
    </motion.div>
  );
}

export default Dos;
