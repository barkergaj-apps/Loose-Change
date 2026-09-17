/* ============================================
   LOOSE CHANGE — CORE LOGIC
============================================ */

const GOOGLE_PLACES_API_KEY = "AIzaSyC5KT6mE8TVO-eDgcSbCVtzsDbBu6d2WpU";

/* ============================================
   ELEMENTS
============================================ */

const dial = document.getElementById("dial");
const ticket = document.getElementById("ticket");
const ticketPlace = document.querySelector(".ticket-place");
const ticketTask = document.querySelector(".ticket-task");

const bonus = document.getElementById("bonus");
const bonusTask = document.querySelector(".bonus-task");
const bonusTimer = document.querySelector(".bonus-timer");

const streakBar = document.getElementById("streak-bar");
const journeyPanel = document.getElementById("journey-panel");

/* ============================================
   GAME STATE
============================================ */

let streak = 0;
let journeys = {
  explorer: false,
  wanderer: false,
  fearless: false,
  goldUnlocked: false,
  mysteryUnlocked: false
};

/* ============================================
   DARE LISTS
============================================ */

const dares = {
  low: [
    "Take a photo of the place.",
    "Walk around the block once.",
    "Say hello to someone nearby.",
    "Buy a small snack."
  ],
  mid: [
    "Ask someone for a recommendation.",
    "Record a 10‑second video describing the place.",
    "Find something interesting and photograph it.",
    "Talk to a stranger for 30 seconds."
  ],
  high: [
    "Enter the place and interact with staff.",
    "Buy
