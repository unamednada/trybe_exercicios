/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import RecordStoreService from '../Services/RecordStore';
import RecordStore from '../Interfaces/RecordStore';

class RecordStoreController extends Controller<RecordStore> {
  private _route: string;

  constructor(
    service = new RecordStoreService(),
    route = '/recordstore',
  ) {
    super(service);
    this._route = route;
  }

  get route(): string {
    return this._route;
  }

  create = async (
    req: RequestWithBody<RecordStore>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const result = await this.service.create(body);
      if (!result) {
        return res.status(500).json({ error: this.errors.InternalServerError });
      }
      if ('error' in result) {
        return res.status(400).json(result);
      }
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json({ error: this.errors.InternalServerError });
    }    
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: this.errors.IdRequired });
    }
    try {
      const result = await this.service.readOne(id);
      if (!result) {
        return res.status(404).json({ error: this.errors.NotFound });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: this.errors.InternalServerError });
    }
  };

  update = async (
    req: RequestWithBody<RecordStore>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.errors.IdRequired });
    const { body } = req;
    try {
      const result = await this.service.update(id, body);
      if (!result) {
        return res.status(404).json({ error: this.errors.NotFound });
      }
      if ('error' in result) {
        return res.status(400).json(result);
      }
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: this.errors.InternalServerError });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<RecordStore | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.errors.IdRequired });
    try {
      const result = await this.service.delete(id);
      if (!result) {
        return res.status(404).json({ error: this.errors.NotFound });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: this.errors.InternalServerError });
    }
  };
}

export default RecordStoreController;
