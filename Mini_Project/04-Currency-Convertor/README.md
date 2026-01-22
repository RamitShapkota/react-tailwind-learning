# 💱 Real-Time Currency Converter

A professional, dynamic Currency Converter built with **React**, **Tailwind CSS**, and **Custom Hooks**. This project focuses on handling external API data, managing complex state dependencies, and creating a highly reusable component architecture.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

* **Live Exchange Rates:** Integrates with a public Currency API to fetch real-time market data for over 100+ currencies.
* **Custom Data Hook:** Features a custom `useCurrencyInfo` hook to handle asynchronous API calls and data mapping.
* **Instant Currency Swap:** A seamless "Swap" feature that exchanges "From" and "To" values and labels instantly with state synchronization.
* **Dynamic Component Reusability:** Uses a modular `InputBox` component designed to handle both input values and currency selection.
* **Modern UI/UX:** A clean, glassmorphism-inspired interface with responsive design built using Tailwind CSS.

---

## 🎓 What I Learned

This project served as a comprehensive exploration of data-driven React development. Key takeaways include:

* **Custom Hook Architecture:** Learning how to encapsulate complex logic (like fetching and formatting API data) into reusable custom hooks to keep components clean.
* **State Synchronization:** Managing how changing one input (e.g., the "From" currency) triggers an automatic update in the converted result.
* **The `useId` Hook:** Implementing the `useId` hook to generate unique IDs for accessibility in form elements and labels.
* **API Data Processing:** Techniques for transforming complex JSON objects from APIs into usable arrays for dropdown menus and calculations.
* **Component Modularity:** Architecting a project where individual UI elements (like the `InputBox`) are decoupled from the main logic for maximum reusability.

---

## 🧠 Tech Stack

| Tool | Usage |
| :--- | :--- |
| **React Hooks** | `useState`, `useEffect`, `useId`, Custom Hooks |
| **Styling** | Tailwind CSS (Flexbox, Backdrop Blur, Custom Transitions) |
| **API Integration** | Fetch API / Currency API |
| **Bundler** | Vite (Ultra-fast development environment) |

---
