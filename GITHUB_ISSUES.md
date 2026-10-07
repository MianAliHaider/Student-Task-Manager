# GitHub Issues for Student-Task-Manager

Repository: [MianAliHaider/Student-Task-Manager](https://github.com/MianAliHaider/Student-Task-Manager/issues)

---

## Issue 1: Implement task search functionality

### Description
As a student managing multiple assignments and daily tasks, I need a search input field above the task list so that I can quickly filter and find specific tasks by their title or description without having to scroll through the entire list.

### Expected Behavior
- A search input box is placed above the "My Tasks" list.
- As the user types into the search box, the task list updates in real time to only display tasks whose title or description contains the entered query (case-insensitive).
- Clearing the search input immediately restores all tasks to the list.
- If no matching tasks are found, an appropriate empty state or message (e.g., "No tasks match your search") is displayed.

### Acceptance Criteria
- [ ] Add a search input element `<input type="text" id="taskSearch" placeholder="Search tasks...">` above `#taskList`.
- [ ] Implement an `input` event listener in `script.js` to filter tasks dynamically.
- [ ] Search query matching is case-insensitive and checks both task title and description.
- [ ] Task completion and deletion features continue to function seamlessly on filtered tasks.
- [ ] Clearing the search bar shows all existing tasks again.

---

## Issue 2: Add completed task status tracking and persistent state

### Description
Currently, marking a task as "Complete" toggles a CSS line-through class on the text element, but the status is not structured as task metadata, tracked in counters, or persisted. We need explicit completed task status management so users can easily distinguish between active and completed items, track their progress, and persist the state across browser reloads.

### Expected Behavior
- Each task object tracks an explicit `completed: boolean` status attribute.
- Completed tasks are visually distinguished (e.g., strikethrough styling, muted color badge, or moved to a "Completed" section).
- A counter or summary (e.g., "3 of 5 tasks completed") updates whenever a task is marked complete or undone.
- Task items and their completed states persist in `localStorage` so refreshing the page does not lose progress.

### Acceptance Criteria
- [ ] Refactor task creation to maintain a data structure (e.g., array of task objects with `id`, `title`, `description`, `completed`).
- [ ] Toggle button switches task status between `Pending` and `Completed`.
- [ ] Add visual badge or label indicating whether the task is `Pending` or `Completed`.
- [ ] Persist tasks and their completion state in browser `localStorage`.
- [ ] Display an active vs. completed task progress indicator/counter.

---

## Issue 3: Improve mobile responsive layout and touch interactions

### Description
On smaller screen devices such as smartphones and tablets, the task form and list items should offer an optimal mobile-first layout with adequate touch targets, clean wrapping, and comfortable spacing to prevent horizontal scrolling or cramped action buttons.

### Expected Behavior
- Form inputs, labels, and buttons span 100% width on screens under 600px width.
- Buttons have minimum touch target dimensions (at least 44px height) for easy tapping on mobile screens.
- Task card actions (Complete and Delete buttons) arrange neatly without overflowing or overlapping long task text.
- Text areas and inputs adapt smoothly across portrait and landscape orientations without breaking layout boundaries.

### Acceptance Criteria
- [ ] Ensure viewport meta tag is properly configured in `index.html`.
- [ ] Add CSS media queries for breakpoints (`max-width: 600px` and `max-width: 480px`).
- [ ] Task card buttons stack or wrap gracefully with minimum height of `44px` and comfortable padding for touch targets.
- [ ] Long task titles and descriptions wrap properly (`word-break: break-word` or `overflow-wrap: anywhere`) without horizontal scrollbars.
- [ ] Test layout across desktop, tablet, and mobile viewport sizes to ensure no horizontal overflow.
