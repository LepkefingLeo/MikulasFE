import { useState } from "react";
import { useData } from "./DataContext";

export const ToysPage = () => {
  const { toys, createToy, deleteToy } = useData();
  const [name, setName] = useState<string>("");
  const [material, setMaterial] = useState<string>("");

  return (
    <>
      <h2>Ajándékok</h2>

      <input
        value={name}
        placeholder="Ajándék neve..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={material}
        placeholder="Anyaga..."
        onChange={(e) => setMaterial(e.target.value)}
      />
      <button
        onClick={() => {
          createToy({ name, material, weight: 1 });
          setName("");
          setMaterial("");
        }}
      >
        Létrehozás
      </button>

      <ul>
        {toys.map((toy) => (
          <li className="toys" key={toy.id}>
            {toy.name} ({toy.material})
            <button onClick={() => deleteToy(toy.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};
