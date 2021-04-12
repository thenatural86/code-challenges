import { useEffect, useState } from 'react'

export default function UseEffectComponent() {
  const [val, setVal] = useState<number>(1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v) => v + 1)
    }, 100000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div>
      <div>
        <h5>{val}</h5>
      </div>
    </div>
  )
}
