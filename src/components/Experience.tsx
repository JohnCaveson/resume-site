import { resume } from '../data/resume'

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <span className="section-label">Career</span>
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {resume.experience.map((exp, i) => (
            <div key={i} id={`exp-${slug(exp.company)}`} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-role">{exp.role}</p>
                <ul className="timeline-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
