export default function Input({ type, placeholder, onChage }) {
  return (
    <>
      <input
        className="text-black"
        type={type}
        placeholder={placeholder}
        onChange={onChage}
      />{" "}
      <br />
    </>
  );
}
