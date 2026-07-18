# PostHog post-wizard report

PostHog was integrated into this resume-site SPA. The SDK is initialized in `src/main.tsx` with `VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST` environment variables, with autocapture, session recording, and default settings enabled. Eight targeted interaction events were instrumented across the portfolio's core components — covering the hero, navigation, playground, projects, contact, and terminal sections — without modifying any existing code structure or the LaunchDarkly integration.

| Event name | Description | File |
| --- | --- | --- |
| `hero_cta_clicked` | Captures selection of a primary hero call to action, including its destination. | `src/components/Hero.tsx` |
| `navigation_link_clicked` | Captures a header navigation selection, including the destination section. | `src/components/Header.tsx` |
| `playground_expanded` | Captures a visitor opening the interactive Vim playground. | `src/components/VimPlayground.tsx` |
| `playground_view_changed` | Captures a visitor changing the Vim playground display mode. | `src/components/VimPlayground.tsx` |
| `playground_reset_clicked` | Captures a visitor resetting the Vim playground content. | `src/components/VimPlayground.tsx` |
| `project_link_clicked` | Captures a visitor opening a project repository from the portfolio. | `src/components/Projects.tsx` |
| `contact_cta_clicked` | Captures a visitor selecting the primary professional contact action. | `src/components/Contact.tsx` |
| `terminal_command_run` | Captures use of a recognized command in the interactive resume terminal. | `src/components/Terminal.tsx` |

## Next steps

We've built a dashboard and five insights to keep an eye on visitor behavior:

- [Analytics basics (wizard) dashboard](https://us.posthog.com/project/514228/dashboard/1856510)
- [Portfolio interactions over time](https://us.posthog.com/project/514228/insights/cbmNcjSS)
- [Engagement to contact funnel](https://us.posthog.com/project/514228/insights/7fuDalXn)
- [Hero CTA clicks by destination](https://us.posthog.com/project/514228/insights/8JIcpRgu)
- [Terminal commands by type](https://us.posthog.com/project/514228/insights/EmwHzS5f)
- [Project link clicks by project](https://us.posthog.com/project/514228/insights/RTAY6VPK)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names (`VITE_POSTHOG_KEY`, `VITE_POSTHOG_HOST`) to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or the Vite bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

An agent skill folder remains in this project for future PostHog-focused agent development and current integration guidance.
