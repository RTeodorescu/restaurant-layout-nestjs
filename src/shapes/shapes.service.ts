import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShapeEntity } from './shapes.entity';
import { Shape } from './shapes';
import { convertShapeToShapeEntity, convertShapeEntityToShape } from './shapes.convertors';
import { convertShapeToShapeEntityPartial, convertShapeEntityToShapePartial } from './shapes.convertors';

@Injectable()
export class ShapesService {

  constructor(
    @InjectRepository(ShapeEntity)
    private shapeRepository: Repository<ShapeEntity>,
  ) {}

  /**
   * Finds all shapes available in the table
   * @returns A promise of a list of @type {Shape} objects
   */
  async findAll(): Promise<Shape[]> {
    return this.shapeRepository.find()
    .then((shapeEntities) => {
      let shapeList: Shape[] = [];  
      for (var shapeEntity of shapeEntities) {
        let shape: Shape = convertShapeEntityToShape(shapeEntity);
        shapeList.push(shape);
      }
      return shapeList
    });

  }
  
  /**
   * Finds all shapes that share the same layout
   * @param layoutName - The name of the layout to search for
   * @returns A promise of a list of @type {Shape} objects
   */
  async findAllByLayoutName(layoutName: string): Promise<Shape[]> {

    return this.shapeRepository.find({ where: { layoutName } })
    .then((shapeEntities) => {
      let shapeList: Shape[] = [];  
      for (var shapeEntity of shapeEntities) {
        let shape: Shape = convertShapeEntityToShape(shapeEntity);
        shapeList.push(shape);
      }
      return shapeList
    });

  }

  /**
   * Finds a specific shape by searching for it by it's uuid
   * @param layoutName - The name of the layout
   * @param uuid - The name of the uuid to search for
   * @returns A promise of a @type {Shape} object
   */
  async findOneByUuid(layoutName: string, uuid: string): Promise<Shape> {
    return this.shapeRepository.findOne({ where: { 'layoutName' : layoutName, 'uuid' : uuid  } })
    .then((shapeEntity) => {return convertShapeEntityToShape(shapeEntity)});
  }

  /**
   * Creates a shape and adds it to the table
   * @param shape - The data of the shape to be added to the table
   * @returns A promise of a @type {Shape} object
   */
  async create(shape: Partial<Shape>): Promise<Shape> {
    let shapeEntity: ShapeEntity = convertShapeToShapeEntityPartial(shape); 
    const newEntity = this.shapeRepository.create(shapeEntity);
    let newShape: Shape = convertShapeEntityToShape(newEntity);

    return this.shapeRepository
                .save(newEntity)
                  .then(
                    (savedShapeEntity) => {
                      return convertShapeEntityToShape(savedShapeEntity)
                    });

  }

  /**
   * Updates a shape in the table with any new data
   * @param layoutName  - The name of the shapes layout
   * @param uuid - The shapes uuid
   * @param shape - The new data for the shape
   * @returns A promise of a @type {Shape} object
   */
  async updateByUuid(layoutName: string, uuid: string, shape: Partial<Shape>): Promise<Shape> {
    let shapeEntity = convertShapeToShapeEntityPartial(shape);
    await this.shapeRepository
    .createQueryBuilder()
    .update(shapeEntity)
    .where("layoutName = :layoutName and uuid = :uuid", { 'layoutName': layoutName, 'uuid': uuid })
    .execute();

    return this.shapeRepository.findOne({ where: { 'layoutName' : layoutName, 'uuid' : uuid  } })
    .then((shapeEntity) => {return convertShapeEntityToShape(shapeEntity)});
  }

  /**
   * Deletes a shape from the table
   * @param layoutName - The layout of the shape
   * @param uuid - The uuid of the shape
   */
  async deleteByUuid(layoutName: string, uuid: string): Promise<void> {
    await this.shapeRepository
    .createQueryBuilder()
    .delete()
    .where("layoutName = :layoutName and uuid = :uuid", { 'layoutName': layoutName, 'uuid': uuid })
    .execute();

  }
  
}