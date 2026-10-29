import type { Grade } from '../lib/types'
import { GRADE_WORDS } from '../lib/format'

export default function GradeBadge({ grade, size = 'md', label = true }: { grade: Grade; size?: 'sm' | 'md' | 'lg'; label?: boolean }) {
  return (
    <span className={`grade grade-${size} grade-${grade}`} role="img" aria-label={`Grade ${grade}${label ? `, ${GRADE_WORDS[grade]}` : ''}`}>
      {grade}
    </span>
  )
}
