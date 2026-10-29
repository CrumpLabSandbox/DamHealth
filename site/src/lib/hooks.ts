import { useEffect, useState } from 'react'
import { loadCatalog, loadSummary } from './data'
import type { Catalog, Summary } from './types'

export function useAsync<T>(fn: () => Promise<T>, deps: unknown[]): { data: T | null; error: string | null; loading: boolean } {
  const [state, setState] = useState<{ data: T | null; error: string | null; loading: boolean }>({ data: null, error: null, loading: true })
  useEffect(() => {
    let alive = true
    setState((s) => ({ ...s, loading: true, error: null }))
    fn().then(
      (data) => alive && setState({ data, error: null, loading: false }),
      (e: unknown) => alive && setState({ data: null, error: e instanceof Error ? e.message : String(e), loading: false }),
    )
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return state
}

export const useCatalog = () => useAsync<Catalog>(loadCatalog, [])
export const useSummary = () => useAsync<Summary>(loadSummary, [])

export function useTitle(title: string | null | undefined) {
  useEffect(() => {
    document.title = title ? `${title} · DamHealth` : 'DamHealth'
  }, [title])
}
