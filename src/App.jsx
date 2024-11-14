import Router from "./Router";

function App() {
  const isAuthenticated = !!localStorage.getItem("access-token");

  return <Router isAuthenticated={isAuthenticated} />;
}

export default App;
