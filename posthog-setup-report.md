# PostHog post-wizard report

The wizard has completed a PostHog web analytics integration for this Vite and React portfolio. The browser SDK is initialized from Vite environment variables, preserving default autocapture, session recording, and exception capture. Purposeful interactions now capture conversion-oriented signals without sending visitor-entered content or personal information as event properties.

| Event name | Description | File |
| --- | --- | --- |
| `contact_cta_clicked` | Tracks a visitor selecting the primary contact call to action. | `src/components/Contact.tsx` |
| `project_link_clicked` | Tracks a visitor opening a featured project link. | `src/components/Projects.tsx` |
| `terminal_command_run` | Tracks use of a recognized resume terminal command. | `src/components/Terminal.tsx` |
| `playground_expanded` | Tracks a visitor expanding the interactive editor playground. | `src/components/VimPlayground.tsx` |

## Next steps

- [Analytics basics (wizard) dashboard](https://us.posthog.com/project/514228/dashboard/1855377)
- Saved insights will be added after the newly deployed events have appeared in the PostHog project schema.

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names added here to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or the bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

An agent skill folder remains in this project for future PostHog-focused agent development and current integration guidance.
