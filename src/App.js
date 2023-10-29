import Home from "./pages/home/Home"
import Login from "./pages/login/Login.js"
import Register from "./pages/register/Register"
import Profile from "../src/pages/profile/Profile"
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" Component={Home}>
      </Route>
      <Route path="/login" Component={Login}>
      </Route>
      <Route path="/register" Component={Register}>
      </Route>
      <Route path="/profile" Component={Profile}>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
