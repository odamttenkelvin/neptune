import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationPage from './journey/components/landingpage';
import LoginPage from './journey/pages/login';
import ForgotUsernameEmail from './journey/pages/login-assist/forgot-username-email';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-username" element={<ForgotUsernameEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
