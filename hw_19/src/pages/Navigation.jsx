import { Routes, Route } from "react-router-dom";

import HomePage from "/src/pages/HomePage/HomePage";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
