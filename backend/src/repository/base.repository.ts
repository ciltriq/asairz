  import { Document, Model, Types, UpdateQuery } from "mongoose";
  import type { QueryFilter } from "mongoose";

  export abstract class BaseRepository<T extends Document>
  {
    constructor(protected model: Model<T>) {}

    async findById(id: Types.ObjectId): Promise<T | null> {
      return this.model.findById(id);
    }

    async create(data: Partial<T>): Promise<T> {
      return await this.model.create(data);
    }

    async findAll(filter: QueryFilter<T> = {}): Promise<T[]> {
      return this.model.find(filter);
    }

    async update(id: Types.ObjectId, data: UpdateQuery<T>): Promise<T | null> {
      return this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async findOne(filter: QueryFilter<T>): Promise<T | null> {
      return this.model.findOne(filter);
    }

    async deleteOne(filter: QueryFilter<T>): Promise<void> {
      await this.model.deleteOne(filter);
    }

    async countDocuments(filter: QueryFilter<T> = {}): Promise<number> {
      return this.model.countDocuments(filter);
    }
  }
