# Taste-Grabber

> A browser-based recipe analysis tool that identifies your flavor preferences by extracting and comparing ingredients across multiple recipes.
***STILL A WORK IN PROGRESS***

## Table of Contents
- [Project Description](#project-description)
- [Directory Structure](#directory-structure)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Features](#features)
- [Lessons Learned](#lessons-learned)
- [Author](#author)

## Project Description
**Taste-Grabber** is a lightweight web application that analyzes multiple recipes to determine common ingredient patterns and likely flavor preferences.  
Users paste any number of recipes into the interface, and the app extracts key ingredients using a custom JavaScript parser.  

This project was an early exploration of:
- Ingredient parsing
- Pattern detection
- Client-side data processing
- Building functional interfaces with plain HTML/CSS/JS

It later informed work on more advanced recipe recommendation tools.


## Directory Structure
.
├── js/                # JavaScript logic, including ingredient parser
├── index.html         # Main interface for input and results
├── style.css          # Layout and styling for the application
├── .gitignore         # Ignored files configuration
├── .hintrc            # HTMLHint configuration
└── README.md          # Project documentation

## Tech Stack
- **Languages:** HTML5, CSS3, JavaScript  
- **Tools:**  
  - HTMLHint (`.hintrc`) for code quality  
  - Browser-based JavaScript (no backend required)  


## How It Works
1. The user pastes **multiple full recipe texts** into the input area.  
2. The JavaScript parser (`parser.js`) scans each recipe and extracts:  
   - Ingredient names  
   - Key terms (spices, herbs, proteins, bases, etc.)  
3. The app aggregates overlaps between recipes.  
4. Results show which ingredients appear most often — revealing flavor tendencies.  

This helps users understand things like:
- “I use paprika and onion powder in almost everything.”  
- “Most of my recipes lean toward Italian-inspired flavors.”  


## Usage
1. Open `index.html` in any browser.  
2. Paste two or more recipes into the input field.  
3. Click **Analyze** (or equivalent button).  
4. View the list of the most common ingredients, weighted by frequency.  

No installation or server setup required.


## Features
- Pure client-side application  
- Ingredient extraction using a custom JavaScript parser  
- Frequency-based ingredient analysis  
- Simple and clean interface for quick experimentation  
- Runs on any device with a modern browser  

## Lessons Learned
- Improved understanding of text parsing and pattern extraction using plain JavaScript.  
- Gained experience building UI structures without frameworks.  
- Learned to normalize inconsistent recipe formatting for reliable ingredient detection.  

## Author
**Andrew Henderson**  
- GitHub: [Anhender1993](https://github.com/Anhender1993)  
- Portfolio: [Anhender1993](https://github.com/Anhender1993) 
- LinkedIn: [linkedin.com/in/andrew-v-henderson](https://linkedin.com/in/andrew-v-henderson)
