// + Add this import if it's not already there
import { Logger, NotFoundException } from '@nestjs/common';
import { FilterQuery, Model, QueryOptions, Types, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { DeleteResult } from 'mongodb';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;

  protected notFoundMsg = (query: FilterQuery<TDocument>) =>
    `Document not found with filterQuery: ${JSON.stringify(query)}`;

  // ★ Give the assertion return type explicitly
  protected notFoundExeption(
    document: TDocument | null | undefined,
    query: FilterQuery<TDocument>,
  ): asserts document is TDocument {
    if (!document) {
      this.logger.warn(this.notFoundMsg(query));
      throw new NotFoundException('Document was not found');
    }
  }

  constructor(protected readonly model: Model<TDocument>) { }

  async create(document: Partial<Omit<TDocument, '_id'>>): Promise<TDocument> {
    const created = await this.model.create({ ...document, _id: new Types.ObjectId() } as any);
    // return as lean/plain for consistency
    const plain = await this.model.findById(created._id).lean<TDocument>(true);
    this.notFoundExeption(plain, { _id: created._id } as any);
    return plain;
  }

  async createMany(docs: Partial<Omit<TDocument, '_id'>>[]): Promise<TDocument[]> {
    const withIds = docs.map(d => ({ ...d, _id: new Types.ObjectId() }));
    const inserted = await this.model.insertMany(withIds, { ordered: true });
    const ids = inserted.map(d => d._id);
    return this.model.find({ _id: { $in: ids } }).lean<TDocument[]>(true);
  }

  async findOne(
    filterQuery: FilterQuery<TDocument>,
    options?: QueryOptions & { projection?: any },
  ): Promise<TDocument> {
    const q = this.model.findOne(filterQuery, options?.projection, options);
    const document = await q.lean<TDocument>(true);
    this.notFoundExeption(document, filterQuery); // narrows to TDocument
    return document;
  }

  async find(
    filterQuery: FilterQuery<TDocument>,
    options?: QueryOptions & { projection?: any },
  ): Promise<TDocument[]> {
    return this.model.find(filterQuery, options?.projection, options).lean<TDocument[]>(true);
  }

  /** Non-throwing variant */
  async maybeFindOne(
    filterQuery: FilterQuery<TDocument>,
    options?: QueryOptions & { projection?: any },
  ): Promise<TDocument | null> {
    const q = this.model.findOne(filterQuery, options?.projection, options);
    return q.lean<TDocument>(true);
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
    options: QueryOptions = {},
  ): Promise<TDocument> {
    const useOptions: QueryOptions = { new: true, lean: true, ...options };
    const document = await this.model.findOneAndUpdate(filterQuery, update, useOptions);
    this.notFoundExeption(document as TDocument | null, filterQuery);
    return document as unknown as TDocument;
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>,
    options?: QueryOptions,
  ): Promise<TDocument> {
    const document = await this.model.findOneAndDelete(filterQuery, options).lean<TDocument>(true);
    this.notFoundExeption(document, filterQuery);
    return document;
  }

  async count(filterQuery: FilterQuery<TDocument>): Promise<number> {
    return this.model.countDocuments(filterQuery).exec();
  }

  async deleteMany(filterQuery: FilterQuery<TDocument>): Promise<DeleteResult> {
    const result = await this.model.deleteMany(filterQuery).exec();
    if (!result || (result.deletedCount ?? 0) === 0) {
      this.logger.warn(
        `No documents matched for deleteMany with filter: ${JSON.stringify(filterQuery)}`
      );
    }
    return result;
  }
}