const {test, after} = require('node:test')
const assert = require('node:assert')

const mongoose  = require('mongoose')
const supertest = require('supertest')

const app = require('../app')

const api = supertest(app)

const Message = require('../models/message')

const Dummy = require('../utils/dummy')


test('add message to database', async () => {
	const datetime = Dummy.datetimeString(new Date())

	const messageObject = {
		username: 'root',
		datetime: datetime,
		content: 'Hello'
	}

	await api
		.post('/api/messages')
		.send(messageObject)
		.expect(201)
})

test('get all messages from database', async () => {
	const LENGTH = 5
	const response = await api.get('/api/messages')

	assert.strictEqual(response.body.length, LENGTH)
})

test('unknow endpoint', async () => {
	const response = await api.get('/api/unknow')

	assert.strictEqual(response.status, 404)
})

after(async () => await mongoose.connection.close())