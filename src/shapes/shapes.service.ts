import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Shape} from './shapes.entity';

@Injectable()
export class ShapesService {
  constructor(
    @InjectRepository(Shape)
    private shapeRepository: Repository<Shape>,
  ) {}

  async findAll(): Promise<Shape[]> {
    return this.shapeRepository.find();
  }

  async findAllByLayoutName(layoutName: string): Promise<Shape[]> {
    return this.shapeRepository.find({ where: { layoutName } });
  }

  async findOne(id: number): Promise<Shape> {
    return this.shapeRepository.findOne({ where: { id } });
  }

  async findOneByUuid(uuid: string): Promise<Shape> {
    return this.shapeRepository.findOne({ where: { uuid } });
  }

  async create(shape: Partial<Shape>): Promise<Shape> {
    const newuser = this.shapeRepository.create(shape);
    return this.shapeRepository.save(newuser);
  }

  async update(id: number, shape: Partial<Shape>): Promise<Shape> {
    await this.shapeRepository.update(id, shape);
    return this.shapeRepository.findOne({ where: { id } });
  }

  async updateByUuid(uuid: string, shape: Partial<Shape>): Promise<Shape> {
    await this.shapeRepository.update(uuid, shape);
    return this.shapeRepository.findOne({ where: { uuid } });
  }

  async delete(id: number): Promise<void> {
    await this.shapeRepository.delete(id);
  }

  async deleteByUuid(uuid: string): Promise<void> {
    await this.shapeRepository.delete(uuid);
  }
  
}