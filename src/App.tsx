import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChildrenPage } from "./ChildrenList";
import { ToysPage } from "./ToysList";
import { AssignToyPage } from "./AssignToyPage.tsx";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="text-center py-3" style={{backgroundColor: "#c62828"}}>
        <Link to="/" className="mx-2" style={{ color: "gold", textDecoration: "none", fontSize: 20 }}>Gyerekek</Link> {" "}
        <Link to="/toys" className="mx-2" style={{ color: "gold", textDecoration: "none", fontSize: 20 }}>Ajándékok</Link> {" "}
        <Link to="/assign" className="mx-2" style={{ color: "gold", textDecoration: "none", fontSize: 20 }}>Kiosztás</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ChildrenPage />} />
        <Route path="/toys" element={<ToysPage />} />
        <Route path="/assign" element={<AssignToyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
