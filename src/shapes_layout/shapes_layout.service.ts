import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Shape} from '../shapes/shapes.entity';

@Injectable()
export class ShapesLayoutService {
  constructor(
    @InjectRepository(Shape)
    private shapeRepository: Repository<Shape>,
  ) {}

  async findAllByLayoutName(layoutName: string): Promise<Shape[]> {
    return this.shapeRepository.find({ where: { 'layoutName' : layoutName } });
  }
  
  async findOneByUuid(uuid: string): Promise<Shape> {
    return this.shapeRepository.findOne({ where: { 'uuid' : uuid } });
  }

  async updateByUuid(uuid: string, shape: Partial<Shape>): Promise<Shape> {
    await this.shapeRepository.update(uuid, shape);
    return this.shapeRepository.findOne({ where: { 'uuid' : uuid } });
  }

  async deleteByUuid(uuid: string): Promise<void> {
    await this.shapeRepository.delete({ 'uuid' : uuid  });
  }
  
}