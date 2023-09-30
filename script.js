function animateButton() {
    const button = document.getElementById("submitBtn");
    
    // Add the 'animate' class to trigger the animation
    button.classList.add("animate");
    button.style.backgroundColor = "rgb(0 192 131)";
    
    // Remove the 'animate' class after the animation completes
    setTimeout(() => {
        button.classList.remove("animate");
    }, 500); // Adjust the time to match the animation duration
}
