import { useState } from "react";
import { useItems } from "./hooks/useItems";
import Modal from "./components/Modal";
import ItemList from "./components/ItemList";
import type { Item } from "./types/Item";

export default function App() {
  const { items, addItem, updateItem, deleteItem } = useItems();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleCreate = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSubmit = (title: string, subtitle: string) => {
    if (editingItem) {
      updateItem(editingItem.id, title, subtitle);
    } else {
      addItem(title, subtitle);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">
          🧩 SavvyTech List
        </h1>

        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700"
        >
          Create Item
        </button>

        <ItemList items={items} onEdit={handleEdit} onDelete={deleteItem} />

        {isModalOpen && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleSubmit}
            initialData={
              editingItem
                ? { title: editingItem.title, subtitle: editingItem.subtitle }
                : undefined
            }
          />
        )}
      </div>
    </div>
  );
}
