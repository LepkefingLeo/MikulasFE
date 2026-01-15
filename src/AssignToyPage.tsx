import { useState } from "react";
import { useData } from "./DataContext";

export const AssignToyPage = () => {
  const { childrenList, toys, assignToy, removeToyFromChild } = useData();
  const [childId, setChildId] = useState<number | null>(null);
  const [toyId, setToyId] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageColor, setMessageColor] = useState<string>("green");

  const handleAssign = () => {
    assignToy(childId!, toyId!);
    setMessage("Ajándék sikeresen hozzárendelve!");
    setMessageColor("green");
  };

  const handleRemove = () => {
    removeToyFromChild(childId!, toyId!);
    setMessage("Ajándék törölve a gyerektől!");
    setMessageColor("red");
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Ajándékok kiosztása</h2>

      <div className="mb-2">
        <select className="form-select mb-2" onChange={(e) => setChildId(Number(e.target.value))}>
          <option value="">Gyerek</option>
          {childrenList.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select className="form-select mb-2" onChange={(e) => setToyId(Number(e.target.value))}>
          <option value="">Ajándék</option>
          {toys.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="btn btn-success me-2"
        disabled={!childId || !toyId}
        onClick={handleAssign}
      >
        Hozzárendelés
      </button>

      <button
        className="btn btn-danger"
        disabled={!childId || !toyId}
        onClick={handleRemove}
      >
        Törlés
      </button>

      {message && (
        <div style={{ marginTop: "12px", color: messageColor }}>{message}</div>
      )}
    </div>
  );
};
