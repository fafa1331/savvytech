import  { useState, useEffect } from "react";

interface Props {
  onClose: () => void;
  onSubmit: (title: string, subtitle: string) => void;
  initialData?: { title: string; subtitle: string };
}

export default function Modal({ onClose, onSubmit, initialData }: Props) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [subtitle, setSubtitle] = useState(initialData?.subtitle || "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setSubtitle(initialData.subtitle);
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!title.trim() || !subtitle.trim()) {
      setError("Both fields are required.");
      return;
    }
    onSubmit(title, subtitle);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Item" : "Create Item"}
        </h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border w-full mb-2 p-2 rounded"
        />
        <input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Subtitle"
          className="border w-full mb-2 p-2 rounded"
        />

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            {initialData ? "Save" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
