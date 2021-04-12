import { useState, useEffect, useMemo } from 'react'

export interface Beverage {
  name: string
  brand: string
}

function UseFetchData<Payload>(
  url: string
): {
  data: Payload | null
  done: boolean
} {
  const [data, setData] = useState<Payload | null>(null)
  const [done, setDone] = useState<boolean>(false)

  // const earthTap = useMemo(
  //   () => (data || []).filter((bev) => bev.name.includes('water')),
  //   [data]
  // )

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        setData(d)
        setDone(true)
      })
  }, [url])
  return { data, done }
}

export default function CustomHookComponent() {
  const { data, done } = UseFetchData<Beverage[]>('/og.json')
  return <div>{done && data![0].name}</div>
}
