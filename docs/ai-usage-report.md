# AI Usage Report — Assignment 2

## Tools Used and Use Cases

### ChatGPT

I used ChatGPT to help extend my Assignment 1 portfolio for Assignment 2. Its assistance included interpreting requirements, reviewing previous feedback, planning the work, explaining concepts, generating initial HTML, CSS, and JavaScript snippets, debugging, and reviewing the implementation.

ChatGPT also drafted the README and technical documentation and helped organize this AI usage report. I was responsible for reviewing the suggestions, choosing changes, applying them to my project, and testing the resulting behavior.

The assistance covered:

- Project filtering using category buttons.
- Contact-form validation and feedback.
- Keyboard accessibility and selected-button states.
- Button transitions and visual improvements.
- Project-image selection and HTML integration.
- Git commands and repository organization.
- Documentation drafting and review.

## Benefits and Challenges

Working step by step helped me connect the HTML structure, CSS styling, and JavaScript behavior instead of treating them as separate tasks.

The explanations helped me understand event listeners, custom data attributes, browser validation, and accessibility attributes. AI also helped identify a filtering bug: I had placed the Java category attribute on the grid container instead of the project card.

A challenge was ensuring that suggestions matched my actual project and understanding them before use. I asked follow-up questions about unfamiliar code and keyboard focus behavior.

Documentation also required careful checking. Some descriptions inherited from Assignment 1 became outdated after adding validation and replacing the displayed placeholder images.

## Learning Outcomes

This assignment helped me learn how to extend an existing website with interactive features while maintaining its structure.

### Project Filtering

I learned how `querySelectorAll()` selects multiple elements and how `forEach()` processes them. Event listeners respond when visitors activate filter buttons.

The buttons store their values in `data-filter`, while cards store categories in `data-category`. JavaScript compares these values and updates each card’s `hidden` property.

I also learned that attributes on a parent container are not automatically inherited by its children. This explained why the incorrectly placed Java category caused the filtering problem.

### Form Validation

I learned how `event.preventDefault()` prevents normal form submission and page reload.

Using `trim()` removes surrounding whitespace so spaces-only names and messages do not satisfy required-field validation.

`checkValidity()` checks HTML constraints, while `reportValidity()` displays the browser’s validation guidance. Setting `noValidate` lets the JavaScript handler control when these checks run.

### Accessibility and Feedback

I learned how visible focus outlines help keyboard users identify the current control. The `aria-pressed` attribute communicates the selected filter.

The form feedback uses `role="status"` to support announcements by assistive technology. Messages explain results in words as well as through color. I did not independently test screen-reader behavior.

### Testing and Version Control

I used Chrome and Chrome DevTools to check functionality and responsive layouts. I also used a separate Git branch to develop the interactive features and meaningful commits to record progress.

## Review, Decisions, and Modifications

My decisions and changes included:

- Choosing project filtering that matched the two existing portfolio projects.
- Setting the filter-button corner radius to 15px.
- Correcting the Java category attribute with AI debugging guidance.
- Checking validation behavior using empty, spaces-only, invalid-email, and valid inputs.
- Replacing displayed placeholder images with project interface previews.
- Applying a shorter introduction and a subtle background glow.
- Using consistent image areas while preserving complete screenshots.
- Requesting a folder tree for the README’s project structure.
- Keeping the form’s demonstration limitation visible.
- Declining optional reduced-motion code and a dark-theme feature to keep the assignment focused.

## Verification

I manually tested the website in Google Chrome. Chrome DevTools was used to inspect viewport widths of 320px, 768px, and 1440px.

The checks covered:

- Initial project display and all three filters.
- Selected-filter styling and keyboard operation.
- Required fields, spaces-only entries, and invalid email addresses.
- Confirmation for valid entries without page reload.
- Clearing outdated feedback when editing fields.
- Feedback colors and button transitions.
- Image loading, navigation links, and responsive layouts.

The reported checks passed. The earlier category-attribute bug was corrected and retested.

Other browsers, screen-reader behavior, and formal performance benchmarks have not been independently tested.


## Assignment 2 Usage Log
| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|---|---|---|---|---|---|
| C01 | ChatGPT 6.1 Sol | 2026-10-19 to 2026-10-25 | Reviewing the requirements and previous feedback, setting up Assignment 2, and planning, project filtering, form validation | docs/ai-usage-report.md, index.html, css/styles.css, js/script.js, docs/technical-documentation.md, README.md, docs/technical-documentation.md | Copied assignment 1 files into the new repository of assignment 2, created branch for interactive features. |
| A01 | ChatGPT 6.1 Sol | 2026-10-19 | Suggest HTML for project filtering. | index.html | Added three filter buttons and category attributes to both projects. Verified that the buttons and both project cards appear in the browser. JavaScript was not implemented at this HTML-only stage. |
| A02 | ChatGPT 6.1 Sol | 2026-10-19 | Suggest CSS for project filtering. | css/styles.css | Added styling with css to filtering buttons with border-radius set to 15px. confirmed that the styles appear in the browser. |
| A03 | ChatGPT 6.1 Sol | 2026-10-25 | Suggest JavaScript for project filtering. | script.js | Added JavaScript functionality to filtering buttons in the projects section. Corrected the Java category attribute. Tested all buttons work as intended in the browser. |
| A04 | ChatGPT 6.1 Sol | 2026-10-25 | Suggest HTML for improving contact form. | index.html | added HTML snippets to the index.html file. confirmed it displayed on the browser. |
| A05 | ChatGPT 6.1 Sol | 2026-10-25 | Suggest JavaScript for form validation. | script.js | added JavaScript code to validate form info into the script.js file. Tested empty fields, spaces-only entries, invalid email, valid entries without page reload, and feedback clearing after editing. All passed in Chrome. |
| A06 | ChatGPT 6.1 Sol | 2026-10-25 | Suggest CSS for form validation styling. | css/styles.css | added CSS styling to the form validation messages into the styles.css file. confirmed the design appears on the browser. |
| A07 | ChatGPT 6.1 Sol | 2026-10-25 | Suggest CSS for smooth animations. | css/styles.css | added CSS smooth transitions between filtering buttons into the styles.css file. confirmed the behavior  on the browser. |
| A08 | ChatGPT 6.1 Sol | 2026-10-25 | Suggest CSS styling for the overall design. | css/styles.css | added CSS glow effect and auto sizing into the styles.css file. confirmed the design on the browser. |
| A09 | ChatGPT 6.1 Sol | 2026-10-25 | Assistance with changing project images. | index.html, css/styles.css | added the actual pictures for the project cards into the index.html file and styles.css file. confirmed images on the browser. |
| A10 | ChatGPT 6.1 Sol | 2026-10-25 | Assistance with drafting README.md file. | README.md | fixed formatting issues and changed the project structure and review it |
| A11 | ChatGPT 6.1 Sol | 2026-10-25 | Assistance with drafting technical-documentation.md file. | technical-documentation.md | confirmed relevance and review it |
| A12 | ChatGPT 6.1 Sol | 2026-10-25 | Assistance with drafting ai-usage-report.md file. | ai-usage-report.md | changed what actually done and filled blanks and checked relevance and reviewed it |


## Evidence

The AI Evidence ZIP is submitted separately on Blackboard as:

`202339150-MohammedShublaq-assignment2-ai-evidence.zip`

It contains:

- `conversations/`: complete, unedited AI conversations, including failed attempts.
- `artifacts/`: original AI-generated outputs before my edits, identified using the IDs in the Usage Log.

The conversation logs and evidence ZIP are not committed to the repository.


## Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

Name: Mohammed Shublaq
Student ID: 202339150
Date: 25/10/2026
Signature: Mohammed Shublaq