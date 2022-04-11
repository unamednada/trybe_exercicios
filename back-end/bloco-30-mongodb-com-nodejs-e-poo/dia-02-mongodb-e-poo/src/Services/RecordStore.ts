import RecordStore, { RecordStoreSchema } from '../Interfaces/RecordStore';
import Service, { ServiceError } from '.';
import RecordStoreModel from '../Models/RecordStore';

class RecordStoreService extends Service<RecordStore> {
  constructor(model = new RecordStoreModel()) {
    super(model);
  }

  create = async (data: RecordStore): Promise<RecordStore | ServiceError> => {
    const parsed = RecordStoreSchema.safeParse(data);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(data);
  };

  read = async (): Promise<RecordStore[] | ServiceError> => this.model.read();

  readOne = async (id: string): Promise<RecordStore | null | ServiceError> =>
    this.model.readOne(id);

  update = async (
    id: string,
    data: RecordStore,
  ): Promise<RecordStore | null | ServiceError> => {
    const parsed = RecordStoreSchema.safeParse(data);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.update(id, data);
  };

  delete = async (id: string): Promise<RecordStore | null | ServiceError> =>
    this.model.delete(id);
}

export default RecordStoreService;
