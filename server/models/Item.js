const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  minStock: { type: Number, required: true, default: 2 },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);