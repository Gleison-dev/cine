export default function Button({ text }) {
  return (
    <>
      <button className="w-36 h-14 rounded-md text-black bg-dark_orange hover:bg-light_orange">
        {text}
      </button>
    </>
  );
}
