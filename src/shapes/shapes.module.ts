import { Module } from '@nestjs/common';
import { ShapesController } from './shapes.controller';
import { ShapesService } from './shapes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shape } from './shapes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shape])],
  controllers: [ShapesController],
  providers: [ShapesService]
})
export class ShapesModule {}