// Toggle "Soon." messages for each tab
document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior
    
    // Hide all "Soon." messages
    document.querySelectorAll('.soon-message').forEach(message => {
      message.style.display = 'none';
    });

    // Display the specific "Soon." message for the clicked tab
    const id = tab.getAttribute('href').substring(0, tab.getAttribute('href').length - 5);
    document.getElementById(id).style.display = 'block';
  });
});
