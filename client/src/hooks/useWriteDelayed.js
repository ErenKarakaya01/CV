import { useState, useEffect} from "react"

const useWriteDelayed = (writing, setWriting, article) => {
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState(100)

  useEffect(() => {
    setTimeout(() => {
      setIndex((prev) => prev + 1)
      if (/[.,:!?]/.test(article.charAt(index))) setTime(500)
      setWriting((prev) => {
        return prev + article.charAt(index)
      })
      setTime(100)
    }, time)
  }, [writing])
}

export default useWriteDelayed
