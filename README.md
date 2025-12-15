# Hero Banners – JSON-Driven Hero Banner Components

## Overview
This project renders two hero banners where all content and configuration are drivem from JSON data.
The goal was to keep the content model flexible and realistic for a CMS-driven setup, while keeping the ReactJS /NextJS code simple.

The page includes:
- An image-based hero with a heading, subheading, and four buttons
- A solid-color hero with a heading and two text links

---

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS

---

## How to Run
npm install
npm run dev

Open http://localhost:3000.

---

## JSON Model
Each banner is defined by a JSON object with a `variant` (`image` or `solid`) that controls how it renders.

Buttons and links are modeled using a single `actions` array.
Each action includes a `kind` (`button` or `link`), which keeps the content model simple while allowing different UI treatments.

The terminology avoids React-specific concepts and can be imagined sourced from a CMS.

---

## Rendering Approach
The page fetches the banner data on the server and passes each item into a single `Hero` component.

The component:
- Switches on `variant` for image vs solid backgrounds
- Renders actions based on their `kind`

This keeps the rendering logic straightforward and data-driven.

---

## What I’d Improve With More Time
- Would work with Product to understand more on all variations on actions - if they need onClick handler I would 
   probably create actions as a Client component
- Make Hero component (and image) more responsive for iphone / tablet devices
- Improve accessibility and keyboard states
- Add schema validation for the JSON