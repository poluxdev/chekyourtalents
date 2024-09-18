import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Uno({ anio }) {
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
      <h2 className="card-title">Talento asociado al número 1</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Liderazgo Natural:</strong> Tienes una inclinación natural para liderar, dirigir proyectos y tomar decisiones. Te gusta ser pionero en lo que haces y tienes la capacidad de inspirar a otros.</li>
        <li><strong>Creatividad e Innovación:</strong> Eres innovador, con ideas originales y un enfoque único hacia los desafíos. No temes explorar nuevos territorios y marcar tu propio camino.</li>
        <li><strong>Determinación y Auto-confianza:</strong> Eres muy seguro de ti mismo, decidido y con gran capacidad para superar obstáculos. Te motiva alcanzar tus metas y no te rindes fácilmente.</li>
        <li><strong>Independencia:</strong> Prefieres trabajar de forma independiente, confiando en tus habilidades y juicio. Disfrutas de la autonomía y sueles ser muy autosuficiente.</li>
        <li><strong>Espíritu Emprendedor:</strong> Tienes talento para los negocios y la iniciativa. Eres capaz de iniciar proyectos nuevos con energía y enfoque.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 1 como su número de año de nacimiento, posee un fuerte potencial para liderar, innovar y trabajar de manera independiente. Su naturaleza ambiciosa y segura de sí misma la hace destacarse en roles donde puede tomar la iniciativa y trazar su propio camino.</p>
    </motion.div>
  );
}

export default Uno;
