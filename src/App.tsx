import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./pages/Users";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <Routes>
            <Route path="/users" element={<Users />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
};
