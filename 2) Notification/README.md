React Notification App

A simple, modern React application built with Vite that demonstrates conditional rendering, state management using useState, and component-based architecture with a custom modal/pop-up.

Author: Siddhant Tambe

Project Structure

Based on the project files, the directory structure is organized as follows:

2) Notification/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── component/
│   │   ├── Popup.css
│   │   └── Popup.jsx
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

State Management (useState): Controls the visibility state of the notification pop-up from the parent component (App.jsx).

Component Reusability: Separates the modal UI into a dedicated component (Popup.jsx).

Props Drilling / Passing: Passes message content and state modifier functions dynamically from parent to child.

Custom Styling & Animations: Clean layout design with smooth backdrop fade-ins and card scale animations (App.css, Popup.css).

Getting Started

To run this project locally, follow these steps:

1. Clone or Open Project

Navigate to the project directory in your terminal:

cd "2) Notification"


2. Install Dependencies

Install all required node packages listed in package.json:

npm install


3. Run Development Server

Start the Vite local development server:

npm run dev


Open your browser and navigate to the local URL provided in the terminal (usually http://localhost:5173).