const messageRouter = require('express').Router()

const Message = require('../models/message')

messageRouter.get('/', (request, response, next) => {
	Message.find({})
		.then(messages => response.json(messages))
})

messageRouter.post('/', (request, response, next) => {
	const body = request.body

	const message = new Message({
		username: body.username,
		datetime: body.datetime,
		content: body.content
	})

	message.save()
		.then(savedMessage => response.status(201).json(savedMessage))
		.catch(err => next(err))
})

module.exports = messageRouter