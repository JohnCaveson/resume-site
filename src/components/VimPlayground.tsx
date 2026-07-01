import { useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { vim, getCM } from '@replit/codemirror-vim'
import { EditorView } from '@codemirror/view'
import { resume } from '../data/resume'

const initialContent = [
  '# Greer Goodman — Resume',
  '# Full Stack Software Engineer',
  '',
  '## Summary',
  `${resume.summary[0]}`,
  '',
  '## Skills',
  ...resume.skills.flatMap((g) => [
    `### ${g.category}`,
    ...g.items.map((s) => `  - ${s}`),
    '',
  ]),
  '',
  '## Experience',
  ...resume.experience.flatMap((e) => [
    `### ${e.company}  (${e.period})`,
    `  ${e.role}`,
    ...e.highlights.map((h) => `  - ${h}`),
    '',
  ]),
  '',
  '## Education',
  `  ${resume.education.degree}`,
  `  ${resume.education.school}, ${resume.education.year}`,
  `  ${resume.education.accreditation}`,
  '',
  '## Contact',
  `  LinkedIn: ${resume.linkedin}`,
  `  GitHub: ${resume.github}`,
  '',
  '# vim: set ft=markdown :',
].join('\n')

const editorTheme = EditorView.theme({
  '&': {
    backgroundColor: '#0b1120',
    fontSize: '14px',
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  },
  '.cm-content': {
    caretColor: '#38bdf8',
    color: '#e2e8f0',
  },
  '.cm-cursor': {
    borderLeftColor: '#38bdf8',
    borderLeftWidth: '2px',
  },
  '.cm-cursor-secondary': {
    borderLeftColor: '#818cf8',
  },
  '.cm-selectionBackground': {
    backgroundColor: '#1e3a5f !important',
  },
  '&.cm-focused .cm-selectionBackground': {
    backgroundColor: '#1e3a5f !important',
  },
  '.cm-activeLine': {
    backgroundColor: '#0f1a2e',
  },
  '.cm-gutters': {
    backgroundColor: '#0b1120',
    color: '#2d4a6b',
    border: 'none',
    borderRight: '1px solid #162240',
  },
  '.cm-lineNumbers .cm-activeLineGutter': {
    backgroundColor: '#0f1a2e',
    color: '#5b8def',
  },
  '.cm-foldPlaceholder': {
    color: '#2d4a6b',
  },
  '.cm-matchingBracket': {
    outline: '1px solid #38bdf840',
    backgroundColor: '#38bdf808',
  },
  '.cm-trailingSpace': {
    backgroundColor: '#f8717110',
  },
})

export default function VimPlayground() {
  const [content, setContent] = useState(initialContent)
  const [mode, setMode] = useState('NORMAL')
  const viewRef = useRef<EditorView | null>(null)

  const readMode = (view: EditorView) => {
    const cm = getCM(view)
    if (cm?.state?.vim?.mode) {
      const m = cm.state.vim.mode.toUpperCase()
      setMode(m === 'MAYBE' ? 'NORMAL' : m)
    }
  }

  const handleCreate = (view: EditorView) => {
    viewRef.current = view
    readMode(view)
  }

  const handleReset = () => {
    setContent(initialContent)
    if (viewRef.current) {
      viewRef.current.dispatch({
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: initialContent,
        },
      })
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
  }

  const modeColor =
    mode === 'INSERT' ? '#34d399' :
    mode === 'VISUAL' || mode === 'VISUAL LINE' || mode === 'VISUAL BLOCK' ? '#818cf8' :
    mode === 'REPLACE' ? '#fbbf24' :
    mode === 'COMMAND' ? '#f59e0b' :
    '#38bdf8'

  return (
    <section id="vim" className="vim section">
      <div className="container">
        <span className="section-label">Playground</span>
        <h2 className="section-title">Vim Resume Editor</h2>
        <p className="vim-intro">
          Practice your Vim skills on the resume. Changes are sandboxed — nothing is saved.
          Try <kbd>i</kbd> to insert, <kbd>ESC</kbd> for normal mode, <kbd>:w</kbd> to "save" (simulated), <kbd>u</kbd> to undo.
        </p>
        <div className="vim-container">
          <div className="vim-header">
            <div className="vim-mode" style={{ backgroundColor: modeColor }}>
              {mode}
            </div>
            <span className="vim-filename">greer_goodman_resume.md</span>
            <div className="vim-actions">
              <button className="vim-btn" onClick={handleCopy}>Copy</button>
              <button className="vim-btn vim-btn-reset" onClick={handleReset}>Reset</button>
            </div>
          </div>
          <div className="vim-editor">
            <CodeMirror
              value={content}
              theme="dark"
              extensions={[
                json(),
                vim(),
                editorTheme,
                EditorView.lineWrapping,
                EditorView.updateListener.of((update) => {
                  if (update.docChanged) {
                    setContent(update.state.doc.toString())
                  }
                  readMode(update.view)
                }),
              ]}
              onCreateEditor={handleCreate}
              basicSetup={{
                lineNumbers: true,
                foldGutter: true,
                bracketMatching: true,
                closeBrackets: true,
                highlightActiveLine: true,
                history: true,
                autocompletion: false,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
