import { useEffect, useState } from "react"
import trivia from "../data/trivia.json"

const NotFoundTrivia = () => {
  const [currentTrivia, setCurrentTrivia] = useState(null)
  const triviaData = trivia.trivia
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * triviaData.length)
    setCurrentTrivia(triviaData[randomIndex])
  }, [])

  return (
    <div>
      {currentTrivia && (
        <div>
          <p>Q: {currentTrivia.question}</p>
          <p>A: {currentTrivia.answer}</p>
        </div>
      )}
    </div>
  )
}

export default NotFoundTrivia
