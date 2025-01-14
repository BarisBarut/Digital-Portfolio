// Toggle visibility for tabs
document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Hide the About Me content and all "Soon." messages
    document.querySelector('.about-me').style.display = 'none';  // Hide Home content
    document.querySelectorAll('.soon-message').forEach(message => {
      message.style.display = 'none';
    });

    // Get the ID from the href (for example, 'manual_assessment_memo')
    const id = tab.getAttribute('href').substring(0, tab.getAttribute('href').length - 5);

    // If it's the Home tab, show the About Me content
    if (id === "index") {
      document.querySelector('.about-me').style.display = 'block';  // Show About Me
    } else {
      document.getElementById(id).style.display = 'block';  // Show "Soon." message
    }
  });
});
