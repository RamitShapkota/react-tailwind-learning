# React Background Changer

A sleek, responsive background color switcher built with **React** and **Tailwind CSS**. This project demonstrates dynamic UI updates through state management and component communication.

## 🚀 Features
- **Dynamic Styling:** Instant background updates without page reloads.
- **Reusable Components:** Clean separation of concerns with a modular Button component.
- **Modern UI:** Styled with Tailwind CSS for a mobile-responsive, "floating" navigation feel.
- **Fluid Transitions:** Smooth color fading using Tailwind's `duration-200` utility.

## 🧠 What I Learned
Through this project, I strengthened my understanding of:

* **Lifting State Up:** Learned how to move state to a common parent component (`App.jsx`) so that sibling components can share and modify data.
* **Props & Callback Functions:** Mastered passing data down to child components and passing actions (functions) back up to the parent via `onClick` handlers.
* **Inline Style Objects:** Using the `style={{ backgroundColor: color }}` syntax to bind JavaScript variables directly to CSS properties.
* **Tailwind Layout Utilities:** * `inset-x-0`: For horizontal positioning and stretching elements.
    * `px-7` / `py-2`: Implementing precise spacing using the Tailwind scale.
    * `fixed` & `flex`: Creating a floating, centered navigation bar.

## 🛠️ Tech Stack
- **React** (Hooks: `useState`)
- **Tailwind CSS**
- **Vite** (Build Tool)
