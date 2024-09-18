import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Nueve({ anio }) {
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
      <h2 className="card-title">Talento asociado al número 9</h2>
      <p><strong>El año {anio} revela que tienes los siguientes talentos y cualidades:</strong></p>
      <ul>
        <li><strong>Altruismo y Humanitarismo:</strong> Posees un fuerte deseo de ayudar a los demás y de contribuir al bienestar de la comunidad o la humanidad en general. Eres compasivo y sientes una profunda conexión con las causas sociales y humanitarias.</li>
        <li><strong>Creatividad y Expresión Artística:</strong> Tienes una gran sensibilidad artística y un talento natural para expresarte creativamente, ya sea en las artes, la escritura, la música u otras formas de expresión.</li>
        <li><strong>Idealismo:</strong> Eres idealista por naturaleza, con una visión del mundo orientada hacia la justicia, la igualdad y el amor universal. Tienes un fuerte sentido de los principios y sueles ser guiado por tus ideales en la vida.</li>
        <li><strong>Sabiduría e Intuición:</strong> Sueles tener una visión profunda y una gran intuición, lo que te permite comprender el panorama general y ver más allá de las apariencias. Eres sabio y reflexivo.</li>
        <li><strong>Capacidad para Inspirar:</strong> Eres inspirador y a menudo sirves de guía o mentor para otros. Tu enfoque positivo y tu dedicación a causas mayores te convierten en una figura de influencia y motivación.</li>
      </ul>
      <p>En resumen, una persona nacida en {anio}, con el número 9 como su número de año de nacimiento, posee talentos relacionados con la compasión, la creatividad y el humanitarismo. Estas personas están naturalmente inclinadas a ayudar a los demás y a trabajar por un mundo mejor, utilizando su sensibilidad artística y su fuerte sentido del idealismo para inspirar y guiar a otros.</p>
    </motion.div>
  );
}

export default Nueve;
