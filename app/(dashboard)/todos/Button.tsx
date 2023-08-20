import { useState } from 'react'

export const Button = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
    console.log('Counted!')
  }

  return (
    <button className=" my-2 p-1 border-amber-50 border" onClick={handleClick}>
      Increment:{count}
    </button>
  )
}
