document.getElementById("reflective_blogs_tab").addEventListener("click", function() {
  document.getElementById("reflective_blogs").style.display = "block"; // Show blog content
  window.location.hash = "reflective_blogs"; // Add hash for URL change
});

// Hide reflective blog by default when loading the page
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("reflective_blogs").style.display = "none";
});
