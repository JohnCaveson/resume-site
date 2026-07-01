import { resume } from '../data/resume'

export default function Strengths() {
  return (
    <section id="strengths" className="strengths section">
      <div className="container">
        <span className="section-label">What I Bring</span>
        <h2 className="section-title">What I Bring to the Table</h2>
        <div className="strengths-grid">
          {resume.strengths.map((s) => (
            <div key={s.title} className="strength-card">
              <span className="strength-icon">{s.icon}</span>
              <h3 className="strength-title">{s.title}</h3>
              <p className="strength-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
