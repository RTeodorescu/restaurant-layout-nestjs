import { Test, TestingModule } from '@nestjs/testing';
import { ShapesLayoutService } from './shapes_layout.service';

describe('ShapesService', () => {
  let service: ShapesLayoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShapesLayoutService],
    }).compile();

    service = module.get<ShapesLayoutService>(ShapesLayoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
