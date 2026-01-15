import { useState } from "react";
import { useData } from "./DataContext";

export const ToysPage = () => {
  const { toys, createToy, deleteToy } = useData();
  const [name, setName] = useState<string>("");
  const [material, setMaterial] = useState<string>("");

  return (
    <div className="container py-4">
      <h2 className="mb-3">Ajándékok</h2>

      <div className="mb-3 d-flex gap-2">
        <input
          className="form-control"
          value={name}
          placeholder="Ajándék neve..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control"
          value={material}
          placeholder="Anyaga..."
          onChange={(e) => setMaterial(e.target.value)}
        />
        <button
          className="btn btn-success"
          onClick={() => {
            createToy({ name, material, weight: 1 });
            setName("");
            setMaterial("");
          }}
        >
          Létrehozás
        </button>
      </div>

      <ul className="list-group">
        {toys.map((toy) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={toy.id}
          >
            <span>
              {toy.name} ({toy.material})
            </span>
            <button
              className="btn btn-sm btn-light"
              onClick={() => deleteToy(toy.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
