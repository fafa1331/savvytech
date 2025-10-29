import { useState } from "react";
import type { Item } from "../types/Item";

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (title: string, subtitle: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      title,
      subtitle,
      createdAt: new Date().toLocaleString(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const updateItem = (id: string, title: string, subtitle: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title, subtitle } : item))
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return { items, addItem, updateItem, deleteItem };
};
