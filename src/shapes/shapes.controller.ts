import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ShapesService } from './shapes.service';
import { Shape } from './shapes';
// import { Joi } from 'joi';
import * as Joi from 'joi'
import { BadRequestException } from '@nestjs/common';
//import Joi = require("joi")


const rectSchema = Joi.object().keys({
  id: Joi.number().min(1),
  uuid: Joi.string().required(),
  layoutName: Joi.string().required(),
  label: Joi.string().required(),
  section: Joi.string().required(),
  customType: Joi.string().valid('Rect').required(),
  shape: Joi.object().keys({
    top: Joi.number().required(),
    left: Joi.number().required(),
    height: Joi.number().required(),
    width: Joi.number().required()
  }).required()
});

const ellipseSchema = Joi.object().keys({
  id: Joi.number().min(1),
  uuid: Joi.string().required(),
  layoutName: Joi.string().required(),
  label: Joi.string().required(),
  section: Joi.string().required(),
  customType: Joi.string().valid('Ellipse').required(),
  shape: Joi.object().keys({
    top: Joi.number().required(),
    left: Joi.number().required(),
    rx: Joi.number().required(),
    ry: Joi.number().required()
  }).required()
});

const validators: Map<String, any> = new Map([
  ['Rect', rectSchema],
  ['Ellipse', ellipseSchema]
]);

@Controller('shapes')
export class ShapesController {
  constructor(private readonly shapesService: ShapesService) {}

  /**
   * Get all shapes in the table
   * @returns A promise of a list of @type {Shape} objects
   */
  @Get()
  async findAll(): Promise<Shape[]> {
    return this.shapesService.findAll();
  }

  /**
   * Get a shape by its uuid
   * @param layoutName - The name of the shape's layout from the url path
   * @param uuid - The shape's uuid from the url path
   * @returns A promise of a @type {Shape} object
   */
  @Get('/:layoutName/:uuid/')
  async findOne(@Param('layoutName') layoutName: string, @Param('uuid') uuid: string): Promise<Shape> {
    validateLayoutNameAndUuid(layoutName, uuid);

    const shape = await this.shapesService.findOneByUuid(layoutName, uuid);
    if (!shape) {
      throw new NotFoundException('Shape does not exist!');
    } else {
      return shape;
    }
  }

  /**
   * Add a shape to the table
   * @param shape - The shape's data as @type {Shape} from the body of the payload
   * @returns A promise of a @type {Shape} object
   */
  @Post()
  async create(@Body() shape: Shape): Promise<Shape> {
    validateShape(shape);

    return this.shapesService.create(shape);
  }

  /**
   * Update the data of a shape in the table
   * @param layoutName - The name of the shape's layout from the url path
   * @param uuid - The shape's uuid from the url path
   * @param shape - The data that is to be updated as @type {Shape} from the body of the payload
   * @returns A promise of @type {any}
   */
  @Put('/:layoutName/:uuid/')
  async update (@Param('layoutName') layoutName: string, @Param('uuid') uuid: string, @Body() shape: Shape): Promise<any> {
    validateLayoutNameAndUuid(layoutName, uuid);
    validateShape(shape);

    return this.shapesService.updateByUuid(layoutName, uuid, shape);
  }

  /**
   * Deletes a shape from the table
   * @param layoutName - The name of the shape's layout from the url path
   * @param uuid - The shape's uuid from the url path
   * @returns A promise of @type {any}
   */
  @Delete('/:layoutName/:uuid/')
  async delete(@Param('layoutName') layoutName: string, @Param('uuid') uuid: string): Promise<any> {
    validateLayoutNameAndUuid(layoutName, uuid);

    //handle error if user does not exist
    const shape = await this.shapesService.findOneByUuid(layoutName, uuid);
    if (!shape) {
      throw new NotFoundException('Shape does not exist!');
    }
    return this.shapesService.deleteByUuid(layoutName, uuid);
  }

}

/**
 * Validates the given values
 * @param layoutName - The name of the shape's layout
 * @param uuid - The shape's uuid
 * @throws - @type {BadRequestException} if validation fails
 */
function validateLayoutNameAndUuid(layoutName: string, uuid: string) {
  if (layoutName == null) {
    throw new BadRequestException({
      message: 'layoutName must be present'
    });
  }

  if (uuid == null) {
    throw new BadRequestException({
      message: 'uuid must be present'
    });
  }
}

/**
 * Validates the shape based on schema definition
 * @param shape - The shape
 * @throws - @type {BadRequestException} if validation fails
 */
function validateShape(shape: Shape) {
  if (shape == null) {
    throw new BadRequestException({
      message: 'shape must be present'
    });
  }
  let schema = validators.get(shape.customType);

  if (schema == null) {
    throw new BadRequestException({
      message: 'invalid customType'
    });
  }

  const result = schema.validate(shape);

  if (result.error) {
    console.error(result.error);
    throw new BadRequestException({
      message: 'shape has errors: ' + result.error
    });
  } 
}
