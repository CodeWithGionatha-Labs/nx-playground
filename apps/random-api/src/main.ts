import express from 'express'
import * as path from 'path'

const app = express()

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/api/random', (req, res) => {
	const prob = Math.random()

	// eslint-disable-next-line no-nested-ternary
	const color = prob < 0.3 ? 'red' : prob < 0.6 ? 'blue' : 'green'

	res.status(200).json({ color })
})

const port = process.env.PORT || 3333
const server = app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
