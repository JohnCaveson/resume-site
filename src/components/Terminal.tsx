import { useCallback, useEffect, useRef, useState } from 'react'
import { resume } from '../data/resume'

type Entry = { type: 'input' | 'output'; text: string }

function help() {
  return [
    'Available commands:',
    '',
    '  about        About this site',
    '  banner       Display the welcome banner',
    '  clear        Clear the terminal',
    '  contact      Contact information',
    '  education    Academic background',
    '  experience   Work experience',
    '  github       GitHub profile',
    '  help         Show this message',
    '  linkedin     LinkedIn profile',
    '  ls           List top-level sections',
    '  neofetch     Show system info (fun version)',
    '  projects     Side projects',
    '  skills       Technologies & tools',
    '  whoami       Who you are',
    '  whois        About Greer',
    '',
    'Try pressing Tab to autocomplete or ↑/↓ for history.',
  ]
}

function banner() {
  return [
    ' ╔══════════════════════════════════════════╗',
    ' ║        GREER GOODMAN — Resume Shell      ║',
    ' ║    Full Stack Software Engineer          ║',
    ' ║    8+ years of experience                ║',
    ' ╚══════════════════════════════════════════╝',
    '',
    `Welcome! Type 'help' to see available commands.`,
  ]
}

function whois() {
  return [
    `Name:        ${resume.name}`,
    `Title:       ${resume.title}`,
    `Experience:  ${resume.summary[0]}`,
  ]
}

const commands: Record<string, () => string[]> = {
  help,
  banner,
  whois,
  whoami: () => [`You are ${resume.name}.`],
  skills: () => {
    return resume.skills.flatMap((g) => [
      `  ${g.category}:`,
      ...g.items.map((s) => `    - ${typeof s === 'string' ? s : s.name}`),
    ])
  },
  experience: () => {
    return resume.experience.flatMap((e) => [
      `  ${e.company} (${e.period})`,
      `    ${e.role}`,
    ])
  },
  projects: () => {
    return resume.projects.map((p) => `  ${p.name}: ${p.description}`)
  },
  education: () => {
    const e = resume.education
    return [`  ${e.degree}`, `  ${e.school}, ${e.year}`, `  ${e.accreditation}`]
  },
  contact: () => {
    return [`  LinkedIn: ${resume.linkedin}`, `  GitHub: ${resume.github}`]
  },
  linkedin: () => [`  ${resume.linkedin}`],
  github: () => [`  ${resume.github}`],
  about: () => [
    'This is an interactive terminal simulation built with React.',
    'It showcases Greer Goodman\'s resume in a fun, CLI-inspired format.',
    '',
    'Built by Greer with agentic assistance.',
  ],
  ls: () => [
    'about/      contact/    education/  experience/',
    'github/     linkedin/   projects/   skills/',
  ],
  neofetch: () => [
    `           `,
    `           Greer Goodman`,
    `           ---------------------------`,
    `           OS:        Arch Linux (btw)`,
    `           Shell:     bash`,
    `           Editor:    Vim 9.1`,
    `           Languages: C#, TypeScript, Rust, SQL`,
    `           Stack:     .NET, React, Angular`,
    `           Cloud:     Azure, AWS`,
    `           Hobbies:   Vim, Rust CLIs, OSS`,
  ],
}

const validCommands = Object.keys(commands)

function autocomplete(input: string): string | null {
  const matches = validCommands.filter((c) => c.startsWith(input))
  return matches.length === 1 ? matches[0] : null
}

export default function Terminal() {
  const [entries, setEntries] = useState<Entry[]>([
    { type: 'output', text: '' },
    ...banner().map((l) => ({ type: 'output' as const, text: l })),
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [entries])

  const run = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase()
      const line: Entry = { type: 'input', text: `$ ${cmd}` }
      const output: Entry[] = []

      if (!trimmed) {
        setEntries((prev) => [...prev, line])
        return
      }

      const parts = trimmed.split(/\s+/)
      const command = parts[0]

      if (command === 'clear') {
        setEntries([])
        setHistory((prev) => [...prev, cmd])
        setHistoryIdx(-1)
        setInput('')
        return
      }

      if (command in commands) {
        const lines = commands[command]()
        output.push({ type: 'output', text: '' })
        for (const l of lines) {
          output.push({ type: 'output', text: l })
        }
      } else {
        output.push({ type: 'output', text: `zsh: command not found: ${command}` })
      }

      setEntries([line, ...output])
      setHistory((prev) => [...prev, cmd])
      setHistoryIdx(-1)
      setInput('')
    },
    [],
  )

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const idx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1)
        setHistoryIdx(idx)
        setInput(history[idx])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx !== -1) {
        const idx = historyIdx + 1
        if (idx >= history.length) {
          setHistoryIdx(-1)
          setInput('')
        } else {
          setHistoryIdx(idx)
          setInput(history[idx])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = autocomplete(input)
      if (match) setInput(match)
    }
  }

  return (
    <section id="terminal" className="terminal section">
      <div className="container">
        <h2 className="section-title">Resume Terminal</h2>
        <p className="terminal-intro">
          Explore the resume through a CLI. Type <kbd>help</kbd> to get started.
        </p>
        <div className="terminal-container" onClick={() => inputRef.current?.focus()}>
          <div className="terminal-output">
            {entries.map((e, i) => (
              <div key={i} className={`terminal-${e.type}`}>
                {e.type === 'input' ? (
                  <span className="terminal-prompt">$ </span>
                ) : null}
                {e.text}
              </div>
            ))}
            <div className="terminal-line">
              <span className="terminal-prompt">$ </span>
              <input
                ref={inputRef}
                className="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
