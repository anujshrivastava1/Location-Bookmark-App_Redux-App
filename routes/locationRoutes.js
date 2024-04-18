// locationRoutes.js
import express from "express";
const router = express.Router();
import locationController from "../controllers/locationController.js";

router.get('/', locationController.getAllLocations);
router.post('/', locationController.createLocation);
router.post('/:id', locationController.updateLocation);
router.delete('/:id', locationController.deleteLocation);

export default router
