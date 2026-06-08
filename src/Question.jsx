
function Question({ question, onAnswer, answer, correctAnswer }) {

	return(
		<div className="question-container">
			<h2 className="question-header">{question.question}</h2>
			{question.options.map((option, index) => (
				<button className={answer ? option === correctAnswer 
										  ? "btn-answer correct" : option === answer 
										  ? "btn-answer wrong" : "btn-answer" 
										  : "btn-answer"}
						key={index}
						onClick={() => onAnswer(option)}
						disabled={answer}
				>{option}</button>
			))}
		</div>
	)
}

export default Question
