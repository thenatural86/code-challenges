import { useRef } from 'react'

export default function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return <input ref={inputRef} />
}
