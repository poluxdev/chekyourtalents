import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Ocho({ anio }) {
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
      <h2 className="card-title">Talento asociado al número 8</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Habilidad para el Liderazgo:</strong> Tienes una gran capacidad para liderar y motivar a otros. Tu habilidad para tomar decisiones y dirigir proyectos es notable.</li>
        <li><strong>Ambición y Determinación:</strong> Eres una persona ambiciosa y determinada. Tu deseo de alcanzar metas y tu habilidad para superar obstáculos son muy fuertes.</li>
        <li><strong>Capacidad para la Gestión:</strong> Posees habilidades excepcionales para la gestión y la organización. Eres capaz de manejar recursos de manera eficiente y eficaz.</li>
        <li><strong>Enfoque en el Éxito:</strong> Tienes un enfoque claro hacia el éxito y trabajas con esfuerzo para lograr tus objetivos. Tu mentalidad orientada a resultados es una de tus mayores fortalezas.</li>
        <li><strong>Visión Estratégica:</strong> Tu visión estratégica te permite planificar a largo plazo y tomar decisiones informadas. Eres capaz de ver el panorama general y trazar un camino hacia el éxito.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 8 como su número de año de nacimiento, posee talentos relacionados con el liderazgo, la ambición y la gestión. Estas personas están naturalmente inclinadas a asumir roles de responsabilidad y a trabajar hacia el éxito con determinación y enfoque.</p>
    </motion.div>
  );
}

export default Ocho;
