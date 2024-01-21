import { Timer } from '@nx-playground/ui-timer'
import { useRandomColor } from '@nx-playground/use-random-color-hook'

export function App() {
	const color = useRandomColor()

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h1>
				<span> Hello there, </span>
				Welcome <span style={{ color: 'red' }}>app-one</span> 👋
			</h1>

			<Timer color="red" />

			<span style={{ color, fontSize: 32 }}>{color}</span>
		</div>
	)
}

export default App
