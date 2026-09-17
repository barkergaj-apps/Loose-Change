# Loose Change — Front-End Build

This project is a lightweight front-end web app that uses the Google Places API to generate random nearby locations and assign dares based on streak levels.

## Files
- index.html — main UI structure
- style.css — full styling for dial, tickets, bonus round, streak bar, journeys
- app.js — game logic + Google Places API integration

## API Key
A restricted Google Places API key has been provided.  
It is already inserted into `app.js` under:

const GOOGLE_PLACES_API_KEY = "YOUR_RESTRICTED_KEY_HERE";

## Requirements
- Enable Places API in Google Cloud (already done)
- No backend required
- No build tools required

## Deployment
This project can be deployed directly to Netlify using drag-and-drop or via a deploy token.

## Tasks for Fiverr Developer
1. Confirm Google Places API calls work correctly.
2. Ensure CORS and referrer restrictions are respected.
3. Deploy the project to Netlify.
4. Provide the final Netlify URL.
