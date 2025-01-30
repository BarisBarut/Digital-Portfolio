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
    const stepContents = fullContent.querySelectorAll('.step-content');

    // Toggle the visibility of the full content
    fullContent.style.display = fullContent.style.display === 'none' ? 'block' : 'none';

    // Toggle the visibility of the step images/content
    stepContents.forEach(content => {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });
});


