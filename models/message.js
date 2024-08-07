const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'nick required']
  },
  datetime: {
    type: String,
    required: [true, 'datetime required']
  },
  content: {
    type: String,
    required: [true, 'message content required']
  }
})

messageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Message', messageSchema)