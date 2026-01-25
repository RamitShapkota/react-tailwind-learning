# 🗺️ React Router Learning Journey

Today I transitioned my React application from a standard single-page view to a **Multi-Page Experience** using `react-router-dom`.

## 🚀 What I Learned Today

### 1. The Power of `<Link>` vs `<a>`
- **Standard `<a>` tag:** Triggers a full browser refresh, which wipes out all React state (data).
- **React Router `<Link>`:** Changes the URL without refreshing the page. This keeps our application data alive and makes transitions instant.

### 2. Layout & Outlet Pattern
I learned how to create a persistent skeleton for the app.
- **Layout.jsx:** A wrapper component containing the `Header` and `Footer`.
- **`<Outlet />`:** A placeholder from React Router where the specific page content (Home, About, Contact) is "swapped" in.

### 3. Modern Routing Setup
I used the modern `createBrowserRouter` approach in `main.jsx` to map URL paths to specific components.

---

