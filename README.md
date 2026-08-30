# Basketball Scoreboard

A simple browser-based basketball scoreboard with a live game clock. Track HOME vs GUEST scores with one-tap point buttons, a 12-minute countdown quarter timer, and automatic leader highlighting.

## Features

- **Score tracking** — separate HOME and GUEST columns, each with +1, +2, and +3 buttons
- **Leader highlight** — the team currently in the lead gets a glowing highlight on their score
- **Quarter timer** — a 12:00 countdown clock with START/PAUSE control; alerts when the quarter ends
- **Reset game** — one button resets both scores and the timer back to their starting state

## Getting Started

Install dependencies and start the dev server:

```
npm install
npm start
```

This runs the app with [Vite](https://vitejs.dev/) and opens it at a local URL (typically `http://localhost:5173`). Vite serves `index.html` directly, so no build step is needed while developing.

### Other scripts

```
npm run build     # build a production bundle to dist/
npm run preview   # preview the production build locally
```

## Usage

1. Start the dev server and open the app in your browser.
2. Use the **+1 / +2 / +3** buttons under HOME or GUEST to add points as they're scored.
3. The leading team's score glows automatically; it's cleared again on a tie.
4. Press **START** to begin the 12-minute quarter countdown; press it again (now **PAUSE**) to stop the clock.
5. Press **RESET GAME** at any time to zero out both scores and reset the timer to 12:00.

## Project Structure

- [index.html](index.html) — page markup and layout
- [index.css](index.css) — styling for the scoreboard and timer
- [index.js](index.js) — score, highlight, timer, and reset logic
- [vite.config.js](vite.config.js) — Vite configuration
