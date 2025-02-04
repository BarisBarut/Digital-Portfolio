// Handling tab navigation to display content sections
document.querySelectorAll('.tab-link').forEach(tab => {
  tab.addEventListener('click', function (event) {
    event.preventDefault();

    // Remove 'active' class from all tabs
    document.querySelectorAll('.tab-link').forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    this.classList.add('active');

    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
      content.style.display = 'none';
    });

    // Show the selected content section
    const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.style.display = 'block';
    }
  });
});

// Handling the 'Read More' and 'Show Less' functionality for blog posts
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function() {
    const fullContent = this.previousElementSibling; // The .blog-full element
    const summary = this.previousElementSibling.previousElementSibling; // The .blog-summary element

    // Toggle visibility of the full content (steps + images)
    if (fullContent.style.display === 'none') {
      fullContent.style.display = 'block';
      summary.style.display = 'none'; // Hide the summary once full content is revealed
      this.textContent = 'Show Less'; // Change button text to 'Show Less'
    } else {
      fullContent.style.display = 'none';
      summary.style.display = 'block'; // Show the summary again
      this.textContent = 'Read More'; // Change button text to 'Read More'
    }
  });
});
