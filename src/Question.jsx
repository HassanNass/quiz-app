
function Question({ question, onAnswer }) {

	return(
		<div className="question-container">
			<h2 className="question-header">{question.question}</h2>
			{question.options.map((answer, index) => (
				<button className="btn-answer"
						key={index}
						onClick={() => onAnswer(answer)}
				>{answer}</button>
			))}
		</div>
	)
}

export default Question
