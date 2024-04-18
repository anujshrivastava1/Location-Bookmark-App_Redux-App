import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocationForm from './LocationForm.js';
import { deleteLocation} from '../actions/locationActions.js';
import '../App.css';


const LocationList = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    notes: '',
    gpsLink: '',
  });
  const [editId, setEditId] = useState(null); 

  const handleDelete = (id) => {
    dispatch(deleteLocation(id));
  };

  const handleUpdate = (location) => {
    setFormData({
      name: location.name,
      address: location.address,
      notes: location.notes,
      gpsLink: location.gpsLink,
      _id : location._id
    });
    setEditId(null);
  };

  const handleEdit = (location) => {
    handleUpdate(location);
    setEditId(location.id);
  };

  return (
    <div>
      
      <LocationForm editId = {editId} formData={formData} setFormData={setFormData} />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {locations ? (
          locations.map((location) => (
            <li key={location._id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
              <h3>{location.name}</h3>
              <p>Address: {location.address}</p>
              <p>Notes/Review: {location.notes}</p>
              <p>GPS Address Link: {location.gpsLink}</p>
              {editId === location._id ? (
                <button onClick={() => handleUpdate(location)}>Update</button>
              ) : (
                <button onClick={() => handleEdit(location)}>Edit</button>
              )}
              <button onClick={() => handleDelete(location._id)}>Delete</button>
            </li>
          ))
        ) : (
          <>
            <p>No locations found.</p>
          </>
        )}
      </ul>
      
    </div>
  );
};

export default LocationList;
