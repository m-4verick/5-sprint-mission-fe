interface InputSetProps {
  name: string;
  label: string;
  placeholder: string;
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputSet({
  name,
  label,
  placeholder,
  value,
  onChange,
}: InputSetProps) {
  return (
    <div className="mt-6">
      <label className="text-[18px] font-bold">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-4 w-full rounded-xl bg-[#F3F4F6] px-6 py-4"
      />
    </div>
  );
}
