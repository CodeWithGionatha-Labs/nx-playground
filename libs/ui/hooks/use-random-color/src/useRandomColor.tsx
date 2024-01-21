import { RandomColorApiResponse, randomColorApiRoute } from '@nx-playground/random-api-interface'
import { useEffect, useState } from 'react'

type Color = RandomColorApiResponse['color']

const fetchRandomColor = async () => {
	const res = await fetch(`http://localhost:3333${randomColorApiRoute}`)
	const data = (await res.json()) as RandomColorApiResponse

	return data
}

export const useRandomColor = () => {
	const [randomColor, setRandomColor] = useState<Color>('')

	useEffect(() => {
		fetchRandomColor().then((data) => {
			setRandomColor(data.color)
		})
	}, [])

	return randomColor
}
