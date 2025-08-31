//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Create a new paragraph element
    const paragraph = document.createElement('p');
    
    // Set the text content
    paragraph.textContent = 'DOM load success';
    
    // Append the paragraph to the body
    document.body.appendChild(paragraph);
});
