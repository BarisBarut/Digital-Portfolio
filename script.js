// Toggle visibility for tabs
document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Hide all content sections and "Soon" messages
    document.querySelectorAll('.content > div').forEach(section => {
      section.style.display = 'none';
    });

    // Get the ID from the href (for example, 'manual_assessment_memo')
    const id = tab.getAttribute('href').substring(0, tab.getAttribute('href').length - 5);

    // If it's the Home tab, show the About Me content
    if (id === "index") {
      document.querySelector('.about-me').style.display = 'block';  // Show About Me
    } else {
      // Show the customized "Soon." message for other tabs
      const message = document.getElementById(id);
      if (message) {
        message.innerText = `${id.charAt(0).toUpperCase() + id.slice(1).replace(/_/g, ' ')} soon.`;  // Update the message
        message.style.display = 'block';  // Show the message
      }
    }
  });
});

// Optional: Default section to show when page loads (e.g., About Me section)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.about-me').style.display = 'block';  // Default to showing About Me
});
