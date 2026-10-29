import { create } from 'zustand'
import type { Lens } from './types'

const KEY = 'damhealth.lens'

function initial(): Lens {
  try {
    const q = new URLSearchParams(window.location.search).get('view')
    if (q === 'community' || q === 'engineering') return q
    const s = localStorage.getItem(KEY)
    if (s === 'community' || s === 'engineering') return s
  } catch { /* storage unavailable */ }
  return 'community'
}

interface LensState {
  lens: Lens
  setLens: (l: Lens) => void
  toggle: () => void
}

export const useLens = create<LensState>((set, get) => ({
  lens: typeof window === 'undefined' ? 'community' : initial(),
  setLens: (lens) => {
    try { localStorage.setItem(KEY, lens) } catch { /* ignore */ }
    set({ lens })
  },
  toggle: () => get().setLens(get().lens === 'community' ? 'engineering' : 'community'),
}))

/** Theme (light/dark) with system default. */
type Theme = 'light' | 'dark' | 'system'
const THEME_KEY = 'damhealth.theme'

export function getTheme(): Theme {
  try {
    const t = localStorage.getItem(THEME_KEY)
    if (t === 'light' || t === 'dark') return t
  } catch { /* ignore */ }
  return 'system'
}

export function applyTheme(t: Theme) {
  const root = document.documentElement
  if (t === 'system') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', t)
  try {
    if (t === 'system') localStorage.removeItem(THEME_KEY)
    else localStorage.setItem(THEME_KEY, t)
  } catch { /* ignore */ }
}
