import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChildrenPage } from "./ChildrenList";
import { ToysPage } from "./ToysList";
import { AssignToyPage } from "./AssignToyPage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Gyerekek</Link> |{" "}
        <Link to="/toys">Ajándékok</Link> |{" "}
        <Link to="/assign">Kiosztás</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ChildrenPage />} />
        <Route path="/toys" element={<ToysPage />} />
        <Route path="/assign" element={<AssignToyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
