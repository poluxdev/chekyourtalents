import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Siete({ anio }) {
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
      <h2 className="card-title">Talento asociado al número 7</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Introspección y Reflexión:</strong> Eres una persona que valora la introspección y el autoanálisis. Tienes una profunda capacidad para reflexionar sobre ti mismo y sobre la vida en general.</li>
        <li><strong>Sabiduría y Conocimiento:</strong> Tienes una fuerte inclinación hacia la búsqueda de conocimiento y la sabiduría. Disfrutas investigando y comprendiendo temas profundos y complejos.</li>
        <li><strong>Espíritu Analítico:</strong> Tu mente analítica te permite descomponer problemas y entender situaciones desde múltiples perspectivas. Eres bueno resolviendo problemas y encontrando soluciones.</li>
        <li><strong>Independencia:</strong> Prefieres trabajar de manera independiente y valoras tu tiempo a solas. Tu autonomía te permite explorar tus propios intereses y objetivos.</li>
        <li><strong>Intuición y Percepción:</strong> Tu intuición es aguda y te ayuda a percibir lo que está más allá de lo evidente. Tienes una capacidad especial para entender y captar detalles sutiles.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 7 como su número de año de nacimiento, posee talentos relacionados con la introspección, la sabiduría y el análisis. Estas personas están naturalmente inclinadas a buscar la verdad y a comprender el mundo en un nivel más profundo.</p>
    </motion.div>
  );
}

export default Siete;
