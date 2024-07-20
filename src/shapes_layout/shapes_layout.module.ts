import { Module } from '@nestjs/common';
import { ShapesLayoutController } from './shapes_layout.controller';
import { ShapesLayoutService } from './shapes_layout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shape } from '../shapes/shapes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shape])],
  controllers: [ShapesLayoutController],
  providers: [ShapesLayoutService]
})
export class ShapesLayoutModule {}