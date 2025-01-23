// Function to show the reflective blogs section
function showReflectiveBlogs() {
  document.getElementById('reflective_blogs').style.display = 'block';
}

// Add event listener to the Reflective Blogs tab to show the section when clicked
document.getElementById('reflective_blogs_tab').addEventListener('click', function(event) {
  event.preventDefault();
  showReflectiveBlogs();
});
