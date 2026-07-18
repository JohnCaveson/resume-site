import posthog from 'posthog-js'

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "What I Bring", href: "#strengths" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Playground", href: "#playground" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#hero" className="header-logo">GG</a>
        <nav className="header-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header-link"
              onClick={() => posthog.capture('navigation_link_clicked', { destination: item.href })}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
