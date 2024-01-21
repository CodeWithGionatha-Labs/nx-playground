import { Timer } from '@nx-playground/ui-timer'

export function App() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h1>
				<span> Hello there, </span>
				Welcome <span style={{ color: 'red' }}>app-one</span> 👋
			</h1>

			<Timer color="red" />
		</div>
	)
}

export default App
