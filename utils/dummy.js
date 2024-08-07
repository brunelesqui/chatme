const datetime = new Date()

const datetimeString = datetime => `<${datetime.toDateString()} ${datetime.getHours()}:${datetime.getMinutes()}>`

const message = {
	username: 'Chat System',
	timeGenerate: datetimeString(datetime),
	content: 'Wellcome to the Chat me'
}

module.exports = {
	message,
	datetimeString
}