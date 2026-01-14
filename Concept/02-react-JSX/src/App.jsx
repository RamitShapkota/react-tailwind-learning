import React from "react";

// 1. Helper Component (JSX version)
const Apps = () => {
  return <h1>Hello, this is how we write jsx</h1>;
};

// 2. Helper Component (Behind the scenes version)
const BehindTheScenes = () => {
  return React.createElement("h1", null, "this is how jsx work behind the seen");
};

// 3. The Main Component (The one that gets displayed)
export const App = () => {
  return (
    <>
      <Apps />
      <BehindTheScenes />
    </>
  );
};
