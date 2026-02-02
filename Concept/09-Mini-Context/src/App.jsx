import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./Context/UserContextProvider"

function App() {
  return (
    <UserContextProvider>
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl mb-8 underline">Context API Practice</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
