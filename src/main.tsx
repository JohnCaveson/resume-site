import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk'
import posthog from 'posthog-js'
import './index.css'
import App from './App'

const posthogKey = import.meta.env.VITE_POSTHOG_KEY?.trim()
const posthogHost = import.meta.env.VITE_POSTHOG_HOST?.trim()

if (!posthogKey || !posthogHost) {
  throw new Error(
    'PostHog: missing configuration. Set VITE_POSTHOG_KEY and VITE_POSTHOG_HOST in .env',
  )
}

posthog.init(posthogKey, {
  api_host: posthogHost,
  defaults: '2026-05-30',
})

const context = {
  kind: 'user',
  key: 'bootstrap-user',
}

const clientSideID = import.meta.env.VITE_LAUNCHDARKLY_CLIENT_SIDE_ID?.trim()
if (!clientSideID) {
  throw new Error(
    'LaunchDarkly: missing client-side ID. Set VITE_LAUNCHDARKLY_CLIENT_SIDE_ID in .env',
  )
}

void (async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID,
    context,
    timeout: 5,
  })

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </StrictMode>,
  )
})()
