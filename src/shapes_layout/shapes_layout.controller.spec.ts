import { Test, TestingModule } from '@nestjs/testing';
import { ShapesLayoutController } from './shapes_layout.controller';

describe('ShapesController', () => {
  let controller: ShapesLayoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShapesLayoutController],
    }).compile();

    controller = module.get<ShapesLayoutController>(ShapesLayoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
