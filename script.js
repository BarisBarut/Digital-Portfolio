// Toggle visibility for tabs
document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();

    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
      content.style.display = 'none';
    });

    // Show the clicked tab's content
    const id = this.getAttribute('href').substring(1); // Get ID without #
    const content = document.getElementById(id);
    if (content) {
      content.style.display = 'block';
    }
  });
});

// Show "About Me" by default on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.about-me').style.display = 'block';
});
