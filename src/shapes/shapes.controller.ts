import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ShapesService } from './shapes.service';
import { Shape } from './shapes.entity';

@Controller('shapes')
export class ShapesController {
  constructor(private readonly shapesService: ShapesService) {}

  //get all users
  @Get()
  async findAll(): Promise<Shape[]> {
    return this.shapesService.findAll();
  }

  //get shape by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Shape> {
    const shape = await this.shapesService.findOne(id);
    if (!shape) {
      throw new NotFoundException('Shape does not exist!');
    } else {
      return shape;
    }
  }

  //create shape
  @Post()
  async create(@Body() shape: Shape): Promise<Shape> {
    return this.shapesService.create(shape);
  }

  //update shape
  @Put(':id')
  async update (@Param('id') id: number, @Body() shape: Shape): Promise<any> {
    return this.shapesService.update(id, shape);
  }

  //delete shape
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if user does not exist
    const shape = await this.shapesService.findOne(id);
    if (!shape) {
      throw new NotFoundException('Shape does not exist!');
    }
    return this.shapesService.delete(id);
  }

}