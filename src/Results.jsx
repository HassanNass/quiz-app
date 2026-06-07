
function Results({ score, total, onRestart }) {

	return(
		<div className="complete-container">
			<h1 className="header-complete">Quiz Complete</h1>
			<p className="score">You scored {score} out of {total}</p>
			<button className="restart"
					onClick={onRestart}
			>Restart</button>
		</div>
	)
}

export default Results
