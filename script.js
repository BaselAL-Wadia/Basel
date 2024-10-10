// Get the toggle mode button, modal, and other elements
const toggleModeButton = document.getElementById("toggleMode");
const contactModal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.getElementsByClassName("close")[0];

// Toggle dark mode
toggleModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Open modal on button click
contactBtn.addEventListener("click", () => {
    contactModal.style.display = "flex";
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
});

// Close modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
});
