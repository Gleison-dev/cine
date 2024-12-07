export default function Input({ type, placeholder, onChage }) {
  return (
    <>
      <input
        className="bg-transparent border-b outline-none w-72"
        type={type}
        placeholder={placeholder}
        onChange={onChage}
      />{" "}
      <br />
    </>
  );
}
