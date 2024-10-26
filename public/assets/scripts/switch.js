function initializeNightModeSwitch() {
    const toggleSwitch = document.getElementById("darkModeToggle");

    if (toggleSwitch) {
      //console.log("Checkbox encontrado:", toggleSwitch);
      toggleSwitch.addEventListener("change", function() {
        document.documentElement.classList.toggle("dark-mode");
        // console.log("Modo nocturno activado:", toggleSwitch.checked);
      });
    } else {
      // console.error("El checkbox con ID 'nightModeToggle' NO se encuentra en el DOM. Reintentando...");
      setTimeout(initializeNightModeSwitch, 500); // Reintenta cada 500ms
    }
  }
  
  initializeNightModeSwitch();
  