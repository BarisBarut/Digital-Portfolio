document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Hide the About Me content and Reflective Blogs section initially
    document.querySelector('.about-me').style.display = 'none';  // Hide About Me section
    document.querySelector('#reflective_blogs').style.display = 'none';  // Hide Reflective Blogs

    // If it's the Home tab, show the About Me content
    const id = tab.getAttribute('href').substring(0, tab.getAttribute('href').length - 5);
    
    if (id === "index") {
      document.querySelector('.about-me').style.display = 'block';  // Show About Me
    } else if (id === "reflective_blogs") {
      document.querySelector('#reflective_blogs').style.display = 'block';  // Show Reflective Blogs
    }
  });
});
