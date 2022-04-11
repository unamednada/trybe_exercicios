import { ZodError } from 'zod';
import Model from '../Models';

export interface ServiceError {
  error: ZodError | unknown;
}

abstract class Service<T> {
  constructor(protected model: Model<T>) { }

  public async create(data: T): Promise<T | null | ServiceError> {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      return { error };
    }
  }

  public async read(): Promise<T[] | ServiceError> {
    try {
      const result = await this.model.read();
      return result;
    } catch (error) {
      return { error };
    }
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    try {
      const result = await this.model.readOne(id);
      return result;
    } catch (error) {
      return { error };
    }
  }

  public async update(id: string, data: T): Promise<T | null | ServiceError> {
    try {
      const result = await this.model.update(id, data);
      return result;
    } catch (error) {
      return { error };
    }
  }

  public async delete(id: string): Promise<T | null | ServiceError> {
    try {
      const result = await this.model.delete(id);
      return result;
    } catch (error) {
      return { error };
    }
  }
}

export default Service;
