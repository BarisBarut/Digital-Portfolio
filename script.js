document.querySelectorAll('.tab-link').forEach(tab => {
  tab.addEventListener('click', function (event) {
    event.preventDefault();

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

document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function() {
    const fullContent = this.previousElementSibling; // The .blog-full element

    // Toggle visibility of the full content (steps + images)
    if (fullContent.style.display === 'none') {
      fullContent.style.display = 'block';
    } else {
      fullContent.style.display = 'none';
    }

    // Also toggle the visibility of the step images/content within the .blog-full section
    const stepContents = fullContent.querySelectorAll('.step-content');
    stepContents.forEach(content => {
      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});



