# JS Learning Lab - Educational Edition 🚀

An interactive, single-page application designed to help students master core JavaScript concepts. This lab provides a visual, hands-on approach to learning DOM manipulation, Events, Advanced JS features, and Web APIs.

## 🎓 The Educational Approach

Unlike static tutorials, this lab is built on the philosophy of "See it, Click it, Understand it." 
Every interactive example in this application is accompanied by two crucial educational components:
1.  **Definitions**: Clear, beginner-friendly explanations of the JavaScript methods or concepts being demonstrated.
2.  **JavaScript Snippets**: The exact code running behind the scenes, syntax-highlighted for easy studying and copying.

## 🛠️ Modules Included

### 1. DOM Deep Dive 🌲
Learn how to navigate and manipulate the Document Object Model hierarchy.
-   **CSS Selectors (`querySelector`)**: Includes a clickable helper list of valid selectors on the page.
-   **Finding by Name & Tag (`getElementsByName/TagName`)**.
-   **Creating & Appending Elements (`createElement`, `appendChild`)**.
-   **Setting Content (`innerHTML` vs `innerText`)**.

### 2. Events & Propagation ⚡
Understand how JavaScript responds to user interactions.
-   **Event Listeners (`addEventListener` vs inline `onclick`)**.
-   **Form State Events (`focus`, `blur`, `input`, `change`)**.
-   **Event Bubbling Visualizer**: A live demonstration of how events bubble up the DOM tree and how to stop them using `stopPropagation()`.

### 3. Animation & Slideshow 🎬
Master timing events and recursive sequences.
-   **Interval Animation (`setInterval`)**: Build a moving progress bar.
-   **Recursive Slideshow (`setTimeout`)**: Cycle through images dynamically.

### 4. Window Object 🪟
Interact with the browser's global object.
-   **Alerts, Prompts, and Confirms**.
-   **Window Sizing (`innerWidth`, `innerHeight`)**.
-   **Location & URL tracking**.

### 5. Form Validation Hub 🛡️
A comprehensive guide to client-side data validation.
-   **Presence**: Checking for empty fields.
-   **Length**: Enforcing minimum/maximum character limits.
-   **Numeric Range**: Validating age brackets.
-   **RegEx Pattern**: Validating email formats.
-   **Comparison**: Password matching logic.
-   **Choice & Checkbox**: Mandating dropdown selections and Terms of Service agreements.

### 6. Canvas Graphics 🎨
Draw graphics on the fly with JavaScript's 2D context.
-   **Basic Shapes**: Draw Rectangles (`fillRect`) and Circles (`arc`).
-   **Paths & Lines**: Use `moveTo` and `lineTo` to create vector paths.
-   **Color Gradients**: Create transitions with `createLinearGradient`.
-   **Canvas Text**: Render text directly on the canvas using `fillText`.

### 7. Regular Expressions Lab 🔍
Pattern searching, extraction, and validation.
-   **Basic Search (`.test()`)**: With case-insensitivity (`/i`).
-   **Character Classes (`\d`)**: Extracting numbers using `.match()`.
-   **Quantifiers & Anchors**: Validating a 5-digit US Zip Code (`^\d{5}$`).
-   **Global Replace (`.replace()`)**: Safely swapping words in sentences using (`/g`).

### 8. Error Handling Lab ⚠️
Learn how to safely catch and manage different types of JavaScript errors.
-   **ReferenceError**: Accessing non-existent variables.
-   **TypeError**: Illegal operations on data types.
-   **RangeError**: Values outside allowed limits.
-   **URIError**: Decoding errors.
-   **Custom Exceptions**: Using `throw` and ensuring cleanup with the `finally` block.

---

## 💻 Tech Stack
-   **Vanilla HTML5**: Semantic structure.
-   **Vanilla CSS3**: Custom styles, responsive grid/flexbox layouts, and a modern "Glassmorphism" dark-mode aesthetic. 
-   **Vanilla JavaScript (ES6+)**: All logic, routing (SPA style), and DOM manipulation. No external libraries or frameworks are used.

## 🚀 How to Run Locally
Because this project uses vanilla web technologies without backend dependencies, setup is incredibly simple:

1.  Clone or download this repository to your local machine.
2.  Open the folder containing the project files.
3.  Double-click the `index.html` file to open it directly in your default web browser.

*Alternatively, for an optimal experience (especially if testing modules that might later require `fetch` requests), you can run it via a local development server like VS Code's "Live Server" extension.*

## 📖 How to Use the Lab
1. Select a topic from the left sidebar navigation.
2. Read the introduction to understand the module's goal.
3. Interact with the UI elements (buttons, inputs, canvas).
4. Read the **Definition** block that appears below the interaction.
5. Study the **JAVASCRIPT** block to see exactly how the interaction was coded.
