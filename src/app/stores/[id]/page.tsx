'use client'

import { useRouter } from 'next/navigation'

export default function StorePage() {
  const router = useRouter()

  return (
    <div>
      <h1>StorePage</h1>
      <button
        type="button"
        onClick={() => {
          router.push('/test')
        }}
      >
        PUSH
      </button>
    </div>
  )
}
