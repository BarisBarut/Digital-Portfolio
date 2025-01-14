// Toggle visibility for tabs
document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Hide the About Me content and all custom "Soon." messages
    document.querySelector('.about-me').style.display = 'none';  // Hide About Me section
    document.querySelectorAll('.soon-message').forEach(message => {
      message.style.display = 'none';
    });

    // Get the ID from the href (for example, 'manual_assessment_memo')
    const id = tab.getAttribute('href').substring(0, tab.getAttribute('href').length - 5);
    
    // If it's the Home tab, show the About Me content
    if (id === "index") {
      document.querySelector('.about-me').style.display = 'block';  // Show About Me
    } else {
      // Change the message to be more specific for each tab
      const message = document.getElementById(id);
      message.innerText = `${id.charAt(0).toUpperCase() + id.slice(1).replace(/_/g, ' ')} soon.`;  // Update the message with the tab name
      message.style.display = 'block';  // Show the customized "Soon." message
    }
  });
});
