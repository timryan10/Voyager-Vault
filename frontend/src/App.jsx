import Home from "./components/home";
import SignUp from "./forms/SignUpForm";
import LoginForm from "./forms/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Home/>
          } />
          <Route path="/signup" element={
            <SignUp/>
          } />
          <Route path="/login" element={
            <LoginForm />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
