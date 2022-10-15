export default function Button({ label, color }) {
  // label = "TEXT ?"
  // color="white"
  return (
    <button className={`bg-${color ? color : "white"}`}>
      {label ? label : "TEXT ?"}
    </button>
  );
}
