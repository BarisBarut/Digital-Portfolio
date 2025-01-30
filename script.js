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
  button.addEventListener('click', function () {
    const blogSummary = this.previousElementSibling;  // This now points to the correct summary
    const blogFull = blogSummary.nextElementSibling; // Now points to the correct full content

    // Toggle between showing full blog and summary
    if (blogFull.style.display === 'none') {
      blogFull.style.display = 'block';
      blogSummary.style.display = 'none';
      this.textContent = 'Show Less';
    } else {
      blogFull.style.display = 'none';
      blogSummary.style.display = 'block';
      this.textContent = 'Read More';
    }
  });
});
