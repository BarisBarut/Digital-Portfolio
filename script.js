// Toggle visibility for tabs
document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Hide the About Me content and all sections
    document.querySelector('.about-me').style.display = 'none';  // Hide About Me section
    document.querySelectorAll('.soon-message').forEach(message => {
      message.style.display = 'none';
    });

    // Get the ID from the href (for example, 'reflective_blogs')
    const id = tab.getAttribute('href').substring(0, tab.getAttribute('href').length - 5);
    
    // If it's the Home tab, show the About Me content
    if (id === "index") {
      document.querySelector('.about-me').style.display = 'block';  // Show About Me
    } else if (id === "reflective_blogs") {
      // Show the Reflective Blogs section
      const message = document.getElementById(id);
      message.style.display = 'block';  // Show Reflective Blogs
    }
  });
});
