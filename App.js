import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./splash";
import Onboarding1 from "./onboarding1";
import Onboarding2 from "./onboarding2";
import Onboarding3 from "./onboarding3";
import Login from "./login";
import Signup from "./signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding1" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/onboarding3" element={<Onboarding3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
