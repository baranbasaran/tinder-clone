import * as mongoose from 'mongoose';

export const cardSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});


