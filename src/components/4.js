import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Cuatro({ anio }) {
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
      <h2 className="card-title">Talento asociado al número 4</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Organización y Estructura:</strong> Tienes una habilidad natural para crear y mantener sistemas organizados y estructurados. Eres meticuloso y te destacas en la planificación y en la implementación de proyectos.</li>
        <li><strong>Responsabilidad y Disciplina:</strong> Eres una persona confiable y trabajadora, con un fuerte sentido de responsabilidad. Tu disciplina y dedicación te permiten cumplir con tus compromisos de manera efectiva.</li>
        <li><strong>Habilidad para Resolver Problemas:</strong> Posees una capacidad destacada para abordar y resolver problemas de manera lógica y práctica. Tienes un enfoque metódico que te ayuda a encontrar soluciones efectivas.</li>
        <li><strong>Estabilidad y Seguridad:</strong> Buscas la estabilidad y la seguridad en tu vida, tanto en lo personal como en lo profesional. Eres alguien en quien otros confían para mantener un entorno seguro y equilibrado.</li>
        <li><strong>Trabajo Duro y Perseverancia:</strong> Tu ética de trabajo es fuerte y estás dispuesto a hacer el esfuerzo necesario para lograr tus metas. La perseverancia es una de tus principales virtudes.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 4 como su número de año de nacimiento, posee talentos relacionados con la organización, la responsabilidad y la resolución de problemas. Estas personas están naturalmente inclinadas a crear estructuras sólidas y a trabajar con dedicación para alcanzar sus objetivos.</p>
    </motion.div>
  );
}

export default Cuatro;
