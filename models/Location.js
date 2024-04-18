// Location.js
import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  notes: String,
  gpsLink: String,
});

const Location = mongoose.model('Location', locationSchema);

export default Location
