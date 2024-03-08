import { Document } from 'mongoose';

export interface Card extends Document {
  name: String;
  imgUrl: String;
}
