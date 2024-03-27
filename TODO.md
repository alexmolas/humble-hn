Hide Points on Hacker News
---

## Overview
This document provides a step-by-step guide to creating a Chrome extension designed to hide points displayed on Hacker News submissions, user points, and points from user comments.

## Step 1: Set Up Your Development Environment
1. Create a Directory for Your Project: Establish a new folder on your computer dedicated to storing all files related to your extension.
2. Install Necessary Software: Make sure you have a text editor (e.g., Visual Studio Code, Sublime Text, or Atom) and a web browser (preferably Chrome) installed on your computer.

## Step 2: Initialize Your Chrome Extension
1. Create a `manifest.json` File: This file serves as the heart of your Chrome extension, containing metadata about the extension. It should include your extension's name, version, description, permissions, icons, background scripts, and content scripts.
2. Create the Background Script: Generate a file named `background.js` in your project directory. This file will manage or support background tasks for your extension but will start as an empty file.
3. Create the Content Script: Develop a file named `contentScript.js`. This script will be responsible for the logic that hides points on Hacker News pages by manipulating the DOM.

## Step 3: Develop the Content Script
1. Identify Elements to Hide: Utilize your browser's developer tools to inspect the HN website. Your goal is to find the CSS selectors for the points on submissions, user points, and comment points.
2. Write the Hiding Logic: In `contentScript.js`, craft JavaScript code that selects the identified elements and alters their style to `display: none;`. This will effectively hide the points from view on the page.

## Step 4: Test Your Extension
1. Load Your Extension into Chrome: Open the Chrome browser, navigate to chrome://extensions/, enable "Developer mode", and use the "Load unpacked" option to select your project directory. This will install your extension in Chrome for testing.
2. Test on Hacker News: Visit the Hacker News website to ensure that your extension successfully hides points on submissions, user points, and comment points. Adjust your content script as necessary based on your observations.

## Step 5: Package and Publish Your Extension
1. Package Your Extension: Compress your extension's directory into a ZIP file. This file will contain all the necessary files for your extension, including the `manifest.json`, `background.js`, and `contentScript.js`.
2. Publish to the Chrome Web Store: Follow the Chrome Web Store's guidelines to submit your packaged extension for review. Once approved, your extension will be available for anyone to download and use.

By following these steps, you will create a Chrome extension capable of hiding points on Hacker News, enhancing the browsing experience for users who prefer not to see point counts.

