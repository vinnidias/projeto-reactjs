import './style.css'

export const Button = ({ title, onClick, disabled }) => {
	return (
		<button
			className="button"
			onClick={onClick}
			disabled={disabled}
		>
			{title}
		</button>
	)
}