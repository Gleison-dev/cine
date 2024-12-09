export default function Input({ placeholder, onChange }) {
  return (
    <>
      <input
        className="bg-transparent border-b outline-none w-72"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />{" "}
      <br />
    </>
  );
}
