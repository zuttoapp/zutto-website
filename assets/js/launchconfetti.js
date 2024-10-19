function launchConfetti() {
    const colors = ['#16c913', '#FF6F61']; // Green and white colors for confetti
    const shapes = ['circle', 'image'];

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        shapes: shapes,
        // Custom image for confetti
        image: {
            src: '/images/zuttoapp-icon-green.png', // Path to your icon
            width: 50, // Width of the icon
            height: 50 // Height of the icon
        }
    });
}

// // Attach the event listener for hover on the language toggle button
// document.addEventListener('DOMContentLoaded', function() {
//     const languageToggle = document.getElementById('language-toggle');
//     languageToggle.addEventListener('mouseover', launchConfetti);
// });