import { useState } from 'react';

function Switch() {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleToggle = () => {
    setIsNightMode((prevMode) => {
      // Añadimos o quitamos la clase al <html>
      if (!prevMode) {
        document.documentElement.classList.add('night-mode');
      } else {
        document.documentElement.classList.remove('night-mode');
      }
      return !prevMode; // Actualizamos el estado
    });
  };
}

export default Switch
