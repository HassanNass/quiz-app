import "./App.css"
import questions from "./questions"
import { useState } from "react";
import Question from "./Question.jsx"
import Results from "./Results.jsx"

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

  function handleRestart() {
    setQuestionId(0);
    setAnswer("");
    setScore(0);
    setIsFinished(false);
  }

  return(
    <div className="container">
      <h1 className="header">Quiz App</h1>
      {isFinished ? <Results onRestart={handleRestart}
                             score={score}
                             total={questions.length}/>
                  : <div>
                      <h3>Question {questionId + 1} of {questions.length}</h3>
                      <Question question={questions[questionId]}
                                onAnswer={handleAnswer}
                                answer={answer}
                                correctAnswer={questions[questionId].correctAnswer}/>
                      {answer && <button className="btn-next"
                                         onClick={() => handleNext()}
                                 >Next</button>}
                    </div>}
    </div>
  )
}

export default App
