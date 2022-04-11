import { Schema, model as createModel, Document } from 'mongoose';
import RecordStore from '../Interfaces/RecordStore';
import MongoModel from './MongoModel';

interface RecordStoreDocument extends RecordStore, Document { }

const recordStoreSchema = new Schema<RecordStoreDocument>({
  artist: { type: String, required: true },
  title: { type: String, required: true },
  format: { type: String, required: true },
  yearPublished: { type: Number, required: true },
  new: { type: Boolean, required: true },
});

class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(
    model = createModel(
      'RecordStore',
      recordStoreSchema,
    ),
  ) { super(model); }
}

export default RecordStoreModel;
