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


// Select the form, its fields, and the feedback paragraph.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Let our submit handler control when browser validation runs.
contactForm.noValidate = true;

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Remove spaces from the beginning and end of each entry.
    nameInput.value = nameInput.value.trim();
    emailInput.value = emailInput.value.trim();
    messageInput.value = messageInput.value.trim();

    if (!contactForm.checkValidity()) {
        formStatus.textContent =
            "Please complete all required fields and enter a valid email address.";
        formStatus.dataset.state = "error";

        contactForm.reportValidity();
        return;
    }

    formStatus.textContent =
        "Your entries are valid. This demo does not send messages.";
    formStatus.dataset.state = "success";
});

// Clear outdated feedback when the visitor edits a field.
contactForm.addEventListener("input", function () {
    formStatus.textContent = "";
    formStatus.dataset.state = "";
});