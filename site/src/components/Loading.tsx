export default function Loading({ what = 'data' }: { what?: string }) {
  return (
    <div className="wrap section" role="status" aria-live="polite">
      <p className="muted">Loading {what}…</p>
    </div>
  )
}

export function ErrorBox({ message }: { message: string }) {
  return (
    <div className="wrap section" role="alert">
      <div className="callout crit"><strong>Something went wrong.</strong> {message}</div>
    </div>
  )
}
