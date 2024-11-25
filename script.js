// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Get the toggle links
    const skillsToggle = document.querySelector("#skills-toggle h2");
    const experienceToggle = document.querySelector("#experience-toggle h2");

    // Get the content to show/hide
    const skillsContent = document.getElementById("skills");
    const experienceContent = document.getElementById("experience");

    // Toggle functionality for Skills
    skillsToggle.addEventListener("click", () => {
        skillsContent.classList.toggle("hidden");
    });

    // Toggle functionality for Experience
    experienceToggle.addEventListener("click", () => {
        experienceContent.classList.toggle("hidden");
    });
});