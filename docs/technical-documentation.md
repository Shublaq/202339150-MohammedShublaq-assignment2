# Technical Documentation

## Project Overview

This project is a responsive personal portfolio built with HTML, CSS, and JavaScript. It presents my background, skills, two projects, and contact information.

Assignment 2 builds on Assignment 1 by adding interactive project filtering, contact-form validation, clear user feedback, and smooth button transitions. Visual improvements include a shorter introduction, a subtle background glow, and project interface images.

## Project Files

| File or folder | Purpose |
|---|---|
| `index.html` | Defines the page structure, portfolio content, project filters, images, and contact form. |
| `css/styles.css` | Controls colors, spacing, responsive layouts, image presentation, button transitions, and feedback styling. |
| `js/script.js` | Implements the time-based greeting, project filtering, form validation, and user feedback. |
| `assets/images/` | Stores project interface previews and retained placeholder assets. |
| `docs/ai-usage-report.md` | Documents AI assistance, the Usage Log, and the declaration. |
| `docs/technical-documentation.md` | Explains implementation decisions, testing, debugging, and limitations. |
| `.gitignore` | Excludes local settings and other unnecessary files from version control. |

## HTML Structure

The page uses semantic HTML elements, including `header`, `nav`, `main`, `section`, `article`, and `footer`.

The main content contains About Me, Projects, and Contact sections. Navigation links reference section IDs so visitors can move directly to the relevant content.

Each project card contains an interface image, a title, and a description. Its `data-category` attribute identifies the project category used by the filtering feature.

The contact form contains Name, Email, and Message fields. Each field has an associated label and is required. The email field uses `type="email"` for browser email-format validation.

The stylesheet is linked in the document head. The JavaScript file uses `defer`, allowing the HTML to be parsed before the script runs.

## CSS and Responsive Design

Flexbox arranges the navigation, skills, and filter buttons. CSS Grid displays the project cards in two columns on larger screens.

At viewport widths of 900px or less, the project grid changes to one column. At 600px or less, the navigation stacks vertically, heading sizes decrease, and spacing adjusts for smaller screens. Filter buttons can wrap onto additional rows.

The introduction sizes itself around its content instead of occupying a full screen. Padding provides spacing, and a radial gradient adds a subtle blue glow to the navy background.

### Button States and Transitions

Filter buttons have distinct hover, selected, and keyboard-focus styles.

The selector `.filterButton[aria-pressed="true"]` gives the selected filter a blue background and white text. The `:focus-visible` selector provides a dark outline so keyboard users can identify the focused button.

Background and text colors transition over 0.2 seconds when their values change. This provides a smooth visual response to interaction.

### Project Images

The project cards display a Room Booking System interface preview and a KFUPM Hub student login screen exported from Figma.

Both image areas use `aspect-ratio: 3 / 2` for consistent presentation. `object-fit: contain` keeps each complete image visible without stretching or cropping it. A background color fills any remaining space.

The HTML includes descriptive alternative text, image dimensions, and `loading="lazy"`.

## Time-Based Greeting

JavaScript selects the greeting paragraph and obtains the current hour from the visitor’s device using `new Date().getHours()`.

Conditional statements display:

- A morning greeting before 12:00.
- An afternoon greeting from 12:00 until before 18:00.
- An evening greeting from 18:00 onward.

The greeting is calculated when the page loads.

## Project Filtering

### Purpose and Controls

Visitors can filter projects without reloading the page:

- **All:** displays both projects and is selected initially.
- **Java:** displays the KFUPM Room Booking System.
- **UI/UX:** displays KFUPM Hub.

### Implementation

Each filter button has a `data-filter` value: `all`, `java`, or `design`. Each project card has a corresponding `data-category` value.

JavaScript uses `querySelectorAll()` to select the buttons and cards. A `forEach()` loop attaches a click event listener to each button.

When a button is activated, the handler:

1. Reads its filter value using `button.dataset.filter`.
2. Sets all filter buttons’ `aria-pressed` attributes to `false`.
3. Sets the activated button’s `aria-pressed` attribute to `true`.
4. Updates each project card’s `hidden` property.

The hiding condition is:

```javascript
project.hidden =
    selectedFilter !== "all" &&
    project.dataset.category !== selectedFilter;
```

A card is hidden only when the selected filter is not All and its category does not match. Selecting All makes this condition false for both cards, showing them again.

### Accessibility

The controls use native buttons that support keyboard navigation and activation with Enter or Space.

The container uses `role="group"` and `aria-label="Filter projects"` to identify the related controls. The `aria-pressed` attributes communicate the selected filter to assistive technology, while visible styling communicates it visually.

## Contact Form Validation and Feedback

### Validation Process

JavaScript intercepts the form’s submit event and calls `event.preventDefault()` to prevent normal submission and page reload.

The script sets `contactForm.noValidate = true` so its submit handler controls when browser validation runs. The HTML validation rules remain available through the browser’s validation API.

Before checking validity, the script applies `trim()` to each field. This removes leading and trailing whitespace and prevents spaces-only names or messages from satisfying the required-field rules.

The handler then calls `checkValidity()` to check required fields and email format.

### Invalid Entries

When validation fails:

1. An explanatory error message appears in the feedback paragraph.
2. Its `data-state` is set to `error`, selecting dark red styling.
3. `reportValidity()` displays the browser’s validation guidance and directs attention to an invalid field.
4. `return` stops the handler before the confirmation message.

### Valid Entries

When validation succeeds, the form displays:

> Your entries are valid. This demo does not send messages.

The feedback’s `data-state` becomes `success`, selecting dark green styling. The form does not send or store the entries.

An input event listener clears outdated feedback whenever the visitor edits a field.

### Feedback Accessibility

The feedback paragraph uses `role="status"` and `aria-atomic="true"` to support announcements of the complete message by screen readers.

Messages explain the outcome in words as well as using color. Actual screen-reader behavior has not been independently verified.

## Performance Considerations

The website uses local HTML, CSS, JavaScript, and image files without a framework or external API dependency.

The script selects filter buttons and project cards once, then reuses those references during interaction.

Project images use lazy loading so the browser can defer fetching them until they approach the visible area. Their dimensions provide aspect-ratio information, and CSS controls their displayed size.

These choices keep the implementation lightweight. No formal performance benchmark has been recorded.

## Testing and Debugging

### Test Environment

Manual testing was performed in Google Chrome. Chrome DevTools was used to inspect viewport widths of 320px, 768px, and 1440px.

The following results reflect the checks completed during development and the final Chrome test round.

### Functional Checks

| Check | Expected result | Result |
|---|---|---|
| Initial project display | All is selected and both projects appear. | Passed |
| Select Java | Only the Room Booking System appears. | Passed |
| Select UI/UX | Only KFUPM Hub appears. | Passed |
| Select All after another filter | Both projects appear again. | Passed |
| Change filter | The selected button’s styling updates. | Passed |
| Navigate filters with Tab | A visible outline identifies the focused button. | Passed |
| Activate filters with Enter or Space | The corresponding filter is applied. | Passed |
| Submit empty fields | Validation feedback identifies incomplete entries. | Passed |
| Enter spaces only in Name or Message | The entries fail required-field validation after trimming. | Passed |
| Enter an invalid email address | Validation fails and error guidance appears. | Passed |
| Submit valid entries | A confirmation appears without page reload. | Passed |
| Edit a field after feedback appears | Previous feedback clears. | Passed |
| Display error and confirmation feedback | Appropriate text and colors appear. | Passed |
| Load project images | Both images display without stretching. | Passed |
| Activate navigation links | The page moves to the corresponding sections. | Passed |
| Hover over an unselected filter | Button colors transition smoothly. | Passed |

### Responsive Checks

At 320px, 768px, and 1440px, the layout was checked for horizontal scrolling, overlapping text, distorted images, and controls extending outside the page.

All checks passed in Chrome. No failures were observed during the final test round. Other browsers have not yet been tested.

### Resolved Filtering Bug

Initially, `data-category="java"` was placed on the `projectsGrid` container instead of the Room Booking System’s `article` element.

The script reads the category from each `.projectCard`. Because the Java card had no category attribute, it disappeared when Java was selected.

Moving the attribute to the correct `article` element fixed the issue. The filters were then retested successfully.

## Running and Using the Website

Open `index.html` in a modern browser. No package installation, build process, or backend setup is required.

Keep the folder structure unchanged so relative paths to stylesheets, scripts, and images remain valid.

Use the navigation links to move between sections. Use the project buttons to filter cards. Complete the contact fields to try validation and feedback. Use the email link for actual contact.

## Current Limitations

- The contact form is a local demonstration with no backend, storage, or message-delivery service.
- Email-format validation does not verify that an email address exists.
- Project information and categories are maintained manually in HTML.
- The selected filter resets to All when the page reloads.
- Filtering and custom form feedback require JavaScript.
- Compatibility has been tested in Chrome only.
- Screen-reader behavior and formal performance metrics have not been independently tested.