import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLocation, deleteLocation , updateLocation} from '../actions/locationActions.js'; 
import '../App.css';


const LocationForm = ({editId, formData, setFormData}) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData._id)
    if (formData._id != null) {
       
      dispatch(updateLocation(formData._id, formData));
    } else {
      dispatch(addLocation(formData));
    }
    setFormData({ name: '', address: '', notes: '', gpsLink: '' });
  };

  return (
    <div style={{ marginBottom: '20px' , alignItems: 'center'}}>
      <h2>Add Location</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ marginBottom: '10px' }} /><br/>
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={{ marginBottom: '10px' }} /><br/>
        <textarea name="notes" placeholder="Notes/Review" value={formData.notes} onChange={handleChange} style={{ marginBottom: '10px' }} /><br/>
        <input type="text" name="gpsLink" placeholder="GPS Address Link" value={formData.gpsLink} onChange={handleChange} style={{ marginBottom: '10px' }} /><br/>
        <button type="submit">Add</button>
      </form>
      <h2>Locations</h2>
    </div>
  );
};

export default LocationForm;
