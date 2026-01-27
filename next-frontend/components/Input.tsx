interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, type = "text", placeholder, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
      />
    </div>
  );
}
