// Toggle "Soon." messages for each tab
document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior

    // Hide all "Soon." messages and Home content
    document.querySelectorAll('.soon-message').forEach(message => {
      message.style.display = 'none';
    });
    document.querySelector('.about-me').style.display = 'none';  // Hide Home content

    // Get the ID of the clicked tab and show the corresponding content
    const id = tab.getAttribute('href').substring(0, tab.getAttribute('href').length - 5);
    if (id === "index") {  // If it's the Home tab
      document.querySelector('.about-me').style.display = 'block';  // Show Home content
    } else {
      document.getElementById(id).style.display = 'block';  // Show the "Soon." message for other tabs
    }
  });
});
