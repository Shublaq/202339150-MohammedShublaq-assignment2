// Select the text and get the visitor's current hour.
let greeting = document.getElementById("greeting");
let currentHour = new Date().getHours();

// Change the greeting according to the current time.
if (currentHour < 12) {
    greeting.textContent = "Good morning, I am";
}
else if (currentHour < 18) {
    greeting.textContent = "Good afternoon, I am";
}
else {
    greeting.textContent = "Good evening, I am";
}

// Select the filter buttons and project cards.
const filterButtons = document.querySelectorAll(".filterButton");
const projectCards = document.querySelectorAll(".projectCard");

// Set up a click event for each filter button.
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filter;

        // Reset all buttons, then select the clicked button.
        filterButtons.forEach(function (filterButton) {
            filterButton.setAttribute("aria-pressed", "false");
        });

        button.setAttribute("aria-pressed", "true");

        // Hide projects that do not match the selected filter.
        projectCards.forEach(function (project) {
            project.hidden =
                selectedFilter !== "all" &&
                project.dataset.category !== selectedFilter;
        });
    });
});