export default function SectionHeading({ eyebrow, title, text, id }) {
  return (
    <header className="section-head">
      {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </header>
  );
}
