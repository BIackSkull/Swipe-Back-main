const IMAGE_LEFT_ARROW = [
  "data:image/svg+xml;base64,",
  "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/",
  "Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAu",
  "MCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAg",
  "QnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXll",
  "cl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHht",
  "bG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4",
  "PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ3My42NTQgNDcz",
  "LjY1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcz",
  "LjY1NCA0NzMuNjU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Y2ly",
  "Y2xlIHN0eWxlPSJmaWxsOiM0QUJDOTY7IiBjeD0iMjM2LjgyNyIgY3k9",
  "IjIzNi44MjciIHI9IjIzNi44MjciLz4NCjxwYXRoIHN0eWxlPSJmaWxs",
  "OiNGRkZGRkY7IiBkPSJNMzM4LjQ2NSwyMDcuOTY5Yy00My40ODcsMC04",
  "Ni45NzUsMC0xMzAuNDU5LDBjMTEuMDgtMTEuMDgsMjIuMTYxLTIyLjE2",
  "MSwzMy4yNDEtMzMuMjQ1DQoJYzI1LjU2LTI1LjU2LTE0LjI1OS02NS4w",
  "ODQtMzkuODgzLTM5LjQ1NmMtMjcuMDExLDI3LjAxMS01NC4wMTgsNTQu",
  "MDIyLTgxLjAyOSw4MS4wMzNjLTEwLjg0MSwxMC44NDEtMTAuNTQ5LDI4",
  "LjkwNywwLjIxMywzOS42NjkNCgljMjcuMDExLDI3LjAwNyw1NC4wMTgs",
  "NTQuMDE4LDgxLjAyOSw4MS4wMjVjMjUuNTYsMjUuNTYsNjUuMDg0LTE0",
  "LjI1OSwzOS40NTYtMzkuODgzYy0xMS4wMTMtMTEuMDEzLTIyLjAyNi0y",
  "Mi4wMjYtMzMuMDM5LTMzLjAzNQ0KCWM0My4zNTcsMCw4Ni43MTMsMCwx",
  "MzAuMDY2LDBDMzc0LjI4MywyNjQuMDc3LDM3NC42MDQsMjA3Ljk2OSwz",
  "MzguNDY1LDIwNy45Njl6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0K",
  "PGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+",
  "DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwv",
  "Zz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0K",
  "PC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
].join("");

// NEW: Define IMAGE_RIGHT_ARROW with the provided Base64 data
const IMAGE_RIGHT_ARROW = [
  "data:image/svg+xml;base64,",
  "PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRw",
  "Oi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6",
  "Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2",
  "aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxl",
  "LWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6",
  "c3BhY2U9InByZXNlcnZlIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSwwLDAs",
  "MSwwLDApIj4KPHBhdGggc3R5bGU9ImZpbGw6IHJnYigwLCAxNTAsIDEz",
  "Nik7IC0tZGFya3JlYWRlci1pbmxpbmUtZmlsbDogdmFyKC0tZGFya3Jl",
  "YWRlci10ZXh0LTAwOTY4OCwgIzYzZmZmMCk7IiBkPSJNMjQ1LjMzMyww",
  "QzEwOS44MzksMCwwLDEwOS44MzksMCwyNDUuMzMzczEwOS44MzksMjQ1",
  "LjMzMywyNDUuMzMzLDI0NS4zMzMKCXMyNDUuMzMzLTEwOS44MzksMjQ1",
  "LjMzMy0yNDUuMzMzQzQ5MC41MTQsMTA5LjkwMywzODAuNzY0LDAuMTUz",
  "LDI0NS4zMzMsMHoiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbD0i",
  "Ij48L3BhdGg+CjxwYXRoIHN0eWxlPSJmaWxsOiByZ2IoMjUwLCAyNTAs",
  "IDI1MCk7IC0tZGFya3JlYWRlci1pbmxpbmUtZmlsbDogdmFyKC0tZGFy",
  "a3JlYWRlci10ZXh0LWZhZmFmYSwgI2U1ZTNkZik7IiBkPSJNMzczLjMz",
  "MywxOTJIMjQ5Ljc0OWwxOS4yLTE5LjJjMTguODkzLTE4Ljg4MSwxOC45",
  "MDItNDkuNTAzLDAuMDIxLTY4LjM5NQoJYy0wLjAwNy0wLjAwNy0wLjAx",
  "NC0wLjAxNC0wLjAyMS0wLjAyMWMtMTkuMTc5LTE4LjI0Ny00OS4zMTct",
  "MTguMTgxLTY4LjQxNiwwLjE0OUw4Mi4yMTksMjIyLjY5OQoJYy0xMi40",
  "OTIsMTIuNDk2LTEyLjQ5MiwzMi43NTIsMCw0NS4yNDhsMTE4LjMxNSwx",
  "MTguMTg3YzE3LjU2NSwyMC4xMzcsNDguMTMsMjIuMjIyLDY4LjI2Nyw0",
  "LjY1NgoJYzIwLjEzNy0xNy41NjUsMjIuMjIyLTQ4LjEzLDQuNjU2LTY4",
  "LjI2N2MtMS40NDUtMS42NTYtMy0zLjIxMi00LjY1Ni00LjY1NmwtMTku",
  "Mi0xOS4yaDEyMy43MzMKCWMyOS40NTUsMCw1My4zMzMtMjMuODc4LDUz",
  "LjMzMy01My4zMzNTNDAyLjc4OSwxOTIsMzczLjMzMywxOTJ6IiBkYXRh",
  "LWRhcmtyZWFkZXItaW5saW5lLWZpbGw9IiI+PC9wYXRoPgo8Zz4KPC9n",
  "Pgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4K",
  "PC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8",
  "Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4=",
].join("");

// --- Constants ---
const ARROW_MOVE_LIMIT = 150;
const ARROW_TRIGGER_THRESHOLD = 130;
const POSITION_SCALE = 6;
const FADE_DELAY = 500;

// --- Elements ---
const container = document.createElement("div");
container.className = "browser-extension-swipe-back-container";
Object.assign(container.style, {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  pointerEvents: "none",
  zIndex: "9999"
});

function createArrow(classNames) {
  const img = document.createElement("img");
  // Determine which image to use based on the classNames
  if (classNames.includes("browser-extension-swipe-back-arrow-left")) {
    img.src = IMAGE_LEFT_ARROW;
  } else if (classNames.includes("browser-extension-swipe-back-arrow-right")) {
    img.src = IMAGE_RIGHT_ARROW; // Use the new right arrow image
  }
  img.className = classNames;
  return img;
}

const leftArrow = createArrow("browser-extension-swipe-back-arrow browser-extension-swipe-back-arrow-left");
const rightArrow = createArrow("browser-extension-swipe-back-arrow browser-extension-swipe-back-arrow-right");

container.appendChild(leftArrow);
container.appendChild(rightArrow);

// --- State ---
let position = 0;
let freezeUntil = 0;
let resetTimeoutID = 0;
let transitionTimeoutID = 0;

// --- Utilities ---
function debounce(fn, delay) {
  let timer = 0;
  return function () {
    const now = Date.now();
    if (now < timer) return;
    timer = now + delay;
    fn();
  };
}

const goBack = debounce(() => window.history.back(), 120);
const goForward = debounce(() => window.history.forward(), 120);

function resetArrows() {
  position = 0;
  leftArrow.classList.remove("visible");
  rightArrow.classList.remove("visible");
}

function showArrow(arrow) {
  arrow.classList.add("visible");
  clearTimeout(transitionTimeoutID);
  transitionTimeoutID = setTimeout(() => {
    arrow.classList.remove("visible");
  }, FADE_DELAY);
}

// --- Event Handlers ---
function handleWheel(event) {
  if (event.deltaY !== 0) {
    freezeUntil = Date.now() + 50;
    return;
  }

  if (Date.now() < freezeUntil) return;

  position -= event.deltaX;

  // Clamp
  position = Math.max(-ARROW_MOVE_LIMIT * POSITION_SCALE, Math.min(position, ARROW_MOVE_LIMIT * POSITION_SCALE));

  if (position < 0) {
    showArrow(rightArrow);
  } else if (position > 0) {
    showArrow(leftArrow);
  }

  clearTimeout(resetTimeoutID);
  resetTimeoutID = setTimeout(resetArrows, FADE_DELAY);

  // Trigger navigation
  if (position >= ARROW_TRIGGER_THRESHOLD * POSITION_SCALE) {
    freezeUntil = Date.now() + 200;
    goBack();
    resetArrows();
  } else if (position <= -ARROW_TRIGGER_THRESHOLD * POSITION_SCALE) {
    freezeUntil = Date.now() + 200;
    goForward();
    resetArrows();
  }
}

let lastScrollX = 0;
function handleScroll(event) {
  const scrollX = event.target.scrollLeft ?? window.scrollX;
  if (scrollX !== lastScrollX) {
    position = 0;
    freezeUntil = Date.now() + 1000;
  }
  lastScrollX = scrollX;
}

// --- Init ---
// The injectStyle function is not used in the provided context,
// as the CSS is loaded via manifest.json. Keeping it here for completeness
// if it were to be used for dynamic style injection.
function injectStyle(css) {
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
}

function initSwipeNavigation() {
  // This check prevents the extension from running on Mac,
  // as Mac has native swipe navigation.
  if (/Mac/.test(navigator.platform)) return;

  document.body.appendChild(container);
  document.addEventListener("wheel", handleWheel, { passive: true });
  document.addEventListener("scroll", handleScroll, { capture: true, passive: true });

}

initSwipeNavigation();
