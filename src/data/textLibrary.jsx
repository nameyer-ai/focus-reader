import { allTexts } from "../data/texts";

export default function TextLibrary({ onSelect }) {
  return (
    <div className="grid gap-4">
      {allTexts.map((text) => (
        <button
          key={text.id}
          onClick={() => onSelect(text)}
          className="p-4 border rounded-lg text-left hover:bg-gray-100"
        >
          <h3 className="font-bold">{text.title}</h3>

          <p className="text-sm text-gray-600">
            Grade {text.grade} • {text.wordCount} words
          </p>
        </button>
      ))}
    </div>
  );
}