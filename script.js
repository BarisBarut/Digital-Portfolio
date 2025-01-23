// Function to show the reflective blogs section and hide the homepage content
function showReflectiveBlogs() {
  document.getElementById('reflective_blogs').style.display = 'block';
  document.querySelector('.about-me').style.display = 'none'; // Hide 'About Me' section
}

// Add event listener to the Reflective Blogs tab to show the section when clicked
document.getElementById('reflective_blogs_tab').addEventListener('click', function(event) {
  event.preventDefault();
  showReflectiveBlogs();
});
