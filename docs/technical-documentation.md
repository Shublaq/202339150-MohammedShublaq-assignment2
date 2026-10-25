# Technical Documentation

## Project Overview

This project is a responsive personal portfolio built with HTML, CSS, and JavaScript. It presents information about me, my skills, two projects, and a contact form. Assignment 2 extends the Assignment 1 website by adding interactive project filtering. Visitors can select All, Java, or UI/UX to choose which projects appear.

## Project Files

| File or folder | Purpose |
|---|---|
| `index.html` | Defines the page structure, portfolio content, filter buttons, and contact form. |
| `css/styles.css` | Controls colors, spacing, layouts, responsive design, and filter button states. |
| `js/script.js` | Displays the time-based greeting and handles project filtering. |
| `assets/images/` | Stores the project placeholder images. |
| `docs/ai-usage-report.md` | Records AI assistance and the assignment declaration. |
| `docs/technical-documentation.md` | Explains the implementation, testing, debugging, and limitations. |

## HTML Structure

The website uses a header, navigation, main content, and footer. The main content includes About Me, Projects, and Contact sections. Navigation links use section IDs to move to the relevant section.

Each project is represented by an `article` element with the class `projectCard`. Each card contains an image, a project title, and a description. The contact form contains Name, Email, and Message fields.

## CSS and Responsive Design

CSS styles the navigation, introductory area, skills, project cards, contact form, and footer. Flexbox arranges the navigation, skills, and project filter buttons. CSS Grid arranges the project cards.

Media queries adapt the layout for tablet and mobile screens. The project grid changes from two columns to one column, and the navigation stacks vertically on smaller screens. The filter buttons can wrap onto another row when space is limited.

Filter buttons have hover styling and a selected state. The selector `.filterButton[aria-pressed="true"]` gives the selected button a blue background and white text. The `:focus-visible` selector adds a dark outline with a small gap around a focused button to help keyboard users identify their current position.

## Time-Based Greeting

JavaScript selects the greeting paragraph and reads the current hour from the visitor's device. Conditional statements choose a morning, afternoon, or evening greeting. This feature runs when the page loads.

## Project Filtering

### Purpose and Controls

Project filtering lets visitors view projects by category without reloading the page:

- **All:** displays both projects and is selected initially.
- **Java:** displays the KFUPM Room Booking System.
- **UI/UX:** displays KFUPM Hub.

### Implementation

Each filter button stores its value in a `data-filter` attribute: `all`, `java`, or `design`. Each project card stores its category in a `data-category` attribute. The Room Booking System uses `java`, and KFUPM Hub uses `design`.

JavaScript uses `querySelectorAll()` to select the filter buttons and project cards. It then uses `forEach()` to attach a click event listener to each button.

When a visitor activates a button, the event handler:

1. Reads its filter value using `button.dataset.filter`.
2. Sets every filter button's `aria-pressed` attribute to `false`.
3. Sets the activated button's `aria-pressed` attribute to `true`.
4. Checks each project card and updates its `hidden` property.

The condition used to hide a card is:

```javascript
project.hidden =
    selectedFilter !== "all" &&
    project.dataset.category !== selectedFilter;
```

A card is hidden when the selected filter is not All and its category does not match the selected filter. Selecting All makes the condition false for every card, so both projects appear again.

### Accessibility

The filters use native `button` elements with `type="button"`. Visitors can move between them using Tab and activate them using Enter or Space. A visible focus outline identifies the focused button.

The button container uses `role="group"` and `aria-label="Filter projects"` to identify the related controls. Each button uses `aria-pressed` to communicate its selected state to assistive technology. JavaScript updates this state when the visitor changes the filter.

## Testing and Debugging

The following checks cover the completed filtering feature. Testing was performed manually in the browser.

| Check | Expected result |
|---|---|
| Load the page | All is selected and both project cards appear. |
| Select Java | Only the KFUPM Room Booking System appears. |
| Select UI/UX | Only KFUPM Hub appears. |
| Select All after another filter | Both project cards appear again. |
| Change the selected filter | The selected button receives the blue background styling. |
| Navigate with Tab | The focused filter button has a visible outline. |
| Activate a filter with Enter or Space | The corresponding filter is applied. |

The filtering issue found during development was corrected and retested. Initially, `data-category="java"` was placed on the `projectsGrid` container instead of the Room Booking System's `article` element. The JavaScript reads the category from each `.projectCard`, so the Java project had no category value and disappeared when Java was selected. Moving the attribute to the correct `article` element fixed the problem.

The responsive layout was also tested using Chrome DevTools.

## Running and Using the Website

Open `index.html` in a browser. The website uses local HTML, CSS, JavaScript, and image files, so no package installation or backend setup is required. Keep the project folders in their existing locations so the stylesheet, script, and images load correctly.

Use the navigation links to move between sections. In Projects, select All, Java, or UI/UX to change the visible cards.

## Current Limitations

- The project images are temporary placeholders and can be replaced with actual project screenshots.
- The contact form does not send messages because the project has no backend.
- Project categories are defined manually in the HTML.
- Filtering requires JavaScript. Without JavaScript, the filter buttons do not change the displayed projects.
- The selected filter is not saved between page loads; the page starts with All selected.
