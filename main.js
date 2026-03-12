// JS Learning Lab - Educational Edition
// Prepared by AJM (KTSS)

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    const moduleTitle = document.getElementById('module-title');
    const moduleDescription = document.getElementById('module-description');
    const moduleContainer = document.getElementById('module-container');

    // Helper: Render an educational example block
    function renderExample(id, title, interactiveHtml, definition, jsCode) {
        return `
            <div class="card glass" style="margin-bottom: 2rem;">
                <section class="example-section" id="ex-${id}">
                    <h3>${title}</h3>
                    <div class="interactive-area">
                        ${interactiveHtml}
                    </div>
                    <div class="edu-block">
                        <div class="definition">
                            <strong>Definition:</strong> ${definition}
                        </div>
                        <div class="code-snippet">${jsCode}</div>
                    </div>
                </section>
            </div>
        `;
    }

    // Module Definitions
    const modules = {
        'home': {
            title: 'Welcome to JS Learning Lab',
            description: 'A comprehensive interactive environment to master DOM, Events, and more.',
            render: () => `
                <div class="welcome-screen">
                    <div class="card glass">
                        <h2>Educational Lab v3</h2>
                        <p>This lab now includes <strong>Definitions</strong> and <strong>JS Code Snippets</strong> for every interaction to help you visualize the logic behind the UI.</p>
                        <div class="topics-grid">
                            <div class="topic-item">
                                <h3>DOM Mastery</h3>
                                <p>Selection, Creation, and Manipulation.</p>
                            </div>
                            <div class="topic-item">
                                <h3>Event Logic</h3>
                                <p>Propagation, Attributes, and Listeners.</p>
                            </div>
                            <div class="topic-item">
                                <h3>Advanced JS</h3>
                                <p>Window Object, RegEx, and Error Handling.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'dom-deep-dive': {
            title: 'DOM Selection & Manipulation',
            description: 'Learn how to find and modify elements in the document hierarchy.',
            render: () => {
                let html = '';
                
                // Example 1: querySelector
                html += renderExample('query', '1. CSS Selectors (querySelector)', `
                    <p>Highlight elements using CSS selectors:</p>
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <input type="text" id="sel-input" value=".logo">
                        <button id="sel-run" class="btn">querySelector()</button>
                    </div>
                `, 
                "The <code>querySelector()</code> method returns the first element that matches a specified CSS selector. <code>querySelectorAll()</code> returns all matches.",
                "const el = document.querySelector('.logo');\nel.classList.add('highlight-flash');");

                // Example 2: getElementsByName
                html += renderExample('name', '2. Finding by Name (getElementsByName)', `
                    <p>Select your favorite fruit:</p>
                    <label><input type="radio" name="fruit" value="Apple"> Apple</label>
                    <label><input type="radio" name="fruit" value="Banana"> Banana</label>
                    <button id="name-run" class="btn btn-outline" style="margin-top:10px; display:block;">Check Selection</button>
                    <div id="name-out" class="display-box">No selection.</div>
                `,
                "The <code>getElementsByName()</code> method returns a collection of elements with a specified name attribute.",
                "let fruits = document.getElementsByName('fruit');\nfor(let f of fruits) {\n  if(f.checked) console.log(f.value);\n}");

                // Example 3: getElementsByTagName
                html += renderExample('tag', '3. Finding by Tag (getElementsByTagName)', `
                    <ul id="tag-list" style="margin-bottom:10px;">
                        <li>Apples</li>
                        <li>Oranges</li>
                        <li>Grapes</li>
                    </ul>
                    <button id="tag-run" class="btn btn-outline">Highlight all &lt;li&gt;</button>
                `,
                "The <code>getElementsByTagName()</code> method returns a collection of all elements with a specified tag name.",
                "const items = document.getElementsByTagName('li');\nfor (let i = 0; i < items.length; i++) {\n  items[i].style.color = 'coral';\n}");

                // Example 4: create/appendChild
                html += renderExample('factory', '4. DOM Factory (createElement)', `
                    <div id="factory-zone" style="margin-bottom:10px;">
                        <p>Dynamic Content Area:</p>
                    </div>
                    <button id="factory-add" class="btn">Add Item</button>
                    <button id="factory-rem" class="btn btn-danger">Remove Last</button>
                `,
                "const newP = document.createElement('p');\nnewP.innerText = 'New Item!';\ndocument.getElementById('zone').appendChild(newP);");

                // Example 5: innerHTML vs innerText
                html += renderExample('content', '5. Content Manipulation (innerHTML vs innerText)', `
                    <div id="content-demo" style="border:1px solid #555; padding:10px; margin-bottom:10px;">Original Content</div>
                    <button id="set-html" class="btn btn-outline">Set innerHTML (with tags)</button>
                    <button id="set-text" class="btn btn-outline">Set innerText (escapes tags)</button>
                `,
                "<code>innerHTML</code> renders HTML tags, while <code>innerText</code> (and <code>textContent</code>) treats everything as plain text.",
                "el.innerHTML = '<b>Bold</b>';\nel.innerText = '<b>Not Bold</b>';");

                return html;
            },
            init: () => {
                // query
                document.getElementById('sel-run').onclick = () => {
                    const sel = document.getElementById('sel-input').value;
                    document.querySelectorAll('.highlight-flash').forEach(el => el.classList.remove('highlight-flash'));
                    const results = document.querySelectorAll(sel);
                    results.forEach(el => el.classList.add('highlight-flash'));
                };

                // name
                document.getElementById('name-run').onclick = () => {
                    const fruits = document.getElementsByName('fruit');
                    const out = document.getElementById('name-out');
                    let selected = "None";
                    for(let f of fruits) if(f.checked) selected = f.value;
                    out.innerText = "Selected: " + selected;
                };

                // tag
                document.getElementById('tag-run').onclick = () => {
                    const items = document.querySelectorAll('#tag-list li'); // Simplified for demo
                    items.forEach(i => i.style.color = i.style.color === 'coral' ? 'white' : 'coral');
                };

                // factory
                const zone = document.getElementById('factory-zone');
                document.getElementById('factory-add').onclick = () => {
                    const item = document.createElement('div');
                    item.className = 'topic-item';
                    item.style.marginTop = '5px';
                    item.innerText = "New Dynamic Node #" + (zone.children.length);
                    zone.appendChild(item);
                };
                document.getElementById('factory-rem').onclick = () => {
                    if (zone.children.length > 1) zone.removeChild(zone.lastElementChild);
                };

                // content
                const demo = document.getElementById('content-demo');
                document.getElementById('set-html').onclick = () => { demo.innerHTML = "<strong>Styled</strong> content with <span style='color:lime'>HTML</span>"; };
                document.getElementById('set-text').onclick = () => { demo.innerText = "<strong>This is just text</strong> - tags are visible!"; };
            }
        },
        'dom-events': {
            title: 'Events & Propagation',
            description: 'Mastering attributes, listeners, and the event cycle.',
            render: () => {
                let html = '';

                // Example 1: addEventListener vs onclick
                html += renderExample('listeners', '1. Reliable Listeners (addEventListener)', `
                    <button id="listen-multi" class="btn">One button, Two Listeners</button>
                    <div id="listen-log" class="display-box">Logs...</div>
                `,
                "<code>addEventListener()</code> allows adding multiple handlers of the same type to one element without overwriting.",
                "btn.addEventListener('click', fn1);\nbtn.addEventListener('click', fn2);");

                // Example 2: Form States (blur/focus/input)
                html += renderExample('form-states', '2. Form Lifecycle (focus/blur/input)', `
                    <div class="form-group">
                        <label>Interact with this field:</label>
                        <input type="text" id="state-input" placeholder="Watch the log below...">
                        <div id="state-log" class="display-box" style="margin-top:10px;">Status: Idle</div>
                    </div>
                `,
                "<code>onfocus</code> fires when an element gets focus, <code>onblur</code> when it loses it, and <code>oninput</code> whenever user input changes.",
                "input.onfocus = () => log('Focused!');\ninput.onblur = () => log('Lost Focus');\ninput.oninput = () => log('Typing...');");

                // Example 3: Propagation
                html += renderExample('prop', '3. Propagation (Bubbling)', `
                    <div id="p-outer" class="prop-outer">
                        Outer
                        <div id="p-inner" class="prop-inner">Inner (Click me)</div>
                    </div>
                    <div id="p-log" class="display-box">Logs...</div>
                `,
                "Bubbling means the event is handled by the innermost element first, then its parents.",
                "el.addEventListener('click', handler, false); // false = bubbling");

                // Example 4: removeEventListener
                html += renderExample('remove-listener', '4. Detaching Listeners (removeEventListener)', `
                    <button id="rem-trigger" class="btn">Click me (Look at console)</button>
                    <button id="rem-kill" class="btn btn-danger">Kill Listener</button>
                    <div id="rem-log" class="display-box" style="margin-top:10px;">Status: Listener is Active</div>
                `,
                "<code>removeEventListener()</code> removes a previously attached event handler. Note: You must use the same function reference.",
                "function log() { console.log('Hi'); }\nbtn.addEventListener('click', log);\nbtn.removeEventListener('click', log);");

                return html;
            },
            init: () => {
                // listeners
                const lBtn = document.getElementById('listen-multi');
                const lLog = document.getElementById('listen-log');
                lBtn.addEventListener('click', () => { lLog.innerHTML += "Listener 1 fired!<br>"; });
                lBtn.addEventListener('click', () => { lLog.innerHTML += "Listener 2 fired!<br>"; });

                // states
                const sInp = document.getElementById('state-input');
                const sLog = document.getElementById('state-log');
                sInp.onfocus = () => { sLog.innerText = "Status: FOCUSED (onfocus)"; sLog.style.color = "#10b981"; };
                sInp.onblur = () => { sLog.innerText = "Status: BLURRED (onblur)"; sLog.style.color = "#ef4444"; };
                sInp.oninput = () => { sLog.innerText = "Status: TYPING... (oninput) Value: " + sInp.value; sLog.style.color = "#6366f1"; };
                sInp.onchange = () => { sLog.innerText = "Status: CHANGED (onchange)"; };

                // prop
                const pOut = document.getElementById('p-outer');
                const pInn = document.getElementById('p-inner');
                const pLog = document.getElementById('p-log');
                pOut.onclick = (e) => { pLog.innerHTML += "Outer Clicked<br>"; };
                pInn.onclick = (e) => { e.stopPropagation(); pLog.innerHTML += "Inner Clicked (Stopped Propagation)<br>"; };

                // remove
                const rLog = document.getElementById('rem-log');
                const rTri = document.getElementById('rem-trigger');
                const rKil = document.getElementById('rem-kill');
                const handler = () => { rLog.innerHTML += "Click Handled!<br>"; };
                
                rTri.addEventListener('click', handler);
                rKil.onclick = () => {
                    rTri.removeEventListener('click', handler);
                    rLog.innerText = "Status: Listener REMOVED. Clicking the button won't log anymore.";
                };
            }
        },
        'animation-lab': {
            title: 'Animation & Slideshow',
            description: 'Timing functions and visual transitions.',
            render: () => {
                let html = '';
                html += renderExample('timer-anim', '1. setInterval Animation', `
                    <div id="anim-ball" class="demo-box" style="position:relative; left:0;"></div>
                    <button id="anim-go" class="btn">Move (setInterval)</button>
                    <button id="anim-reset" class="btn btn-outline">Reset</button>
                `,
                "<code>setInterval()</code> calls a function repeatedly at fixed intervals (milliseconds).",
                "setInterval(() => {\n  el.style.left = (parseInt(el.style.left) + 5) + 'px';\n}, 20);");

                html += renderExample('slide', '2. Recursive Slideshow (setTimeout)', `
                    <div class="slideshow-container">
                        <img id="s-img" class="slideshow-img" src="https://picsum.photos/500/400">
                    </div>
                `,
                "A slideshow can use <code>setTimeout()</code> recursively to cycle images.",
                "function play() {\n  nextSlide();\n  setTimeout(play, 3000);\n}\nplay();");

                return html;
            },
            init: () => {
                // anim
                const ball = document.getElementById('anim-ball');
                let timer;
                document.getElementById('anim-go').onclick = () => {
                    clearInterval(timer);
                    timer = setInterval(() => {
                        let l = parseInt(ball.style.left) || 0;
                        ball.style.left = (l + 2) + 'px';
                        if (l > 300) clearInterval(timer);
                    }, 20);
                };
                document.getElementById('anim-reset').onclick = () => { clearInterval(timer); ball.style.left = '0'; };

                // slide
                const sImg = document.getElementById('s-img');
                const imgs = ['https://picsum.photos/500/400', 'https://picsum.photos/501/400', 'https://picsum.photos/502/400'];
                let idx = 0;
                function cycle() {
                    idx = (idx + 1) % imgs.length;
                    sImg.style.opacity = 0;
                    setTimeout(() => { sImg.src = imgs[idx]; sImg.style.opacity = 1; }, 500);
                    window.slideTimeout = setTimeout(cycle, 3000);
                }
                cycle();
            }
        },
        'window-obj': {
            title: 'Window Object',
            description: 'The global browser environment.',
            render: () => {
                let html = '';
                html += renderExample('win-props', '1. Window Dimensions', `
                    <div id="win-log" class="display-box">Resize window to update...</div>
                `,
                "<code>innerWidth</code> and <code>innerHeight</code> return the dimensions of the content area.",
                "window.onresize = () => {\n  log(window.innerWidth, window.innerHeight);\n};");

                html += renderExample('storage', '2. Persisting Data (localStorage)', `
                    <input type="text" id="store-name" placeholder="Enter your name">
                    <button id="store-save" class="btn">Save to localStorage</button>
                    <div id="store-out" class="display-box" style="margin-top:10px;">No saved data.</div>
                `,
                "<code>localStorage</code> stores data with no expiration date. It persists even after browser is closed.",
                "localStorage.setItem('user', name);\nconst user = localStorage.getItem('user');");

                return html;
            },
            init: () => {
                const wLog = document.getElementById('win-log');
                const up = () => { if(wLog) wLog.innerText = `Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`; };
                window.onresize = up;
                up();

                const sIn = document.getElementById('store-name');
                const sOut = document.getElementById('store-out');
                const saved = localStorage.getItem('lab-user');
                if (saved) sOut.innerText = "Welcome back, " + saved;

                document.getElementById('store-save').onclick = () => {
                    localStorage.setItem('lab-user', sIn.value);
                    sOut.innerText = "Saved: " + sIn.value;
                };
            }
        },
        'validation': {
            title: 'Form Validation Lab',
            description: 'Learn the logic behind every type of user input validation.',
            render: () => {
                let html = '';

                // 1. Required Field (Presence)
                html += renderExample('v-req', '1. Presence (Required)', `
                    <div class="form-group">
                        <input type="text" id="req-in" placeholder="Should not be empty">
                        <div id="req-err" class="error-msg"></div>
                        <button id="req-btn" class="btn btn-outline" style="margin-top:10px;">Check</button>
                    </div>
                `,
                "Presence validation ensures a field is not left blank. It checks if the string length is greater than zero.",
                "if (input.value.trim().length === 0) {\n  error('Field is required');\n}");

                // 2. Length Bounds
                html += renderExample('v-len', '2. Length Limits (Min/Max)', `
                    <div class="form-group">
                        <input type="text" id="len-in" placeholder="Username (5-12 chars)">
                        <div id="len-err" class="error-msg"></div>
                        <button id="len-btn" class="btn btn-outline" style="margin-top:10px;">Check</button>
                    </div>
                `,
                "Length validation checks if the number of characters falls within a specific range.",
                "if (val.length < 5 || val.length > 12) {\n  error('Must be 5-12 characters');\n}");

                // 3. Numeric Range
                html += renderExample('v-num', '3. Numeric Range (Age)', `
                    <div class="form-group">
                        <input type="number" id="num-in" placeholder="Age (18-99)">
                        <div id="num-err" class="error-msg"></div>
                        <button id="num-btn" class="btn btn-outline" style="margin-top:10px;">Check</button>
                    </div>
                `,
                "Numeric validation ensures the user enters a number and that it falls within expected bounds.",
                "const age = parseInt(input.value);\nif (isNaN(age) || age < 18 || age > 99) {\n  error('Invalid age range');\n}");

                // 4. RegEx Pattern (Email)
                html += renderExample('v-regex', '4. Pattern Matching (Email)', `
                    <div class="form-group">
                        <input type="text" id="reg-in" placeholder="example@domain.com">
                        <div id="reg-err" class="error-msg"></div>
                        <button id="reg-btn" class="btn btn-outline" style="margin-top:10px;">Check</button>
                    </div>
                `,
                "Regular Expressions (RegEx) verify if the input matches a complex pattern like email or phone formats.",
                "const pattern = /^\\S+@\\S+\\.\\S+$/;\nif (!pattern.test(input.value)) {\n  error('Invalid email format');\n}");

                // 5. Comparison Logic (Password Match)
                html += renderExample('v-comp', '5. Data Logic (Password Confirmation)', `
                    <div class="form-group">
                        <input type="password" id="pass1" placeholder="Password" style="margin-bottom:5px; width:100%;">
                        <input type="password" id="pass2" placeholder="Confirm Password" style="width:100%;">
                        <div id="comp-err" class="error-msg"></div>
                        <button id="comp-btn" class="btn btn-outline" style="margin-top:10px;">Check</button>
                    </div>
                `,
                "Data comparison ensures that two different fields have matching values (e.g., password and confirmation).",
                "if (pass1.value !== pass2.value) {\n  error('Passwords do not match');\n}");

                // 6. Selection Validation
                html += renderExample('v-sel', '6. Choice Validation (Select & Checkbox)', `
                    <div class="form-group">
                        <select id="sel-choose" style="margin-bottom:10px;">
                            <option value="">-- Choose Country --</option>
                            <option value="RW">Rwanda</option>
                        </select>
                        <label style="display:block; margin-bottom:10px;">
                            <input type="checkbox" id="check-agree"> I agree to terms
                        </label>
                        <div id="sel-err" class="error-msg"></div>
                        <button id="sel-btn" class="btn btn-outline">Check Selection</button>
                    </div>
                `,
                "Choice validation ensures a user selected a valid option from a list or checked a mandatory box.",
                "if (select.selectedIndex === 0 || !checkbox.checked) {\n  error('Please complete selection');\n}");

                return html;
            },
            init: () => {
                const validate = (id, fn) => {
                    document.getElementById(`${id}-btn`).onclick = () => {
                        const err = document.getElementById(`${id}-err`);
                        err.innerText = "";
                        const msg = fn();
                        if (msg) err.innerText = msg;
                        else alert("Validation Passed!");
                    };
                };

                validate('req', () => {
                    const v = document.getElementById('req-in').value.trim();
                    return v.length === 0 ? "Field is required" : "";
                });

                validate('len', () => {
                    const v = document.getElementById('len-in').value;
                    return (v.length < 5 || v.length > 12) ? "Must be between 5 and 12 characters" : "";
                });

                validate('num', () => {
                    const v = parseInt(document.getElementById('num-in').value);
                    return (isNaN(v) || v < 18 || v > 99) ? "Enter age between 18 and 99" : "";
                });

                validate('reg', () => {
                    const v = document.getElementById('reg-in').value;
                    return !/^\S+@\S+\.\S+$/.test(v) ? "Invalid email format" : "";
                });

                validate('comp', () => {
                    const p1 = document.getElementById('pass1').value;
                    const p2 = document.getElementById('pass2').value;
                    if (p1 === "" || p2 === "") return "Both fields are required";
                    return p1 !== p2 ? "Passwords do not match" : "";
                });

                validate('sel', () => {
                    const s = document.getElementById('sel-choose');
                    const c = document.getElementById('check-agree');
                    if (s.selectedIndex === 0) return "Please select a country";
                    if (!c.checked) return "You must agree to the terms";
                    return "";
                });
            }
        },
        'canvas': {
            title: 'Canvas Graphics Lab',
            description: 'Drawing graphics on the fly with JavaScript.',
            render: () => {
                let html = '';

                // 1. Basic Shapes
                html += renderExample('c-shape', '1. Basic Shapes (Rectangle & Arc)', `
                    <canvas id="can-shape" width="300" height="150" style="border:1px solid #555; background:white;"></canvas>
                    <div style="margin-top:10px;">
                        <button id="btn-rect" class="btn btn-outline">Draw Rect</button>
                        <button id="btn-arc" class="btn btn-outline">Draw Circle</button>
                    </div>
                `,
                "The <code>fillRect(x,y,w,h)</code> method draws a filled rectangle. The <code>arc()</code> method creates a circular path.",
                "ctx.fillStyle = 'blue';\nctx.fillRect(20, 20, 150, 100);\n\nctx.beginPath();\nctx.arc(240, 70, 40, 0, 2 * Math.PI);\nctx.stroke();");

                // 2. Paths & Lines
                html += renderExample('c-path', '2. Paths & Lines (moveTo/lineTo)', `
                    <canvas id="can-path" width="300" height="150" style="border:1px solid #555; background:white;"></canvas>
                    <button id="btn-line" class="btn btn-outline" style="margin-top:10px;">Draw Path</button>
                `,
                "To draw a line, use <code>moveTo(x,y)</code> to set the start point and <code>lineTo(x,y)</code> to set the end point. Finish with <code>stroke()</code>.",
                "ctx.moveTo(0, 0);\nctx.lineTo(200, 100);\nctx.stroke();");

                // 3. Gradients
                html += renderExample('c-grad', '3. Color Gradients', `
                    <canvas id="can-grad" width="300" height="150" style="border:1px solid #555; background:white;"></canvas>
                    <button id="btn-grad" class="btn btn-outline" style="margin-top:10px;">Apply Gradient</button>
                `,
                "Use <code>createLinearGradient(x,y,x1,y1)</code> to create a color transition. Add colors with <code>addColorStop()</code>.",
                "const grd = ctx.createLinearGradient(0,0,200,0);\ngrd.addColorStop(0, 'red');\ngrd.addColorStop(1, 'white');\nctx.fillStyle = grd;\nctx.fillRect(10,10,150,80);");

                // 4. Text
                html += renderExample('c-text', '4. Canvas Text', `
                    <canvas id="can-txt" width="300" height="100" style="border:1px solid #555; background:white;"></canvas>
                    <button id="btn-txt" class="btn btn-outline" style="margin-top:10px;">Write Text</button>
                `,
                "You can draw text using <code>fillText()</code> or <code>strokeText()</code> and set the <code>font</code> property.",
                "ctx.font = '30px Arial';\nctx.fillText('Hello World', 10, 50);");

                return html;
            },
            init: () => {
                const getCtx = (id) => document.getElementById(`can-${id}`).getContext('2d');

                // Shapes
                const sCtx = getCtx('shape');
                document.getElementById('btn-rect').onclick = () => {
                    sCtx.fillStyle = "#6366f1";
                    sCtx.fillRect(20, 20, 100, 80);
                };
                document.getElementById('btn-arc').onclick = () => {
                    sCtx.beginPath();
                    sCtx.arc(220, 70, 40, 0, 2 * Math.PI);
                    sCtx.strokeStyle = "#f43f5e";
                    sCtx.lineWidth = 3;
                    sCtx.stroke();
                };

                // Path
                const pCtx = getCtx('path');
                document.getElementById('btn-line').onclick = () => {
                    pCtx.beginPath();
                    pCtx.moveTo(0,0);
                    pCtx.lineTo(300, 150);
                    pCtx.strokeStyle = "#10b981";
                    pCtx.lineWidth = 2;
                    pCtx.stroke();
                };

                // Gradient
                const gCtx = getCtx('grad');
                document.getElementById('btn-grad').onclick = () => {
                    const grd = gCtx.createLinearGradient(0, 0, 300, 0);
                    grd.addColorStop(0, "#6366f1");
                    grd.addColorStop(1, "white");
                    gCtx.fillStyle = grd;
                    gCtx.fillRect(10, 10, 280, 130);
                };

                // Text
                const tCtx = getCtx('txt');
                document.getElementById('btn-txt').onclick = () => {
                    tCtx.font = "30px sans-serif";
                    tCtx.fillStyle = "#1e293b";
                    tCtx.fillText("JS Graphics", 40, 60);
                };
            }
        },
        'regex': {
            title: 'RegEx Lab',
            description: 'Pattern combinations.',
            render: () => renderExample('re', 'Live Matcher', `
                <input type="text" id="re-in" value="Search me!">
                <button class="btn" onclick="alert(/search/i.test(document.getElementById('re-in').value))">Test /search/i</button>
            `,
            "Regular expressions are patterns used to match character combinations in strings.",
            "const pattern = /search/i;\nconst result = pattern.test(str);"),
            init: () => {}
        },
        'errors': {
            title: 'Error Handling Lab',
            description: 'Learn to catch and manage different types of JavaScript errors.',
            render: () => {
                let html = '';

                // 1. ReferenceError
                html += renderExample('err-ref', '1. ReferenceError', `
                    <button id="btn-ref" class="btn btn-danger">Trigger ReferenceError</button>
                    <div id="log-ref" class="display-box" style="margin-top:10px;">Waiting...</div>
                `,
                "A <code>ReferenceError</code> occurs when you try to access a variable that has not been declared.",
                "try {\n  console.log(nonExistentVar);\n} catch(err) {\n  log(err.name); // 'ReferenceError'\n}");

                // 2. TypeError
                html += renderExample('err-type', '2. TypeError', `
                    <button id="btn-type" class="btn btn-danger">Trigger TypeError</button>
                    <div id="log-type" class="display-box" style="margin-top:10px;">Waiting...</div>
                `,
                "A <code>TypeError</code> happens when an operation is performed on a value of the wrong type (e.g., calling a string as a function).",
                "try {\n  const x = 'hello';\n  x.push('world');\n} catch(err) {\n  log(err.name); // 'TypeError'\n}");

                // 3. RangeError
                html += renderExample('err-range', '3. RangeError', `
                    <button id="btn-range" class="btn btn-danger">Trigger RangeError</button>
                    <div id="log-range" class="display-box" style="margin-top:10px;">Waiting...</div>
                `,
                "A <code>RangeError</code> is thrown when a value is not within an allowed range (e.g., invalid array length).",
                "try {\n  const arr = new Array(-1);\n} catch(err) {\n  log(err.name); // 'RangeError'\n}");

                // 4. URIError
                html += renderExample('err-uri', '4. URIError', `
                    <button id="btn-uri" class="btn btn-danger">Trigger URIError</button>
                    <div id="log-uri" class="display-box" style="margin-top:10px;">Waiting...</div>
                `,
                "A <code>URIError</code> occurs when global URI handling functions (like <code>decodeURI</code>) are used incorrectly.",
                "try {\n  decodeURI('%');\n} catch(err) {\n  log(err.name); // 'URIError'\n}");

                // 5. Throw & Finally
                html += renderExample('err-throw', '5. Custom Throw & Finally', `
                    <input type="number" id="age-input" placeholder="Enter age (0-150)" style="width:100%; margin-bottom:10px;">
                    <button id="btn-throw" class="btn btn-danger">Validate Age</button>
                    <div id="log-throw" class="display-box" style="margin-top:10px;">Waiting...</div>
                `,
                "You can <code>throw</code> your own errors. The <code>finally</code> block always executes, even if an error occurred.",
                "try {\n  if(age > 150) throw 'Too old';\n} catch(err) {\n  log(err);\n} finally {\n  log('Cleanup done');\n}");

                return html;
            },
            init: () => {
                const handle = (id, action) => {
                    document.getElementById(`btn-${id}`).onclick = () => {
                        const log = document.getElementById(`log-${id}`);
                        try {
                            action();
                            log.innerText = "Success (No error)";
                        } catch (e) {
                            log.innerHTML = `<span style="color:#ef4444">Caught: ${e.name || 'Error'}</span><br>Message: ${e.message || e}`;
                        }
                    };
                };

                handle('ref', () => {
                    return nonExistentFunctionCall();
                });

                handle('type', () => {
                    const num = 123;
                    num.toUpperCase();
                });

                handle('range', () => {
                    const a = new Array(-5);
                });

                handle('uri', () => {
                    decodeURI('%');
                });

                document.getElementById('btn-throw').onclick = () => {
                    const log = document.getElementById('log-throw');
                    const val = document.getElementById('age-input').value;
                    log.innerHTML = "";
                    try {
                        if (val === "") throw new Error("Input is empty!");
                        const age = parseInt(val);
                        if (age < 0) throw new Error("Age cannot be negative");
                        if (age > 150) throw new Error("Age is unrealistic");
                        log.innerText = "Age is valid: " + age;
                    } catch (err) {
                        log.innerHTML = `<span style="color:#ef4444">Custom Error: ${err.message}</span>`;
                    } finally {
                        log.innerHTML += "<br><small style='opacity:0.7'>(Finally block executed: Input process closed)</small>";
                    }
                };
            }
        }
    };

    // Module Switcher Logic
    function loadModule(moduleId) {
        if (window.slideTimeout) clearTimeout(window.slideTimeout);
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-module') === moduleId) link.classList.add('active');
        });

        const mod = modules[moduleId];
        if (!mod) return;

        moduleTitle.innerText = mod.title;
        moduleDescription.innerText = mod.description;
        moduleContainer.innerHTML = mod.render();
        
        moduleContainer.classList.remove('fade-in');
        void moduleContainer.offsetWidth; // Force reflow
        moduleContainer.classList.add('fade-in');

        if (mod.init) mod.init();
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            loadModule(link.getAttribute('data-module'));
        });
    });

    loadModule('home');
});
