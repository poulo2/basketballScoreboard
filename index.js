// ----------------!-------------------
// Home
let homeScore = 0
let homeScoreEl = document.getElementById("resultHomeScore")
// let increaseHscore = document.getElementById("Hscore")

function addupH1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    updateHighlight() 
}
function addupH2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    updateHighlight() 
}
function addupH3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    updateHighlight() 
}
// ----------------!-------------------
// Guest

let guestScore = 0
let guestScoreEl = document.getElementById("resultGuestScore")
// let increaseGscore = document.getElementById("Gscore")

function addupG1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    updateHighlight() 
}

function addupG2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    updateHighlight() 
}
function addupG3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    updateHighlight() 
}

// ------------Highlight--------------
function updateHighlight() {
    // Reset highlights first
    homeScoreEl.classList.remove("highlight")
    guestScoreEl.classList.remove("highlight")

    // Compare scores and apply the highlight class
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("highlight")
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add("highlight")
    }
    // If scores are tied, neither gets the highlight class
}
// !---------------Reset Game------------

// NEW: Reset Function
function resetGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    
    // Clear the glowing highlight classes
    homeScoreEl.classList.remove("highlight")
    guestScoreEl.classList.remove("highlight")
}

// !---------------Timer-----------
// ----------------!-------------------
// NEW: Timer State and Elements
let timerInterval = null
let totalSeconds = 12 * 60 // 12 minutes (720 seconds)
let isTimerRunning = false

let timerDisplayEl = document.getElementById("timer-display")
let startPauseBtn = document.getElementById("start-pause-btn")

// NEW: Core Timer Operations
function toggleTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval)
        startPauseBtn.textContent = "START"
        isTimerRunning = false
    } else {
        isTimerRunning = true
        startPauseBtn.textContent = "PAUSE"
        timerInterval = setInterval(updateTimer, 1000)
    }
}

function updateTimer() {
    if (totalSeconds <= 0) {
        clearInterval(timerInterval)
        isTimerRunning = false
        startPauseBtn.textContent = "START"
        alert("Quarter Ended!")
        return
    }
    
    totalSeconds--
    renderTimerTime()
}

function renderTimerTime() {
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60

    let displayMinutes = minutes < 10 ? "0" + minutes : minutes
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds

    timerDisplayEl.textContent = displayMinutes + ":" + displaySeconds
}

// ----------------!-------------------
// NEW: Full Reset System
function resetGame() {
    // 1. Clear Scores
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    
    // 2. Remove Highlight UI
    homeScoreEl.classList.remove("highlight")
    guestScoreEl.classList.remove("highlight")

    // 3. Reset Timer Engine
    clearInterval(timerInterval)
    isTimerRunning = false
    totalSeconds = 12 * 60
    
    // 4. Update UI Elements safely if they exist
    if (startPauseBtn) startPauseBtn.textContent = "START"
    if (timerDisplayEl) renderTimerTime()
}