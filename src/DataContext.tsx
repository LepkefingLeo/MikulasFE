import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import { api } from "./ApiContext";
import type { Child, Toy } from "../src/schema";

interface DataContextType {
  childrenList: Child[];
  toys: Toy[];
  createToy: (toy: Partial<Toy>) => Promise<void>;
  deleteToy: (id: number) => Promise<void>;
  assignToy: (childId: number, toyId: number) => Promise<void>;
  removeToyFromChild: (childId: number, toyId: number) => Promise<void>; // hozzáadva
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [childrenList, setChildrenList] = useState<Child[]>([]);
  const [toys, setToys] = useState<Toy[]>([]);

  const loadData = async () => {
    setChildrenList(await api.getChildren());
    setToys(await api.getToys());
  };

  useEffect(() => {
    loadData();
  }, []);

  const createToy = async (toy: Partial<Toy>) => {
    await api.createToy(toy);
    loadData();
  };

  const deleteToy = async (id: number) => {
    await api.deleteToy(id);
    loadData();
  };

  const assignToy = async (childId: number, toyId: number) => {
    await api.assignToy(childId, toyId);
    loadData();
  };

  const removeToyFromChild = async (childId: number, toyId: number) => {
    await api.removeToyFromChild(childId, toyId);
    loadData();
  };

  return (
    <DataContext.Provider
      value={{ childrenList, toys, createToy, deleteToy, assignToy, removeToyFromChild }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
};
