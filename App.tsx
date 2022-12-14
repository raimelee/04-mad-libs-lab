import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import HomeRoute from "./components/HomeRoute";
import ListStoriesRoute from "./components/ListStoriesRoute";
import ViewStoryRoute from "./components/ViewStoryRoute";
import CreateStoryRoute from "./components/CreateStoryRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* 1st: path 2nd: component rendered when that path is executed */}
          <Route path="/" element={<HomeRoute />} />
          <Route path="/stories" element={<ListStoriesRoute />} />
          <Route path="/stories/:id" element={<ViewStoryRoute />} />
          <Route path="/create-story" element={<CreateStoryRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
