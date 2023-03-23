import "./Icons.css";

export default function Icons({ icons, disc, style }) {
  return (
    <div className="Icons__func">
      <span>{icons}</span>
      <p className="Icons__func-p">{disc}</p>
    </div>
  );
}
