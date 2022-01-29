import { Injectable, NotFoundException } from '@nestjs/common';
import {
  DeleteResult,
  FindManyOptions,
  Repository,
  UpdateResult,
} from 'typeorm';

@Injectable()
export abstract class GenericService<T> {
  constructor(protected readonly repository: Repository<T>) {}

  async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async getById(id: number): Promise<T> {
    const item = await this.repository.findOne(id);
    if (!item) {
      throw new NotFoundException('NOT_FOUND');
    }
    return item;
  }

  async find(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  async create(data: object): Promise<T> {
    const result = this.repository.create(data);
    return await this.repository.save(result);
  }

  async update(id: string, data: object): Promise<UpdateResult> {
    return await this.repository.update(id, data);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
