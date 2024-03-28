import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { About, Contact, Home, NotFound, Profile, User } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/profile"
            element={<Navigate to="/about" />}
          />
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route
            path="/user/:id"
            element={<User />}
          />
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
