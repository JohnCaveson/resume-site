export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Built with React, TypeScript, and Vite — by Greer Goodman, with agentic assistance.
        </p>
        <p className="footer-text">&copy; {new Date().getFullYear()} Greer Goodman</p>
      </div>
    </footer>
  )
}
