
function Question({ question }) {

	return(
		<div className="question-container">
			<h2 className="question-header">{question.question}</h2>
			{question.options.map((answer, index) => (
				<button className="btn-answer" key={index}>{answer}</button>
			))}
		</div>
	)
}

export default Question
