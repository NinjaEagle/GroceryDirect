import express from 'express'
import middlewaresConfig from './config/middlewares'

import './config/db'
const app = express()

middlewaresConfig(app)

app.get('/', (req, res) => {
	res.send('Welcome')
})

app.use('/api/v1/customers', CustomerRoutes)

app.listen(3000, (err) => {
	if (err) {
		console.log(err, 'not work ')
	} else {
		console.log('Server listen on port 3000')
	}
})
