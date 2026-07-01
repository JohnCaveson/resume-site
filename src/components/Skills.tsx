import { resume } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <span className="section-label">Technical Skills</span>
        <h2 className="section-title">Technologies & Tools</h2>
        <div className="skills-grid">
          {resume.skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-items">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
