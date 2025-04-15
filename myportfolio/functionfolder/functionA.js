// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const contactsButton = document.querySelector('.contacts-btn');
    const contactsContainer = document.querySelector('.contacts-container');
    const contacts = document.querySelector('.contacts');

    // Add event listener to the contacts button
    contactsButton.addEventListener('click', function() {
        // Check if the contacts div is currently visible
        if (contacts.style.visibility === 'visible') {
            // Hide the contacts
            contacts.style.visibility = 'hidden';
            contacts.style.opacity = '0';
            contacts.style.height = '0';  // This collapses the height

        } else {
            // Show the contacts
            contacts.style.visibility = 'visible';
            contacts.style.opacity = '1';
            contacts.style.height = 'auto'; // Allow the contacts to expand to fit content
        }
    });
});
