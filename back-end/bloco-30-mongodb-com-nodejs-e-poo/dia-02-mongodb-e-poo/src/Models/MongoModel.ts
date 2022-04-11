import { Model as M, Document } from 'mongoose';
import Model from '.';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (data: T): Promise<T> => this.model.create({ ...data });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> => this.model.findById(id);
  
  update = async (id: string, data: T): Promise<T | null> =>
    this.model.findByIdAndUpdate(id, data, { new: true });

  delete = async (id: string): Promise<T | null> =>
    this.model.findByIdAndDelete(id);
}

export default MongoModel;
