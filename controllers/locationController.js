// locationController.js
import Location from '../models/Location.js';

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createLocation = async (req, res) => {
  const location = new Location(req.body);
  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateLocation = async (req, res) => {
  try {
    console.log(req.body)
    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteLocation = async (req, res) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.json({ message: 'Location deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const locationController = {
  getAllLocations,
  createLocation,
  updateLocation,
  deleteLocation
};

export default locationController;
