export default function TextArea({ placeholder, onChange }) {
  return (
    <>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        className="bg-transparent border outline-none w-72 h-20 rounded-md"
      ></textarea>{" "}
      <br />
    </>
  );
}
