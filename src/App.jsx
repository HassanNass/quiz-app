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
    if (selecteAnswer === questions[questionId].correctAnswer){
      setScore(score + 1);
    }
  }

  function handleNext() {
    if (questionId === questions.length - 1) {
      setIsFinished(true);
    }
    else {
      setQuestionId(questionId + 1);
      setAnswer("");
    }
  }

  return(
    <div className="container">
      <h1 className="header">Quiz App</h1>
      {isFinished ? <div>{score}/5</div>
                  : <div>
                      <Question question={questions[questionId]}
                                onAnswer={handleAnswer}/>
                      {answer && <button className="btn-next"
                                         onClick={() => handleNext()}
                                 >Next</button>}
                    </div>}
    </div>
  )
}

export default App
