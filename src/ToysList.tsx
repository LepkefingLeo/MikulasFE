import { useState } from "react";
import { useData } from "./DataContext";

export const ToysPage = () => {
  const { toys, createToy, deleteToy } = useData();
  const [name, setName] = useState<string>("");

  return (
    <>
      <h2>Ajándékok</h2>

      <input
        value={name}
        placeholder="Ajándék neve"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          createToy({ name, material: "other", weight: 1 });
          setName("");
        }}
      >
        Létrehozás
      </button>

      <ul>
        {toys.map((toy) => (
          <li key={toy.id}>
            {toy.name} ({toy.material})
            <button onClick={() => deleteToy(toy.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};
