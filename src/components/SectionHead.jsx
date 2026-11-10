import useReveal from './useReveal';

// One header for every section: a dashed thread leading into a numbered stamp,
// then the title, an optional handwritten aside and an optional lead.
export default function SectionHead({ num, label, title, scribble, lead }) {
  const ref = useReveal(0.4);
  return (
    <div className="sec-head" ref={ref}>
      <div className="sec-mark">
        <span className="sec-thread" aria-hidden="true" />
        <span className="sec-stamp" aria-hidden="true">
          {num}
        </span>
        <span className="kicker">{label}</span>
      </div>
      <div className="work-header">
        <h2 className="section-title">{title}</h2>
        {scribble && <div className="work-scribble">{scribble}</div>}
      </div>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
