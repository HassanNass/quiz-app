import "./App.css"
import questions from "./questions"
import { useState } from "react";
import Question from "./Question.jsx"

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswer(selecteAnswer) {
    setAnswer(selecteAnswer);
    if (answer === questions[questionId].correctAnswer){
      setScore(score + 1);
    }
  }

  return(
    <div className="container">
      <h1 className="header">Quiz App</h1>
      <Question question={questions[questionId]}
                onAnswer={handleAnswer}
      />
    </div>
  )
}

export default App
