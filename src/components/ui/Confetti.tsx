export default function Confetti() {
  return (
    <div className="confetti">
      {Array.from({ length: 13 }).map((_, i) => (
        <div key={i} className="confetti-piece"></div>
      ))}
    </div>
  );
}
