document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("nightModeToggle");
  
    if (toggleSwitch) {
      toggleSwitch.addEventListener("change", function() {
        document.documentElement.classList.toggle("night-mode");
      });
    }
  });
  