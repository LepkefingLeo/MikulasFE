import type { Child, Toy } from "./schema";

const BASE_URL = "http://localhost:3000";

export const api = {
  getChildren: async (): Promise<Child[]> => {
    const res = await fetch(`${BASE_URL}/children`);
    return res.json();
  },

  getToys: async (): Promise<Toy[]> => {
    const res = await fetch(`${BASE_URL}/toys`);
    return res.json();
  },

  createToy: async (toy: Partial<Toy>): Promise<void> => {
    await fetch(`${BASE_URL}/toys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    });
  },

  deleteToy: async (id: number): Promise<void> => {
    await fetch(`${BASE_URL}/toys/${id}`, { method: "DELETE" });
  },

  assignToy: async (childId: number, toyId: number): Promise<void> => {
    await fetch(`${BASE_URL}/children/${childId}/toys/${toyId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ childId, toyId }),
    });
  },
};
