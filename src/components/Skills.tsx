import { resume } from '../data/resume'

function isRef(item: string | { name: string; ref?: string }): item is { name: string; ref: string } {
  return typeof item === 'object' && 'ref' in item && !!item.ref
}

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function refHref(ref: string) {
  if (ref.startsWith('project:')) {
    return `#projects`  // all projects are in one section
  }
  return `#exp-${slug(ref)}`
}

function skillKey(item: string | { name: string; ref?: string }) {
  return typeof item === 'string' ? item : item.name
}

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
                {group.items.map((item) =>
                  isRef(item) ? (
                    <a key={item.name} href={refHref(item.ref)} className="skill-tag skill-tag-link">
                      {item.name}
                    </a>
                  ) : (
                    <span key={skillKey(item)} className="skill-tag">{skillKey(item)}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
