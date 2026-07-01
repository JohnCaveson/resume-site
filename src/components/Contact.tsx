import { resume } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content">
          <span className="section-label">Get In Touch</span>
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-text">
            I'm actively seeking opportunities where I can contribute as a full stack engineer,
            solve challenging problems, and deliver real impact. Whether you have a specific role
            in mind or just want to connect, I'd love to hear from you.
          </p>
          <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
            Connect on LinkedIn
          </a>
          <div className="contact-details">
            <span className="contact-item">{resume.email}</span>
            <span className="contact-sep">•</span>
            <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">LinkedIn</a>
            <span className="contact-sep">•</span>
            <a href={resume.github} target="_blank" rel="noopener noreferrer" className="contact-item">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
