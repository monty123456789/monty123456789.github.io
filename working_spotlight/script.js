const container = document.getElementById("container");
const background = document.getElementById("background");
const mouseCircle = document.getElementById("mouse-circle");

container.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const mouseY = e.clientY - container.getBoundingClientRect().top;

    // Set the position of the circle around the mouse
    mouseCircle.style.left = `${mouseX}px`;
    mouseCircle.style.top = `${mouseY}px`;

    // Calculate the position of the mouse relative to the container
    const circleRadius = mouseCircle.offsetWidth / 2;
    
    // Calculate the circle position and size based on the mouse position
    const circleX = mouseX - circleRadius;
    const circleY = mouseY - circleRadius;

    // Update the background properties
    background.style.clipPath = `circle(${circleRadius}px at ${mouseX}px ${mouseY}px)`;
    background.style.opacity = 1;
});

container.addEventListener("mouseleave", () => {
    // When the mouse leaves the container, use JavaScript to gradually fade the background
    let opacity = 1;
    const fadeOutInterval = setInterval(() => {
        opacity -= 0.15; // Adjust the step size for the desired speed
        background.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeOutInterval);
        }
    }, 50); // Adjust the interval for the desired transition speed
});
