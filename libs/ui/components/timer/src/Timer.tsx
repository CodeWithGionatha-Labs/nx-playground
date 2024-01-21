import { useEffect, useState } from 'react'

const timeFormatter = new Intl.DateTimeFormat('en-US', {
	timeStyle: 'medium',
	hour12: false,
})

const timeStyle = {
	fontFamily: "'Digital-7 Mono', monospace",
	fontSize: '48px',
	color: 'black',
	padding: '20px',
}

export function Timer({ color }: { color: string }) {
	const [timeMs, setTimeMs] = useState<number>(Date.now())

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeMs(Date.now())

			return () => clearInterval(interval)
		}, 1000)
	})

	return (
		<div>
			<span style={{ ...timeStyle, color }}>{timeFormatter.format(timeMs)}</span>
		</div>
	)
}
