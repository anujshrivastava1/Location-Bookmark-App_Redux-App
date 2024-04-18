// locationActions.js
import axios from 'axios';
export const ADD_LOCATION = 'ADD_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';

export const addLocation = (newLocation) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:5000/locations', newLocation);
        dispatch({
          type: ADD_LOCATION,
          payload: response.data, 
        });
      } catch (error) {
        console.error('Error adding location:', error);
      }
    };
  };

  export const deleteLocation = (id) => {
    return async (dispatch) => {
      try {
        await axios.delete(`http://localhost:5000/locations/${id}`);
        dispatch({type: DELETE_LOCATION,
            payload: id,
      });  
        dispatch(fetchLocations());
      } catch (error) {
        console.error('Error deleting location:', error);
      }
    };
  };

  export const updateLocation = (id, updatedLocation) => {
    return async (dispatch) => {
      try {
        console.log(id,updatedLocation)
        const response = await axios.post(`http://localhost:5000/locations/${id}`, updatedLocation);
        dispatch({
          type: UPDATE_LOCATION,
          payload: response.data,
        });
        dispatch(fetchLocations());
      } catch (error) {
        console.error('Error updating location:', error);
      }
    };
  };

export const fetchLocations = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:5000/locations');
        dispatch({
          type: FETCH_LOCATIONS,
          payload: response.data, 
        });
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
  };
