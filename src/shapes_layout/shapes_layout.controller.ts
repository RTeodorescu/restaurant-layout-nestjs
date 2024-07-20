import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, Query } from '@nestjs/common';
import { ShapesLayoutService } from './shapes_layout.service';
import { Shape } from '../shapes/shapes.entity';

@Controller('shapeslayout')
export class ShapesLayoutController {
  constructor(private readonly shapesLayoutService: ShapesLayoutService) {}

  //get all shapes by layoutName
  @Get('')
    async sayHi(): Promise<string> {
       return "Hi";
  }

  //get all shapes by layoutName
  @Get('/:layoutName')
    async findAllByLayoutName(@Param('layoutName') layoutName: string): Promise<Shape[]> {
       return this.shapesLayoutService.findAllByLayoutName(layoutName);
  }

  //get shape by id
  @Get('/:layoutName/:uuid')
  async findOneByUuid(@Param('layoutName') layoutName: string, @Param('uuid') uuid: string): Promise<Shape> {
    const shape = await this.shapesLayoutService.findOneByUuid(uuid);
    if (!shape) {
      throw new NotFoundException('Shape does not exist!');
    } else {
      return shape;
    }
  }

  //update shape
  @Put(':uuid')
  async updateByUuid (@Param('uuid') uuid: string, @Body() shape: Shape): Promise<any> {
    return this. shapesLayoutService.updateByUuid(uuid, shape);
  }

  //delete shape
  @Delete(':uuid')
  async deleteByUuid(@Param('uuid') uuid: string): Promise<any> {
    //handle error if user does not exist
    const shape = await this.shapesLayoutService.findOneByUuid(uuid);
    if (!shape) {
      throw new NotFoundException('Shape does not exist!');
    }
    return this.shapesLayoutService.deleteByUuid(uuid);
  }
}