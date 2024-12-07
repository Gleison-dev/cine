export default function TextArea({ placeholder, onChange }) {
  return (
    <>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        className="text-black"
      ></textarea>{" "}
      <br />
    </>
  );
}
