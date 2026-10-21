To-Do List App

A modern, sleek, and fully functional To-Do List application built with React and Vite. It demonstrates core React concepts including state management (useState), form handling, event listeners, array manipulation (map and filter), and dynamic rendering.

Author: Siddhant Tambe

Project Structure

Based on standard React-Vite project architecture, the directory structure is organized as follows:

To-Do-List/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── .gitignore


Features

State Management (useState): Manages the dynamic list of tasks efficiently using React's state hook.

Task Addition: Allows users to add new items seamlessly via form submission with automatic input clearing.

Task Deletion: Built-in filter logic to remove individual tasks instantly using their index.

Modern UI & Micro-Interactions: Styled with a sleek glassmorphism background, gradients, custom scrollbars, and smooth hover/focus transitions (App.css, index.css).

Getting Started

To run this project locally, follow these steps:

1. Clone or Open Project

Navigate to your project directory in your terminal:

cd "To-Do-List"


2. Install Dependencies

Install all required node packages listed in package.json:

npm install


3. Run Development Server

Start the Vite local development server:

npm run dev


Open your browser and navigate to the local URL provided in the terminal (usually http://localhost:5173).