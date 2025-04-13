// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Change text content
    document.getElementById('changeTextBtn').addEventListener('click', function () {
      document.getElementById('text').textContent = 'The text has been changed!';
    });
  
    // Toggle element visibility
    document.getElementById('toggleElementBtn').addEventListener('click', function () {
      const newElement = document.getElementById('newElement');
      if (newElement.style.display === 'none') {
        newElement.style.display = 'block';
      } else {
        newElement.style.display = 'none';
      }
    });
  
    // Change background color
    document.getElementById('changeStyleBtn').addEventListener('click', function () {
      document.body.style.backgroundColor = '#cde8f9'; // light blue
    });
  });
  