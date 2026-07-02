# LaunchDarkly Setup

This project uses [LaunchDarkly](https://launchdarkly.com) for feature flag management.

## SDK Details

- **SDK**: React Web SDK (`launchdarkly-react-client-sdk`)
- **SDK Type**: Client-side (browser)
- **Key Type**: Client-side ID
- **Installed via**: `npm install launchdarkly-react-client-sdk`
- **Initialization file**: `src/main.tsx`

## Configuration

The client-side ID is configured via the `VITE_LAUNCHDARKLY_CLIENT_SIDE_ID` environment variable.

- **Do not hardcode** the client-side ID in source code.
- Add the key to your `.env` file locally (already in `.gitignore`).
- For production, set it in your deployment environment.

## Where to Find Things

| What | Where |
|------|-------|
| Feature flags dashboard | https://app.launchdarkly.com/projects/default/flags |
| Project settings | https://app.launchdarkly.com/settings/projects/default |
| Environments | https://app.launchdarkly.com/settings/projects/default/environments |
| API access tokens | https://app.launchdarkly.com/settings/authorization |
| SDK documentation | https://launchdarkly.com/docs/sdk/client-side/react/react-web |
| LaunchDarkly docs | https://launchdarkly.com/docs |

## How Feature Flags Work in This Project

1. Flags are evaluated using the LaunchDarkly React SDK in `src/main.tsx`
2. The SDK is initialized via `asyncWithLDProvider` which wraps the app
3. Components read flags using the `useFlags()` hook
4. Flag key `my-first-flag` is camelCased to `myFirstFlag` by the React SDK
5. Changes to flags in the dashboard take effect on next page load

### Example: Evaluating a Flag

```tsx
import { useFlags } from 'launchdarkly-react-client-sdk';

function MyComponent() {
  const { myFirstFlag } = useFlags();

  return (
    <div>
      {myFirstFlag ? <p>Feature is ON</p> : <p>Feature is OFF</p>}
    </div>
  );
}
```

## Next Steps

### Feature Flag Best Practices
- **Use flags for every new feature**: Wrap new features in flags so you can release and roll back independently of deployments.
- **Clean up temporary flags**: Mark flags as temporary during creation and archive them when no longer needed.
- **Use descriptive flag keys**: e.g., `enable-checkout-v2` instead of `flag-1`.

### Advanced Capabilities
- **[Percentage Rollouts](https://launchdarkly.com/docs/home/targeting-flags/rollouts)** — Gradually roll out features to a percentage of users.
- **[Targeting Rules](https://launchdarkly.com/docs/home/targeting-flags/targeting-rules)** — Target specific users, segments, or contexts.
- **[Experimentation](https://launchdarkly.com/docs/home/about-experimentation)** — Run A/B tests and measure the impact of flag variations.
- **[configs](https://launchdarkly.com/docs/home/ai-configs)** — Manage AI model configurations and prompts with feature flags.
- **[Guarded Rollouts](https://launchdarkly.com/docs/home/guarded-rollouts)** — Automatically roll back flag changes based on metric guardrails.
- **[Observability](https://launchdarkly.com/docs/home/observability)** — Monitor flag evaluations and SDK performance with built-in telemetry.

### Agent Integration (MCP Server)

The [LaunchDarkly MCP server](https://github.com/launchdarkly/mcp-server) is configured in this project's `opencode.json` (and global opencode config). With it, agents can:

- **Create and manage flags** — Ask your agent to create a new feature flag, and it will handle the API calls for you.
- **Toggle flags on/off** — Turn features on or off across environments without leaving your editor.
- **Set up targeting rules** — Configure percentage rollouts, user targeting, and segment-based rules through natural language.
- **Clean up stale flags** — Ask your agent to find temporary flags that are fully rolled out and ready to archive.

### Installed Agent Skills

The following LaunchDarkly agent skills are installed in this project:

| Skill | Purpose |
|-------|---------|
| `launchdarkly-flag-create` | Create and configure flags with code wiring |
| `launchdarkly-flag-discovery` | Audit flag inventory and health |
| `launchdarkly-flag-targeting` | Toggle flags, rollouts, targeting rules |
| `launchdarkly-flag-cleanup` | Safely remove flags from code |
