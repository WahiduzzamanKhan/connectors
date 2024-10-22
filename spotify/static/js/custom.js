// Function to get the value of the "code" parameter from the URL
function getCodeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code'); // Get the 'code' parameter value
}

// Insert the "code" value into the element with id "code"
document.addEventListener("DOMContentLoaded", function() {
    const codeValue = getCodeFromURL();
    if (codeValue) {
        document.getElementById('code').textContent = codeValue; // Insert the code into the UI element
    }
});

// Function to copy the content of the textarea with id 'code'
function copyCode() {
    const codeTextarea = document.getElementById('code');
    codeTextarea.select(); // Select the content of the textarea
    codeTextarea.setSelectionRange(0, 99999); // For mobile devices
    
    document.execCommand('copy'); // Copy the selected text to clipboard
    alert('Code copied to clipboard!');
}
