import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import locationRouter from './routes/locationRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/locations', locationRouter);

connect(process.env.MONGO_URI, { dbName: 'location-bookmark' })
  .then(() => {
    console.log("Mongoose connected successfully.");
  })
  .catch((err) => {
    console.error("Mongoose connection failed:", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
