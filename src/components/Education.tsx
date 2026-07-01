import { resume } from '../data/resume'

export default function Education() {
  const edu = resume.education
  return (
    <section id="education" className="education section">
      <div className="container">
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic Background</h2>
        <div className="edu-card">
          <div className="edu-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/></svg>
          </div>
          <div className="edu-info">
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-school">{edu.school}</p>
            <p className="edu-year">{edu.year}</p>
            <span className="edu-accred">{edu.accreditation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
