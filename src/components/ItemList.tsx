import type { Item } from "../types/Item";

interface Props {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

export default function ItemList({ items, onEdit, onDelete }: Props) {
  if (items.length === 0)
    return <p className="text-center text-gray-500">No items yet.</p>;

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-4 bg-white shadow rounded-md"
        >
          <div>
            <p className="font-bold">{item.title}</p>
            <p className="text-gray-600">{item.subtitle}</p>
            <small className="text-gray-400">{item.createdAt}</small>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(item)}
              className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
