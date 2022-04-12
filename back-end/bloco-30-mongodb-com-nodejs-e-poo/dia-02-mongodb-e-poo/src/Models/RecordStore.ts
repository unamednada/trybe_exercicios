import { Schema, model as createModel, Document } from 'mongoose';
import RecordStore from '../Interfaces/RecordStore';
import MongoModel from './MongoModel';

interface RecordStoreDocument extends RecordStore, Document { }

const recordStoreSchema = new Schema<RecordStoreDocument>({
  artist: String,
  title: String,
  format: String,
  yearPublished: Number,
  new: Boolean,
}, { collection: 'RecordStore' });

class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(
    model = createModel(
      'RecordStore',
      recordStoreSchema,
    ),
  ) { super(model); }
}

export default RecordStoreModel;
