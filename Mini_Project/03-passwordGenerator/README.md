# 🔐 Modern Password Generator

A sleek, high-performance Password Generator built with **React**, **Tailwind CSS**, and modern Web APIs. This project focuses on secure password creation with real-time strength analysis and a seamless user experience.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

[![Live Demo](https://img.shields.io/badge/demo-live_preview-blue?style=for-the-badge&logo=vercel)](https://react-tailwind-learning-112i.vercel.app/)

---

## ✨ Features

* **Dynamic Complexity:** Toggle numbers and special characters on the fly.
* **Custom Range:** Adjustable length from 8 to 100 characters.
* **Live Strength Meter:** Real-time security feedback (Weak, Medium, Strong) using conditional styling.
* **Clipboard Integration:** One-click copy with visual focus feedback using `useRef`.
* **Optimized Performance:** Prevented unnecessary re-renders using advanced React Hooks.

---

## 🎓 What I Learned

Building this project was a deep dive into modern React development. Key takeaways include:

* **State Synchronization:** How to use `useEffect` to trigger side effects (like generating a password) only when specific dependencies change.
* **Memoization with `useCallback`:** Understanding how to cache functions in memory to optimize performance and prevent infinite render loops.
* **DOM Interaction with `useRef`:** Moving beyond state to directly interact with DOM elements (e.g., selecting text in an input field for the clipboard).
* **Conditional Styling in Tailwind:** Using JavaScript template literals and ternary operators to change UI colors and layouts based on application state.
* **Web API Integration:** Using the modern `window.navigator.clipboard` API to bridge the gap between a web app and the user's Operating System.

---

## 🧠 Tech Stack

| Tool | Usage |
| :--- | :--- |
| **React Hooks** | `useState`, `useEffect`, `useCallback`, `useRef` |
| **Styling** | Tailwind CSS (Utility-first CSS) |
| **Logic** | JavaScript ES6+ (Template literals, Ternary operators) |
| **Environment** | Vite (Build tool) |

---


*Developed with ❤️ as a journey through the React ecosystem.*