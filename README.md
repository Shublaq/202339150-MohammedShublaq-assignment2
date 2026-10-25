# Personal Portfolio - Assignment 2

A responsive personal portfolio built with HTML, CSS, and JavaScript for the Web Engineering course at KFUPM.

This assignment extends my Assignment 1 portfolio with interactive project filtering, contact-form validation, user feedback, and smooth button transitions. It also improves the introduction layout and replaces project placeholder images with interface previews.

## Features

- About Me section with my background, interests, and skills.
- Two project cards presenting the KFUPM Room Booking System and KFUPM Hub.
- Project filtering using All, Java, and UI/UX buttons.
- Contact-form validation for required fields and email format.
- Removal of surrounding whitespace before validating form entries.
- Clear error and confirmation messages that reset when fields are edited.
- Keyboard-accessible filter buttons with visible focus indicators.
- Smooth color transitions on filter buttons.
- Responsive layouts for desktop, tablet, and mobile screens.
- A greeting based on the visitor’s local time.

## Technologies Used

- HTML for page structure and content.
- CSS, Flexbox, Grid, and media queries for styling and responsive layouts.
- JavaScript for the greeting, filtering, validation, and feedback.
- Git and GitHub for version control.

No frameworks, external APIs, or package dependencies are required.

## Project Structure

```text
202339150-MohammedShublaq-assignment2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── room-booking.png
│       └── kfupm-hub.png
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Running Locally

### Download the project

1. On this repository’s GitHub page, select **Code → Download ZIP**.
2. Extract the ZIP.
3. Open `index.html` in a modern web browser.

Alternatively, clone the repository:

```bash
git clone https://github.com/Shublaq/202339150-MohammedShublaq-assignment2.git
```

Open the downloaded project folder and then open `index.html`.

No installation, build command, or backend server is required. Keep the folder structure unchanged so the stylesheet, script, and images load correctly.

## Using the Website

### Navigation

Use About, Projects, and Contact in the navigation bar to move between sections.

### Project filtering

- **All:** shows both projects.
- **Java:** shows the KFUPM Room Booking System.
- **UI/UX:** shows KFUPM Hub.

The selected filter is highlighted. Keyboard users can navigate using Tab and activate buttons using Enter or Space.

### Contact form

Enter a name, email address, and message, then select **Send Message**.

Invalid entries produce error feedback. Valid entries produce a confirmation message. Editing a field clears the previous feedback.

**The form is a demonstration: it validates entries locally but does not send, store, or email messages.** Use the email link in the Contact section to contact me.

## Limitations

- There is no backend or message-delivery service.
- The selected project filter resets to All when the page reloads.
- Filtering and custom form feedback require JavaScript.
- Project information and categories are maintained manually in the HTML.

## AI Assistance

ChatGPT assisted with interpreting requirements, explaining code, suggesting HTML, CSS, and JavaScript, debugging, reviewing accessibility, and drafting documentation.

The [AI Usage Report](docs/ai-usage-report.md) records the assistance, adaptations, verification, and declaration. Complete conversations and intermediate AI artifacts are submitted separately in the AI Evidence ZIP on Blackboard.

## Technical Documentation

See [Technical Documentation](docs/technical-documentation.md) for implementation explanations, testing details, and debugging notes.

## Author

Mohammed Shublaq  
Student ID: 202339150