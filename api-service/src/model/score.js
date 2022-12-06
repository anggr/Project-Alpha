const mongoose = require('mongoose')
const Schema = mongoose.Schema
const scoreSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    game: { type: Schema.Types.ObjectId, ref: 'game', required: true },
    score: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  },
  { versionKey: false },
)

module.exports = mongoose.model('score', scoreSchema)
