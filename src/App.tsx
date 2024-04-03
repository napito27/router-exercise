import React, { Suspense, lazy } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/not-found"));
const Profile = lazy(() => import("./pages/profile"));
const User = lazy(() => import("./pages/user"));
// import { About, Contact, Home, NotFound, Profile, User } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Router>
    </>
  );
}

export default App;
